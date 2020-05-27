var express = require("express");
var router = express.Router();
const StatsController = require("../controllers/StatsController");

//Stats Card
router.get('/highlights', StatsController.fetchStatsHighlights)
router.post('/highlights', StatsController.StatsHighlights)

module.exports = router;
