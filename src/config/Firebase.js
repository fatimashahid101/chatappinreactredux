import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
  
var firebaseConfig = {
    apiKey: "AIzaSyD6RjuRZUIzDtCnMOldqofo6SZbhZ1yMgI",
    authDomain: "chit-chat-46349.firebaseapp.com",
    projectId: "chit-chat-46349",
    storageBucket: "chit-chat-46349.appspot.com",
    messagingSenderId: "212474487932",
    appId: "1:212474487932:web:e7b93a0d05b758ae57d5f9",
    measurementId: "G-R1L9PWNRED"
  };
  
  // Initialize Firebase
  export default  firebase.initializeApp(firebaseConfig);