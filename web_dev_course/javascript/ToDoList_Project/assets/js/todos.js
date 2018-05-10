// console.log("connected");

//check off specific todos by clicking

$("ul").on("click", "li", function() {
  // $(this).css("color", "gray");
  // $(this).css("text-decoration", "line-through");

  // //if li is gray
  // if($(this).css("color") === "rgb(128, 128, 128)") {
  //   //turn it black
  //   $(this).css({
  //     color: "black",
  //     textDecoration: "none"
  //   });
  // }
  // //else
  // else{
  //   $(this).css({
  //     color: "rgb(128, 128, 128)",
  //     textDecoration: "line-through"
  //   });
  // };

  //much easier way than the above jquery code
  $(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if(event.which === 13){
    //grabs new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='far fa-trash-alt'></i></span>" + todoText + "</li>")
  };
});

$(".fa-pencil-alt").click(function() {
  $("input[type='text']").fadeToggle();
});
