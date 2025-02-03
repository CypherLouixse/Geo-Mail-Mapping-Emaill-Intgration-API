
// 🚀 EmailJS API 🚀 
// 🎯 Description: API allows users to send emails directly from the application, 
//eliminating the need for traditional email clients or backend mail servers.

function sendMail() { //Declares the sendMail() function. This function will be called when the user submits the contact form. It is designed to gather the form data and send it using the EmailJS service.
  
  
  // Create an object to hold the user's input from the form

   var params = {  //Declares a variable params which is an object. This object will hold the user's input values from the form fields (name, email, and message) to send as parameters in the email.
     
     name: document.getElementById("name").value,         
      //Accesses the input element with the ID name and gets the value entered by the user. This value is assigned to the name property of the params object.
     // Get the value of the "name" input field
     
     
     email: document.getElementById("email").value, 
      // Similar to line 3, it accesses the input element with the ID email and gets the value entered by the user. This value is assigned to the email property of the params object.  
      // Get the value of the "email" input field
     
     
     message: document.getElementById("message").value,  
      //Accesses the textarea element with the ID message and retrieves the message that the user entered. The value is assigned to the message property of the params object
     // Get the value of the "message" textarea
   };


   
   // Define the EmailJS service ID//>>>>
   const serviceID = "service_zs7arnd"; 
   // Declares a constant serviceID which holds the unique identifier for the EmailJS service. This ID links to the specific service you've created in your EmailJS account                
   // This is the unique ID of the EmailJS service you are using



   
    // Define the EmailJS template ID//>>>>
   const templateID = "template_wt65oqq";  
   // Declares a constant templateID which holds the unique identifier for the email template. The template is set up in the EmailJS dashboard, defining the format and structure of the email to be sent.           
   // This is the unique ID of the EmailJS template that defines the email's content and format
 

     // Call the EmailJS `send` method to send the email//>>>>>
     emailjs.send(serviceID, templateID, params)    
      //Calls the emailjs.send() function, which sends the email using the parameters passed to it. It takes three arguments:
     // Pass the service ID, template ID, and user parameters (params) to the method
     
     .then(res=>{        // If the email is successfully sent, execute the following:      

         document.getElementById("name").value = "";           // Clear the "name" input field
         document.getElementById("email").value = "";         // Clear the "email" input field
         document.getElementById("message").value = "";      // Clear the "message" textarea
         console.log(res);  // Log the response object for debugging purposes                
         alert("Your message sent successfully!!")         // Display a success message to the user
 
     })
     .catch(err=>console.log(err));           // If there is an error, log the error object to the console for debugging
 
 }

 
 