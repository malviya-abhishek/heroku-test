require("dotenv").config()
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send( `Hello ${ process.env.name }` )
});

app.listen(PORT, () => {
	console.log("Server started at port ", PORT);
});
