
console.log("Your index.js file is loaded correctly!");
$(document).ready(function(){
    
    // jQuery methods go here...
    $("#Greeting").hover(function(){
    console.log("It clicked!");
    });
  
  });
  $("button").on("click", function(){
  $("button").css("display", "none");
  });