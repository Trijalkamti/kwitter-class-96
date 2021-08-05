const firebaseConfig = {
    apiKey: "AIzaSyBcXugCtd6Af0ElfEKkRwrp89KCh6sg8wA",
    authDomain: "kwittr-1b192.firebaseapp.com",
    databaseURL: "https://kwittr-1b192-default-rtdb.firebaseio.com",
    projectId: "kwittr-1b192",
    storageBucket: "kwittr-1b192.appspot.com",
    messagingSenderId: "427545167776",
    appId: "1:427545167776:web:f6a86207da51e6e86a06c5",
    measurementId: "G-P56LGRMDGZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}