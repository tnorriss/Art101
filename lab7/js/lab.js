// index.js - Lab 7: Functions
// Authors: Tanner Norriss-Spano Ekaterina Mcleod
// Date: 05/02/2024

//function sortUserName () {
    //var userName = window.prompt("Hi, please type in your name.");
    //console.log ("userName = ", userName);

    //var nameArray = userName.split('');
   // console.log("nameArray =", nameArray);

   // var nameArraySort = nameArray.sort();
    //console.log("nameArraySort= ", nameArraySort);

   // var nameSorted = nameArraySort.join('');
    //console.log("nameSorted=", nameSorted);

    //return nameSorted

//}

//document.writeln("Here I fixed your name by the way: ", sortUserName(), "</br");


//new function that uses sort ()

function sortUserName() {
    var userName = window.prompt("Hi, please type in your name.");
    console.log("userName = ", userName);

    var nameArray = userName.toLowerCase().split('');
    console.log("nameArray =", nameArray);

    var nameArraySort = nameArray.sort();
    console.log("nameArraySort= ", nameArraySort);

    var nameSorted = nameArraySort.join('');
    console.log("nameSorted=", nameSorted);

    return nameSorted;
}

document.writeln("Here I fixed your name by the way: ", sortUserName(), "</br>");
