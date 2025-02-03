
// 🎯IMPORTANT IMPORTANT  IMPORTANT IMPORTANT //

// 🚀 THIS JAVASCRIPT LINE OF CODE IS USED FOR GETTING THE USER'S EXACT LOCATION BY BROWSER REQUEST 
// Function to get the user's location

// 🎯 navigator.geolocation - determines if the browser can access the user's location.
// 🎯 navigator.geolocation.getCurrentPosition(handleLocationSuccess, handleLocationError);
// 🎯 If successful, it calls handleLocationSuccess(position), where position.coords.latitude and position.coords.longitude retrieve the exact coordinates.

function locateUser() {
  if (navigator.geolocation) {              // Check if geolocation is supported by the browser
    navigator.geolocation.getCurrentPosition(handleLocationSuccess, handleLocationError); // Get the user's position
  } else {
    alert('Geolocation is not supported by this browser.');   // Alert if geolocation is not supported
  }
}

// 🚀 THIS JAVASCRIPT LINE OF CODE IS USED FOR GETTING THE USER'S EXACT LOCATION BY BROWSER REQUEST 




// Function to handle the user's location and reverse geocode it
function handleLocationSuccess(position) {
  const latitude = position.coords.latitude;              // Get latitude from the position object
  const longitude = position.coords.longitude;           // Get longitude from the position object

  const formattedLatitude = convertToDMS(latitude, true);        // Convert latitude to DMS format
  const formattedLongitude = convertToDMS(longitude, false);    // Convert longitude to DMS format

  // Set the map's center and zoom level to the user's location
  map.setView([latitude, longitude], 13);




  // Prepare the URL for the reverse geocoding request using Nominatim API
  const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`; 
  // API: Nominatim API (OpenStreetMap) - Used for reverse geocoding (converting coordinates into a human-readable location)

  

  // Fetch the location name from Nominatim API using the user's coordinates
  fetch(apiUrl)
    .then((response) => response.json())                  // Parse the API response as JSON
    .then((data) => {
      const locationName = data.display_name || 'Location name not found';   // Extract the location name

      // Add the user's location marker if it's not already on the map
      if (!userLocationMarker) {
        userLocationMarker = L.marker([latitude, longitude])              // Create a marker for the user's location
          .addTo(map) // Add the marker to the map
          .bindPopup(`  <!-- Popup content -->
            <div class="popup-content">
              <span class="where">Hi!, You are here!</span><br />
              <span class="coordinates">Latitude: ${formattedLatitude}</span><br />
              <span class="coordinates">Longitude: ${formattedLongitude}</span><br />
              <span class="location">Location: ${locationName}</span>
            </div>
          `)
          .openPopup(); // Bind the popup and open it
      }
    })
    .catch((error) => console.error('Error getting location name:', error)); // Handle any errors
}

// Function to handle errors if the user's location can't be retrieved
function handleLocationError(error) {
  alert(`Error getting location: ${error.message}`); // Display an alert with the error message
}







// Initialize the map with a reference to the element with id 'map'
const map = L.map('map');              // Creates a Leaflet map instance linked to the 'map' HTML element
let currentSearchMarker = null;       // Variable to store the current search marker
let userLocationMarker = null;       // Variable to store the user's location marker

// Function to convert decimal coordinates to Degrees, Minutes, Seconds (DMS) format
function convertToDMS(decimal, isLatitude) {
  const absolute = Math.abs(decimal);                      // Get absolute value of the decimal (latitude or longitude)
  const degrees = Math.floor(absolute);                   // Extract whole degrees from the decimal value
  const minutesNotTruncated = (absolute - degrees) * 60;            // Convert fractional part to minutes
  const minutes = Math.floor(minutesNotTruncated);                 // Extract whole minutes
  const seconds = ((minutesNotTruncated - minutes) * 60).toFixed(1); // Convert the remaining part to seconds

  // Determine the direction (N/S for latitude, E/W for longitude)
  const direction = isLatitude
    ? (decimal >= 0 ? 'N' : 'S')                      // For latitude: N for positive, S for negative
    : (decimal >= 0 ? 'E' : 'W');                    // For longitude: E for positive, W for negative

  // Return the coordinates in DMS (Degrees, Minutes, Seconds) format as a string
  return `${degrees}&deg;${minutes}'${seconds}"${direction}`;
}



// 🎯 Allow users to add markers by clicking on the map

map.on('click', function (e) {
  const { lat, lng } = e.latlng; // Get latitude and longitude from the click event
  const marker = L.marker([lat, lng]) // Create a marker at the clicked coordinates
    .addTo(map) // Add the marker to the map
    .bindPopup(`Location by Coordinates:<br>Lat: ${lat.toFixed(5)}, Lon: ${lng.toFixed(5)}`) // Bind a popup with the coordinates
    .openPopup(); // Open the popup

  // Add a right-click event listener to remove the marker
  marker.on('contextmenu', function () {
    map.removeLayer(marker); // Remove the marker when right-clicked
  });
});

// 🎯 Allow users to add markers by clicking on the map




// 🎯 THIS CODE IS USED TO DISPLAY THE MAP TILES AND LOCATIONS OF THE USER
// 🎯 THIS ALSO USED FOR BROWSING A CHOSEN LOCATION OF THE USER THAT NEEDS OR WANTS TO BE MARKED

// Add OpenStreetMap tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map); 
// API: OpenStreetMap Tile Layer - Used to display the map tiles

//🎯THIS CODE IS USED TO DISPLAY THE MAP TILES AND LOCATIONS OF THE USER



 


///// Function for searching a location using Nominatim API/////
function searchLocation() {
  const searchInput = document.getElementById('location-search').value; // Get the search input value

  // Check if the search input is empty
  if (!searchInput.trim()) {
    alert('Please enter a location to search.'); // Alert if no input is provided
    return; // Stop execution if no input is entered
  }

  // Prepare the URL for the search query using the Nominatim API
  const searchUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(searchInput)}&format=json&addressdetails=1`;
  // API: Nominatim API (OpenStreetMap) - Used for geocoding (converting a location name to coordinates)


  // Fetch the search results from Nominatim API
  fetch(searchUrl)
    .then((response) => response.json()) // Parse the API response as JSON
    .then((data) => {
      // If no results are found, alert the user
      if (data.length === 0) {
        alert('No results found for your search.');
        return;
      }

      const result = data[0]; // Get the first search result
      const lat = parseFloat(result.lat); // Get latitude of the result
      const lon = parseFloat(result.lon); // Get longitude of the result

      // Remove the current search marker if it exists
      if (currentSearchMarker) {
        map.removeLayer(currentSearchMarker);
      }

      // Create a new marker for the search result and add it to the map
      currentSearchMarker = L.marker([lat, lon])
        .addTo(map) // Add the marker to the map
        .bindPopup(`Location: ${result.display_name}`) // Bind a popup with the location name
        .openPopup(); // Open the popup

      // Add a right-click event listener to remove the search marker
      currentSearchMarker.on('contextmenu', function () {
        map.removeLayer(currentSearchMarker); // Remove the search marker when right-clicked
        currentSearchMarker = null; // Reset the current search marker variable
      });

      // Set the map view to the search result location
      map.setView([lat, lon], 13);
    })
    .catch((error) => console.error('Error searching location:', error)); // Handle any errors
}

// Add event listener to the search button to trigger the search function
document.getElementById('search-button').addEventListener('click', searchLocation);

// Call the function to get the user's location
locateUser();


///// Function for searching a location using Nominatim API/////