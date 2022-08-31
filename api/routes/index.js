const express = require("express");
const cors = require("cors");
const userRoutes = require("./userRoutes");

module.exports = (app) => {
	app.use(
		express.json(),
		cors(),
		userRoutes
	);
}