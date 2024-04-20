// When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
$("#submit-btn").on("click", (e) => {
  e.preventDefault();

  // capature values
  const movie = createMovie();

  // Ensure that the rating can only be between 0 and 10.
  if (movie.rating > 10) {
    alert("Please enter a rating between 0 and 10");
    return;
  }
  if (movie.title.length < 2) {
    $("#title").focus();
    alert("Movie title must has at least 2 characters in it.");
    return;
  }

  createMovieTrHTML(movie);
  $("form").trigger("reset");
});

$("tbody").on("click", "#delete-btn", (e) => {
  $(e.target).closest("tr").remove();
});

class Movie {
  constructor(title, rating) {
    this.title = title;
    this.rating = rating;
  }
}

function createMovie() {
  const $title = $("#title").val().trim();
  const $rating = +$("#rating").val();
  const newMovie = new Movie($title, $rating);
  return newMovie;
}

function createMovieTrHTML(movie) {
  const $deleteButton = $("<button>Delete</button>");
  const $deleteTd = $("<td>").append($deleteButton);
  const $tr = $("<tr>");
  $deleteButton.attr("id", "delete-btn");
  $tr.append(`<td>${movie.title}</td>`);
  $tr.append(`<td>${movie.rating}</td>`);
  $tr.append($deleteTd);
  return $("tbody").append($tr);
}
