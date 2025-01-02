const mongoose = require("mongoose");
const JobAnswersDataModel = mongoose.Schema({
  seo: {
    type: [],
    require: true,
  },
  frontend: {
    type: [],
    require: true,
  },
  design: {
    type: [],
    require: true,
  },
  backend: {
    type: [],
    require: true,
  },
  mobile: {
    type: [],
    require: true,
  },
});
module.exports = mongoose.model("jobsdata", JobAnswersDataModel);
