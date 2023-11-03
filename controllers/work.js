const Work = require("../models/workDOA");
const { validate } = require("../models/work");

exports.createWork = async function (req, res) {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const work = {
    name: req.body.name,
    type: req.body.type,
    startDate: req.body.startDate,
    userId: req.user.id,
  };

  try {
    const newlyCreatedWork = await Work.create(work);
    res.json({
      msg: "Created Successfully",
    });
  } catch (ex) {
    res.json({
      error: ex,
    });
  }
};

exports.getWorks = async function (req, res) {
  try {
    const getAllWorks = await Work.find({});
    res.json({
      msg: getAllWorks,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.getWork = function (req, res) {
  try {
    const getWorkByName = Work.get({ name: req.params.name });
    res.json({
      msg: getWorkByName,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.updateWork = async function (req, res) {
  const work = {
    name: req.body.name,
    type: req.body.type,
    startDate: req.body.startDate,
    userId: req.body.userId,
  };
  console.log(req.params.id);
  try {
    const updatedWork = await Work.findByIdAndUpdate(req.params.id, work);
    res.json({
      msg: updatedWork,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.removeWork = async function (req, res) {
  try {
    const removedWork = await Work.findByIdAndDelete(req.params.id);
    res.json({
      msg: "Work Removed",
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};
