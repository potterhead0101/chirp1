// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyBGL0yVD-6Y91BmqUlhhmuIpvqJURncM",
  authDomain: "social-media-3b168.firebaseapp.com",
  projectId: "social-media-3b168",
  storageBucket: "social-media-3b168.appspot.com",
  messagingSenderId: "467005784217",
  appId: "1:467005784217:web:5307913d599e1135097808"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
