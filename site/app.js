const form = document.getElementById("form");

const searchFieldInput = document.getElementById("searchField");
console.log(searchFieldInput.value);

const searchButton = document.getElementById("searchButton");

let userSearchRequest;

const readSearchInput = (event) => {
  event.preventDefault();
  console.log(searchFieldInput.value);
  userSearchRequest = searchFieldInput.value;
  form.reset();
};

searchButton.addEventListener("click", readSearchInput);
