// Initialize Firebase
var config = {
    apiKey: "AIzaSyAToMKPtnb6L3iEvzX5b_Wmuh5_8B4Hanw",
    authDomain: "train-scheduler-3c3f0.firebaseapp.com",
    databaseURL: "https://train-scheduler-3c3f0.firebaseio.com",
    projectId: "train-scheduler-3c3f0",
    storageBucket: "gs://train-scheduler-3c3f0.appspot.com",
    messagingSenderId: "893324783279"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $("#addTrainBtn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var trainName = $("#trainName").val().trim();
    var dest = $("#dest").val().trim();
    var firstTrain = $("#firstTrain").val().trim();
    var trainFreq = $("#trainFreq").val().trim();
  
    // Creates local "temporary" object for holding employee data
    var newTrain = {
      name: trainName,
      dest: dest,
      first: firstTrain,
      freq: trainFreq
    };
  // Uploads employee data to the database
  database.ref().push(newTrain);

  // Logs everything to console
  console.log(newTrain.name);
  console.log(newTrain.dest);
  console.log(newTrain.first);
  console.log(newTrain.freq);
 
  // Alert
  alert("New Train successfully added");

  // Clears all of the text-boxes
  $("#trainName").val("");
  $("#dest").val("");
  $("#firstTrain").val("");
  $("#trainFreq").val("");

  });