const form = document.querySelector(".searchForm");
const container = document.querySelector(".container");
const searchButton = document.querySelector(".searchButton");
const searchFieldInput = document.querySelector(".searchField");
const resultDiv = document.querySelector(".resultContainer");

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
  const searchResult = `<div class="songDataContainer"><div class="albumImgContainer">
      <img class="albumImg" src="${data.songImgUrl}" alt="album-image" />
    </div>
    <div class="songTitleAndNameContainer">
      <h2 class="songTitle">${data.title}</h2>
      <h3 class="artistName">${data.artist}</h3>
    </div>
    </div>
    <iframe
      class="iFrame"
      src="https://genius.com/songs/${data.songId}/apple_music_player"
    ></iframe>`;
  resultDiv.innerHTML = searchResult;
};

// Appending result in the browser
container.append(resultDiv);
