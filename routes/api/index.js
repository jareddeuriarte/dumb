const router = require("express").Router();
const scrapers = require("./scrapers");

// Scraper routes
router.use("/scrapers", scrapers);

module.exports = router;