# 📌 "Geo-Mail: A Comprehensive Solution for Mapping and Email Integration in Location-Based Services"
 

## 📝 Description
The **"Geo-Mail: A Comprehensive Solution for Mapping and Email Integration in Location-Based Services"** is a web-based application that integrates multiple APIs to provide an interactive and functional user experience. This project leverages **OpenStreetMap** and **Nominatim API** for seamless location search and map visualization, while the **Email API** enables users to send automated emails directly from the application.

Designed with **user-friendliness and responsiveness** in mind, this project ensures smooth navigation between features, making it useful for real-world applications such as **location-based services, automated messaging, and interactive web development**.

🔹 **Key Functionalities:**  
- **Search & Locate Places**: Users can enter location names and retrieve coordinates via the Nominatim API.  
- **Interactive Maps**: Display searched locations dynamically using OpenStreetMap.  
- **Send Emails Instantly**: Users can compose and send emails via the integrated Email API.  
- **User-Friendly Interface**: A responsive and clean design for seamless interaction.  

## 🚀 Features
✅ **OpenStreetMap Integration** – Displays an interactive map with user search capabilities.  
✅ **Nominatim API for Geolocation** – Allows users to search for locations and retrieve coordinates from OpenStreetMap Data.  
✅ **Email API Integration** – Enables sending emails directly from the web application.  
✅ **User-Friendly Interface** – Provides an intuitive experience for navigation and interaction.  

## 🛠 Languages - API's - Used
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** N/A 
- **APIs Integrated:**  
  - OpenStreetMap API  
  - Nominatim API  
  - Email API  

## 📥 Installation
### Prerequisites
Ensure you have the following installed on your system:
- A modern web browser (Chrome, Firefox, Edge, etc.)
- A code editor ( Visual Studio Code)
- (Optional) Node.js if backend features are included

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo
   ```
3. Open `index.html` in a web browser to start the application.

## 📌 Usage
### Navigating the Pages
- **Home Page**: Introduction and navigation to main functionalities.
- **Map Page**: Displays an interactive map with search functionality using OpenStreetMap and Nominatim API.
- **Email Page**: Allows users to send emails via an integrated email API.

### API Usage
#### OpenStreetMap & Nominatim API
These APIs are used for fetching location data and rendering maps. 
Example usage:
```js
fetch(`https://nominatim.openstreetmap.org/search?format=json&q=New York`)
  .then(response => response.json())
  .then(data => console.log(data));
```

#### Email API
The Email API is used for sending automated emails from the web application.
Example usage:
```js
const emailData = {
  to: 'recipient@example.com',
  subject: 'Test Email',
  body: 'This is a test email sent from our web application.'
};

sendEmail(emailData);
```

## 📂 File Structure
```
📂 project-directory
 ┣ 📜 index.html  # Main entry point
 ┣ 📜 2ndPageindex.html  # Map page
 ┣ 📜 3rdPageEmailAPI.html  # Email API page
 ┣ 📜 1stPageMainPageAPI.css  # Styles for main page
 ┣ 📜 2ndPagestyles.css  # Styles for map page
 ┣ 📜 2ndPageMapCoordinates.js  # JavaScript for map functionality
 ┣ 📜 3rdPageEmailAPI.js  # JavaScript for email functionality
```

## 📸 Screenshots
### Map Page
![Image](https://github.com/user-attachments/assets/b47e03c4-9067-4cb4-bdf7-35d717b37f94)

### Email Page
![Image](https://github.com/user-attachments/assets/41f7623e-e42b-49ba-9278-ab3ef71bd118)

## 🛠 Troubleshooting & Common Issues
1. **API Not Responding**: Ensure you are connected to the internet and the API endpoints are correct.
2. **Email Not Sending**: Verify API keys and check the email provider’s restrictions.
3. **Map Not Loading**: Check if JavaScript is enabled in your browser.

## 🙌 Contributing
If you wish to contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-branch`
5. Open a Pull Request.

## 📜 License
This project is licensed under the [MIT License](LICENSE).

## 🎉 Acknowledgments
Special thanks to all API providers and contributors for making this project possible.

