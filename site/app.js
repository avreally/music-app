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

const resultDiv = document.createElement("div");

const baseUrl = "/api/song";

const getSong = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => {
    console.log(response.data);
    const result = response.data;
    return result;
  });
};

getSong().then((result) => {
  resultDiv.innerHTML = result;
});

const main = document.getElementById("main");
main.append(resultDiv);
