$(document).ready(function() {
    // Append button to challenge section
    $('#Challenge').append('<button id="ChallengeButton">Click me!</button>');
  
    // Append button to problems section
    $('#Problems').append('<button id="ProblemsButton">Click me!</button>');

    //Append button to reflection section
    $('#Reflection').append('<button id="ReflectionButton">Click me!</button>');

    //Append button to results section
    $('#Results').append('<button id="ResultsButton">Click me!</button>');


//Button event handlers
    $('#ChallengeButton').click(function() {
        alert('You clicked the challenge button!');
    });

    $('#ProblemsButton').click(function() {
        alert('You clicked the problems button!');
    });

    $('#ResultsButton').click(function() {
        alert('You clicked the results button!');
    });
    $('#ReflectionButton').click(function() {
        alert('You clicked the reflection button!'); 
    });
}); 