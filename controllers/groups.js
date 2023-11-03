var Groups = require("../models/groupsDOA");

exports.createGroup = async function (req, res, next) {
  var group = {
    name: req.body.name,
    workId: req.body.workId,
  };

  try {
    const newlyCreatedGroup = await Groups.create(group);
    res.json({
      msg: "Created Successfully",
    });
  } catch (ex) {
    res.json({
      error: ex,
    });
  }
};

exports.getGroups = async function (req, res, next) {
  try {
    const newGotWork = await Groups.find({});
    res.json({
      msg: newGotWork,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

// exports.getWork = function (req, res, next) {
//   try {
//     const getWorkByName = Work.get({ name: req.params.name });
//     res.json({
//       msg: getWorkByName,
//     });
//   } catch (err) {
//     res.json({
//       error: err,
//     });
//   }
// };

exports.updateGroup = async function (req, res, next) {
  var group = {
    name: req.body.name,
    workId: req.body.workId,
  };
  try {
    const updateGroup = await Groups.findByIdAndUpdate(req.params.id, group);
    res.json({
      msg: updateGroup,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.removeGroup = async function (req, res, next) {
  try {
    const removeGroup = await Groups.findByIdAndDelete(req.params.id);
    res.json({
      msg: "Group Removed",
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};
