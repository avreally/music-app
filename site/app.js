const form = document.getElementById("form");
const main = document.getElementById("main");
const searchButton = document.getElementById("searchButton");
const searchFieldInput = document.getElementById("searchField");
const resultDiv = document.createElement("div");

let userSearchRequest;

// Reading value from search input
const readSearchInput = (event) => {
  event.preventDefault();
  console.log(searchFieldInput.value);
  userSearchRequest = searchFieldInput.value;
  form.reset();
};

// Base url for request to the server
const baseUrl = "/api/song";

// Request to the server, passing user search request
const getSong = (userSearchRequest) => {
  const request = axios.get(`${baseUrl}?search=${userSearchRequest}`);
  return request.then((response) => {
    console.log(response.data);
    const result = response.data;
    return result;
  });
};

// Function that runs on click on search button, it runs function that reads value from search input,
// and then runs function that makes request to the server
const searchForSong = async (event) => {
  await readSearchInput(event);
  getSong(userSearchRequest).then((result) => {
    renderSearchResult(result);
  });
};

searchButton.addEventListener("click", searchForSong);

// Rendering search result
const renderSearchResult = (data) => {
  const searchResult = `<div>
      <img src="${data.songImgUrl}" alt="album-image" />
      <h3>${data.title}</h3>
      <h4>${data.artist}</h4>
      <div>
        <iframe
          src="https://genius.com/songs/${data.songId}/apple_music_player"
        ></iframe>
      </div>
    </div>`;
  resultDiv.innerHTML = searchResult;
};

// Appending result in the browser
main.append(resultDiv);
