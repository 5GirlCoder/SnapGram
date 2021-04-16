/* This is the js for 2nd screen */ 

    var firebaseConfig = {
    apiKey: "AIzaSyBtPH4NWNXTHmnnDXWVo4SQ5iutQ_fD9Ac",
    authDomain: "snapgram-dd4e6.firebaseapp.com",
    projectId: "snapgram-dd4e6",
    storageBucket: "snapgram-dd4e6.appspot.com",
    messagingSenderId: "32567160224",
    appId: "1:32567160224:web:324f4910a7e0212ccf48c5"
  };
  firebase.initializeApp(firebaseConfig);
    
    var UserName = localStorage.getItem("UserName");
    console.log(UserName);
    document.getElementById("RoomUsername").innerHTML = "Welcome " + UserName; 

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   });});}
getData();