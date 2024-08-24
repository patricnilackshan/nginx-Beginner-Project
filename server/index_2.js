const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("I am an endpoint 2222");
});

app.listen(2222, () => {
	console.log("Listening on port 2222");
});
