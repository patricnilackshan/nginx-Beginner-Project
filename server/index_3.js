const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("I am an endpoint 3333");
});

app.listen(3333, () => {
	console.log("Listening on port 3333");
});
