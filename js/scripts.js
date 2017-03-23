$(document).ready(function(){
  $("#animals").submit(function(event){

 var choice = $("input:radio[name=animal]:checked").val();
  $(".turtles, .penguins, .koalas").hide();
  if (choice === "Turtles"){
    $(".turtles").show();
  }
  if (choice === "Penguins"){
    $(".penguins").show();
  }
  if (choice === "Koalas"){
    $(".koalas").show();
  }
  
  event.preventDefault();
  })
});
