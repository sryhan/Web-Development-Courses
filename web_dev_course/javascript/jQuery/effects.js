
// console.log("connected");

// $("button").on("click", function() {
//   $("div").fadeIn(1000, function() {
//     // console.log("Fade completed");
//     // $(this).remove();
//   });
// })

// $("button").on("click", function() {
//   $("div").fadeToggle(500);
// })

$("button").on("click", function() {
  $("div").slideToggle(100, function() {
    // console.log("slide is done");
    $(this).remove();
  });
})
