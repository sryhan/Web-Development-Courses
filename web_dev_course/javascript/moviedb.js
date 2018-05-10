
// create an array of movie objects. Each movie should have a title, rating, and
// hasWatched properties. Iterate through the array and print out something that
// looks like:
// "You have watched "Frozen" - 4.5 stars

var movieDB = [
  {
    title: "Alien",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Bladerunner",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Mad Max Fury Road",
    rating: 4.5,
    hasWatched: false
  },
  {
    title: "Toy Story",
    rating: 4.5,
    hasWatched: false
  }
];

movieDB.forEach(function(movie){

  if (movie.hasWatched) {
    console.log("You have watched " + movie.title + " - " + movie.rating + " stars.");
  } else {
    console.log("You have not seen " + movie.title + " - " + movie.rating + " stars.");
  }
});
