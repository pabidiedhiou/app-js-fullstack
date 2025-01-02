//const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");
const QuestionModel = mongoose.Schema({
  questions: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("questions", QuestionModel);
