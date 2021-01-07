importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBLxztEkSVftuyOeKn8Cf1psu9W8sIy7mY",
    authDomain: "krypton-web.firebaseapp.com",
    projectId: "krypton-web",
    storageBucket: "krypton-web.appspot.com",
    messagingSenderId: "848117563079",
    appId: "1:848117563079:web:67ebee6c2a10c7ef0008e2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    // Customize notification here
    const notificationTitle = payload.data.title;
    const notificationOptions = {
        body: payload.data.message,
        icon: "/assets/img/ic.png",
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});
