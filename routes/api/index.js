const router = require("express").Router();
const scrapersRoute = require("./scrapers");

// Scraper routes
router.use("/scrapers", scrapersRoute);

module.exports = router;