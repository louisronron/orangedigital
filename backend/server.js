/**
 * Title: Orange Digital React Challenge server
 * Description: Entry point for the Orange Digital React challenge server API.
 * Author: Be Pacific Digital Agency
 * Repo: https://github.com/louisronron/orangedigital
 * Date: 07-03-2023
 */

// set environment mode (prod/dec)
process.env.NODE_ENV = "development";

const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");

// Set up cors
const corsOptions = {
	origin: "http://localhost:3000",
	optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

// GET /
// Just a test endpoint :)
app.get("/api/test", (req, res) => {
	res
		.status(200)
		.json({ name: "The Orange Digital React Challenge Server API" });
});

// GET /api/gallery
// Returns all page data for the gallery page.
app.get("/api/gallery", (req, res) => {
	const data = fs.readFileSync("./data/gallery.json");
	const jsonData = JSON.parse(data);
	res.send(jsonData);
});

// GET /api/detail
// Returns all page data for the detail page.
app.get("/api/detail", (req, res) => {
	const data = fs.readFileSync("./data/detail.json");
	const jsonData = JSON.parse(data);
	res.send(jsonData);
});

// Start the server
app.listen(4000, () => {
	console.log("Server started on port 4000");
});
