// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from "firebase";
  import '@firebase/firestore';
  import '@firebase/auth';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBbWoK0lrCKbsM4-8nY1flqh7gGzr8Nbxk",
    authDomain: "instagram-clone-3bbfd.firebaseapp.com",
    projectId: "instagram-clone-3bbfd",
    storageBucket: "instagram-clone-3bbfd.appspot.com",
    messagingSenderId: "186591536054",
    appId: "1:186591536054:web:8fa19d27b1d739bd971717",
    measurementId: "G-KQPVRBLMRW"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export{ db, auth, storage };

  // export default db;