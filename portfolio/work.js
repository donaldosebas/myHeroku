// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyC4OTd2RrD-JuQTTwIRVNHenkE0y1aV62Q",
    authDomain: "portafolio-d5990.firebaseapp.com",
    databaseURL: "https://portafolio-d5990-default-rtdb.firebaseio.com",
    projectId: "portafolio-d5990",
    storageBucket: "portafolio-d5990.appspot.com",
    messagingSenderId: "56064503215",
    appId: "1:56064503215:web:8507b28add8833a79c135a"
};
firebase.initializeApp(config);
  
// Reference messages collection
var messagesRef = firebase.database().ref('messages');
  
// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
function submitForm(e){
    e.preventDefault();
  
    // Get values
    var email = getInputVal('email');
    var message = getInputVal('message');
    // Save message
    saveMessage(email, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);

    
    // Clear form
    document.getElementById('contactForm').reset();
}
  
  // Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}
// Save message to firebase
function saveMessage(email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      email:email,
      message:message
    });
}