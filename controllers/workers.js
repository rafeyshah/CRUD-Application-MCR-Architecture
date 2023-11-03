var Work = require("../models/workersDOA");

exports.createWorker = async function (req, res, next) {
  var worker = {
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

exports.getWorker = async function (req, res, next) {
  try {
    const newGotWorker = await Work.find({}).populate("works").populate("groups");
    res.json({
      msg: newGotWorker,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.getSingleWorker = async function (req, res, next) {
  try {
    const singleWorker = await Work.findById(req.params.id);
    res.json({
      msg: singleWorker,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.updateWork = async function (req, res, next) {
  var worker = {
    workId: req.body.workId,
    groupId: req.body.groupId,
    type: req.body.type,
  };
  try {
    const updateWork = await Work.findByIdAndUpdate(req.params.id, worker);
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
      msg: "Worker Removed",
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};
