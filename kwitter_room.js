
const firebaseConfig = {
    apiKey: "AIzaSyAvN-RfEugp49OMWrYSrGN7oPPB6OI3684",
    authDomain: "kwitter-9037e.firebaseapp.com",
    projectId: "kwitter-9037e",
    storageBucket: "kwitter-9037e.appspot.com",
    messagingSenderId: "211628761781",
    appId: "1:211628761781:web:699fc9867b64eea55e94fc",
    measurementId: "G-QDQKC1TE1J"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();