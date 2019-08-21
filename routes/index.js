// Import
const path = require("path");
const router = require("express").Router();
const apiRoutes = ("./api");

// Initialize API Routes
router.use("/api", apiRoutes);

// Initialize landing page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;