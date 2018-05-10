

// Select all divs and give them a purple background
$("div").css("backgroundColor", "purple")

// Select the divs with class "highlight" and make them 200px wide
$(".highlight").css("width", "200px")

// Select the divs with id "third" and give it an orange border

$("#third").css({
  border: "medium solid orange"
});

// bonus: select the first div only and change its font color to pink

$("div:first-of-type").css("color", "pink")
