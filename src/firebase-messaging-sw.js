console.log("START service worker");

// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
// importScripts('https://www.gstatic.com/firebasejs/[the number of version matching with firebase in package.json]/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/[for example: 7.16.1]/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
firebase.initializeApp({ 
    apiKey: "{{tua_apiKey}}",   // esempio: AIzaSyDTaq8pai_7jiu5yqjiiunonoYBalrneKbKUDPfFVI
    authDomain: "{{tuo_progetto}}.firebaseapp.com",
    projectId: "{{tuo_progetto}}",
    storageBucket: "{{tuo_progetto}}.appspot.com",
    appId: "{{tuo_appId}}",     // esempio: 1:123456789012:web:687f4c27e6302771c12345
    measurementId: "{{tuo_measurementId}}", // esempio: G-8KTYZHUKNDSRREDQ
    
    messagingSenderId: "{{tuo_messagingSenderId}}" // esempio: "1234567890123"
});


// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

console.log("END service worker");



