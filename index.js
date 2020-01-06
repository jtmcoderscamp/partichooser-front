require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI ||
    `mongodb+srv://mentorUser:coderscamp345@mentor-f8ixe.azure.mongodb.net/partichooser_v01?retryWrites=true&w=majority
`
);

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});

const JWT = process.env.JWT_SECRET;
