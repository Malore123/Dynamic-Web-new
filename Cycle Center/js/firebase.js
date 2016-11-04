console.log("firebase.js ready to roll")

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDqCowWm_tfPP6BlQZIWiRCWzSwsD1dnFM",
    databaseURL: "https://dynamic-web-template-e91d4.firebaseio.com"
  };
  firebase.initializeApp(config);

// this is the whole database
var database = firebase.database();

//only the "people" part of the database
var peopleData = database.ref('people');

//create a list of people
var peopleList = []; //empty list for now

// load all the children of "people"
// keep listening for new children 
peopleData.on('child_added', function(childData){
// run these instructions for each child
    console.table( childData.val() );
    var person = childData.val(); // extraxt data about the person
    peopleList.push( person ); // add the person to the peopleList
})



// NEW ONE
<script src="https://www.gstatic.com/firebasejs/3.5.3/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB-0D23HfU9-GOtLPlj6yWf_IOu7mC4XkU",
    authDomain: "bike-shop2-dca01.firebaseapp.com",
    databaseURL: "https://bike-shop2-dca01.firebaseio.com",
    storageBucket: "bike-shop2-dca01.appspot.com",
    messagingSenderId: "148275474761"
  };
  firebase.initializeApp(config);
</script>