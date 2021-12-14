const form = document.getElementById("form");

const searchFieldInput = document.getElementById("searchField");
console.log(searchFieldInput.value);

const searchButton = document.getElementById("searchButton");

let searchRequest;

const readSearchInput = (event) => {
  event.preventDefault();
  console.log(searchFieldInput.value);
  searchRequest = searchFieldInput.value;
  form.reset();
};

searchButton.addEventListener("click", readSearchInput);
