// index.js - purpose and description here
// Author: Tanner Norris-Spano
// Date: April 30, 2024

// Define Variables
myTransport = ("Lexus LS430", "bike", "Schoolbus")
// Functions
//create and object for my mainride
myMainRide = {
  make: "Lexus",
  model : "LS430",
  color : "silver", 
  year: 2004,
  age: function () {
    return 2024 - this.year
  }
};


//output
document.writeIn("Getting around: " + myTransport + "<br>");
document.writeIn("My main ride: <pre> ", JSON.stringify(myMainRide, null, '\t'), "<pre");





