import * as firebase from 'firebase'


const config = {
      apiKey: "AIzaSyC98aLfgZL2aDrLvxSd01luw1gqnx6f_7w",
      authDomain: "firedux-todo-eecec.firebaseapp.com",
      databaseURL: "https://firedux-todo-eecec.firebaseio.com",
      projectId: "firedux-todo-eecec",
      storageBucket: "",
      messagingSenderId: "86181431112",
      // not stipulated in the tutorial appId:
    };

// Initialize Firebase
firebase.initializeApp(config)
const databaseRef = firebase.database().ref()
export const todoRef = databaseRef.child("todos")




// FIREbase provided
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/6.6.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#config-web-app -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyC98aLfgZL2aDrLvxSd01luw1gqnx6f_7w",
//     authDomain: "firedux-todo-eecec.firebaseapp.com",
//     databaseURL: "https://firedux-todo-eecec.firebaseio.com",
//     projectId: "firedux-todo-eecec",
//     storageBucket: "",
//     messagingSenderId: "86181431112",
//     appId: "1:86181431112:web:d59f4b0b618f24df7ad57d"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>