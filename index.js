import axios from "axios";
import "dotenv/config";
import express from "express";

// Creating and running a server
const app = express();
app.use(express.static("./site"));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Defining variables for Genius API request
const baseURL = "https://api.genius.com/";
const searchPath = "search?q=";
const token = process.env.CLIENT_ACCESS_TOKEN;
const headers = { Authorization: `Bearer ${token}` };

// Defining function for Genius API request
const getUserSearchResult = async (userQuery) => {
  try {
    const response = await axios.get(`${baseURL}${searchPath}${userQuery}`, {
      headers,
    });
    console.log(response.data.response.hits[0]);
    return response.data.response.hits[0].result.full_title;
  } catch (err) {
    console.error(err);
  }
};

// Making Genius API request and sending result back to browser
app.get("/api/song", async (request, response) => {
  const result = await getUserSearchResult(request.query.search);
  console.log("searching for", request.query.search);
  response.send(result);
});
