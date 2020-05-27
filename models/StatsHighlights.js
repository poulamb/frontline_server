const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StatsHighlights = new Schema(
    {
        title: { type: String, required: true },
        value: { type: Number, required: true },
        units: { type: String, required: false },
        desc: { type: String, required: false },
        icon: { type: String, required: false },
        tags: { type: [String], required: false },
    },
    { timestamps: true }
);

module.exports = mongoose.model("StatsHighlights", StatsHighlights);
