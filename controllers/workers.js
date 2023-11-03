const Work = require("../models/workersDOA");
const { validate } = require("../models/workers");

exports.createWorker = async function (req, res) {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const worker = {
    works: req.body.works,
    groups: req.body.groups,
    type: req.body.type,
  };

  try {
    const newlyCreatedWorker = await Work.create(worker);
    res.json({
      msg: "Created Worker Successfully",
    });
  } catch (ex) {
    res.json({
      error: ex,
    });
  }
};

exports.getWorker = async function (req, res) {
  try {
    const getAllWorkers = await Work.find({})
      .populate("works")
      .populate("groups");
    res.json({
      msg: getAllWorkers,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.getSingleWorker = async function (req, res) {
  try {
    const getSingleWorker = await Work.findById(req.params.id);
    res.json({
      msg: getSingleWorker,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.updateWork = async function (req, res) {
  const worker = {
    workId: req.body.workId,
    groupId: req.body.groupId,
    type: req.body.type,
  };
  try {
    const updatedWorker = await Work.findByIdAndUpdate(req.params.id, worker);
    res.json({
      msg: updatedWorker,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.removeWork = async function (req, res) {
  try {
    const removeWorker = await Work.findByIdAndDelete(req.params.id);
    res.json({
      msg: "Worker Removed",
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};
