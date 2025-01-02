const QuestionModel = require("../models/post.model");
const Freelances = require("../models/freelances");
module.exports.getInfos = async (req, res) => {
  const posts = await QuestionModel.find();
  res.status(201).json({ posts });
};
module.exports.postInfos = async (req, res) => {
  if (!req.body.questions) {
    res.status(400).json({ message: "Veuillez ajouter un message" });
  }
  const post = await QuestionModel.create({
    questions: req.body.questions,
  });
  res.status(200).json(post);
};

//----------------------------------freelance---------------------
module.exports.getFreelance = () => {
  return Freelances.map(({ id, name, job, picture }) => ({
    id,
    name,
    job,
    picture,
  }));
};
//----------------------------------jobs---------------------
const { jobAnswersData, jobsDefinitionData } = require("../models/results");

module.exports.getJobs = (a1, a2, a3, a4, a5, a6) => {
  const answers = { a1, a2, a3, a4, a5, a6 };
  const answerNumbers = Object.keys(answers);

  const jobsList = Object.keys(jobAnswersData);

  const requiredJobsList = answerNumbers.reduce((prevJobs, answerNumber) => {
    if (!answers[answerNumber] || answers[answerNumber] === "false") {
      return prevJobs;
    }

    const jobs = jobsList.reduce((prevJobAnswers, jobTitle) => {
      if (jobAnswersData[jobTitle].includes(answerNumber)) {
        return [...prevJobAnswers, jobTitle];
      }
      return prevJobAnswers;
    }, []);

    return [...prevJobs, ...jobs];
  }, []);

  const uniqueJobs = [...new Set(requiredJobsList)];
  return uniqueJobs.map((job) => ({
    title: job,
    description: jobsDefinitionData[job],
  }));
};
