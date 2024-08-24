const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("I am an endpoint 1111");
});

app.listen(1111, () => {
	console.log("Listening on port 1111");
});
