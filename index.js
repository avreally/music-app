const dotenv = require("dotenv");

dotenv.config();

const express = require("express");
const { request, response } = require("express");
const app = express();

const baseURL = "https://api.genius.com/";
const token = process.env.CLIENT_ACCESS_TOKEN;
const headers = { Authorization: `Bearer ${token}` };

app.use(express.static("./site"));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
