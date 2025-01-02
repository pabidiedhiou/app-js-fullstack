const mongoose = require("mongoose");
const jobsDefinitionDataModel = mongoose.Schema({
  seo: {
    type: String,
    require: true,
  },
  frontend: {
    type: String,
    require: true,
  },
  design: {
    type: String,
    require: true,
  },
  backend: {
    type: String,
    require: true,
  },
  mobile: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("jobsdefinitiondata", jobsDefinitionDataModel);
