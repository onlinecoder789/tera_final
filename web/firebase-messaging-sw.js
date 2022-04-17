importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDNFpZzBcrERF_NXkac42wSEeY-GiOYzXk",
  authDomain: "foodholic-9ed83.firebaseapp.com",
  projectId: "foodholic-9ed83",
  storageBucket: "foodholic-9ed83.appspot.com",
  messagingSenderId: "928294109945",
  appId: "1:928294109945:web:fc1d825b8fcd2e93dc1828",
  databaseURL: "...",
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});