
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBcXugCtd6Af0ElfEKkRwrp89KCh6sg8wA",
      authDomain: "kwittr-1b192.firebaseapp.com",
      projectId: "kwittr-1b192",
      storageBucket: "kwittr-1b192.appspot.com",
      messagingSenderId: "427545167776",
      appId: "1:427545167776:web:f6a86207da51e6e86a06c5",
      measurementId: "G-P56LGRMDGZ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
          room_name = document.getElementById("room name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("room name", room_name);

          window.location = "kwitter_room.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectTORoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectTORoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function send() 
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      })

      document.getElementById("msg").value = "";
}
