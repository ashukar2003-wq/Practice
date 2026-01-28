// import express from "express";

// const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is running 🚀");
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

import express from "express";
import dotenv from "dotenv";

dotenv.config(); //Reads the .env file and loads its values into process.env.

const app = express();  //Creates an Express application instance.


//req → request object (data coming from client)
//res → response object (what you send back)
app.get("/", (req, res) => {
  res.json({
    message: "Server is successfully running on Render 🚀",
    app: process.env.APP_NAME, //Reads APP_NAME from .env file.
    env: process.env.NODE_ENV
  });
  //Sends a JSON response to the client.
});

const PORT = process.env.PORT || 3000;

// Starts the server and listens on the selected port.
app.listen(PORT, () => {
  console.log (`Server is running on port ${PORT}`);
});