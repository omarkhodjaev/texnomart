import firebase from "firebase";




    const firebaseConfig = {
    apiKey: "AIzaSyCTW61oiGrtkHqRr6iXbOW2zc0AkvNJeO8",
    authDomain: "texnomart-2d597.firebaseapp.com",
    projectId: "texnomart-2d597",
    storageBucket: "texnomart-2d597.appspot.com",
    messagingSenderId: "213850023305",
    appId: "1:213850023305:web:7dc91a72a6697825626d58",
    measurementId: "G-0VW7J1C3S1"
  };

  const backend = firebase.initializeApp(firebaseConfig);
  const auth = backend.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


export { auth ,provider, backend}