//modify button elements 

//add button to challenge
$("#Challenge").append("<button id='button-Challenge'>Make Special</button>"); 
$("button-Challenge").click(function(){
    $("#Challenge").toggleClass("special");
});


//add button to Problems
$("#Problems").append("<button id='button-problems'>Make Special</button>"); 
$("button-Problems").click(function(){ 
    $("#Problems").toggleClass("special");
});

//add button to reflection 
$("#Reflection").append("<button id='button-Reflection'>Make Special</button>"); 
$("button-Reflection").click(function(){ 
    $("#Reflection").toggleClass("special");
}); 

