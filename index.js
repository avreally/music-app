import axios from "axios";
import "dotenv/config";

import express from "express";
import { request, response } from "express";

const app = express();

const baseURL = "https://api.genius.com/";
const searchPath = "search?q=";

const token = process.env.CLIENT_ACCESS_TOKEN;
const headers = { Authorization: `Bearer ${token}` };

app.use(express.static("./site"));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const testSearchRequest = "fire";

const getUserSearchResult = async () => {
  try {
    const response = await axios.get(
      `${baseURL}${searchPath}${testSearchRequest}`,
      { headers }
    );
    console.log(response.data.response.hits[0]);
  } catch (err) {
    console.error(err);
  }
};

getUserSearchResult();

