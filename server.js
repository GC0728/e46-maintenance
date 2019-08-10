// Setup Express Server
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Import Database and Routing
const mongoose = require("mongoose");
const routes = require("./routes");

// Initialize Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

// Insert Routes into Middleware
app.use(routes);

// Connect to the Database
mongoose.connect(process.env.MONGOD_URI || "mongod://localhost/e46-maintenance");

// Start the API Server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});