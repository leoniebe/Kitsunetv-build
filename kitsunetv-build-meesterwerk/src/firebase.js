import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB-qDPLdfk9Ut8l1h_Ebk20_8x1RabYDM8",
    authDomain: "kitsune-tv-build.firebaseapp.com",
    projectId: "kitsune-tv-build",
    storageBucket: "kitsune-tv-build.appspot.com",
    messagingSenderId: "1023363842318",
    appId: "1:1023363842318:web:0293bcb025c8973aca975f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export {auth};
  export default db;
