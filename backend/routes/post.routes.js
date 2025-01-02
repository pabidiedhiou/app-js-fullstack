const JobAnswersDataModel = require("../models/job.model");
const express = require("express");
const router = express.Router();
const {
  getInfos,
  postInfos,
  getFreelance,
  getJobs,
} = require("../controlers/post.controler");

router.get("/survey", getInfos);
router.post("/", postInfos);

//--------------------freelance-----------------------------
router.get("/Getfreelance", function (req, res, next) {
  const freelances = getFreelance();
  res.send({ freelances });
});
//---------------------jobs---------------------------------

router.get("/Getjobs", function (req, res) {
  const { a1, a2, a3, a4, a5, a6 } = req.query;
  const resultsData = getJobs(a1, a2, a3, a4, a5, a6);
  if (!resultsData) {
    res.status(400).send("Not found.");
  } else {
    res.send({ resultsData });
  }
  res.status(201).json({ resultsData });
});
module.exports = router;
