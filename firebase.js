
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDeu5gYaT1uhulmJX-wzhhNG5pMWerjKA0",
    authDomain: "ownresume-builder-b9e8c.firebaseapp.com",
    projectId: "ownresume-builder-b9e8c",
    storageBucket: "ownresume-builder-b9e8c.appspot.com",
    messagingSenderId: "796220945053",
    appId: "1:796220945053:web:b107b9eb0eabb4bb6cda74",
    measurementId: "G-W3X46WMSLX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
