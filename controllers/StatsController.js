const StatsHighlights = require("../models/StatsHighlights");
const { body } = require("express-validator");
// const auth = require("../middlewares/jwt");
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

// create a new stats highlight
exports.StatsHighlights = [
  // auth,
  body("title", "Title must not be empty").isLength({ min: 1 }),
  body("value", "Value must not be empty.").isLength({ min: 1 }),
  async (req, res) => {
    try {
      console.log(req.bo)
      await new StatsHighlights(req.body).save()
      res.status(200).send({
        msg: 'Record saved'
      })
    }
    catch (err) {
      res.status(500).send(err.message)
    }
  },
];

// Fetch highlights
exports.fetchStatsHighlights = [
  async (req, res) => {
    let highlights = await StatsHighlights.find(req.body.query || {}).exec();
    res.status(200).send(highlights);
  },
];
