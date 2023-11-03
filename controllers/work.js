var Work = require("../models/workDOA");
const { validate } = require("../models/work");

exports.createWork = async function (req, res, next) {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  var work = {
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

exports.getWorks = async function (req, res, next) {
  try {
    const newGotWork = await Work.find({});
    res.json({
      msg: newGotWork,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.getWork = function (req, res, next) {
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

exports.updateWork = async function (req, res, next) {
  var work = {
    name: req.body.name,
    type: req.body.type,
    startDate: req.body.startDate,
    userId: req.body.userId,
  };
  console.log(req.params.id);
  try {
    const updateWork = await Work.findByIdAndUpdate(req.params.id, work);
    res.json({
      msg: updateWork,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.removeWork = async function (req, res, next) {
  try {
    const removeWork = await Work.findByIdAndDelete(req.params.id);
    res.json({
      msg: "Work Removed",
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};
