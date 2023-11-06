const Entity = require("../models/entityDOA");
const { validate } = require("../models/entity");

exports.createEntity = async function (req, res) {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const entity = {
    companyName: req.body.companyName,
    website: req.body.website,
    country: req.body.country,
    jobType: req.body.jobType,
    linkedIn: req.body.linkedIn,
    contact: req.body.contact,
    additionalNotes: req.body.additionalNotes,
  };

  try {
    const newlyCreatedEntity = await Entity.create(entity);
    res.json({
      msg: "Created New Entity Successfully",
    });
  } catch (ex) {
    res.json({
      error: ex,
    });
  }
};

exports.getEntities = async function (req, res) {
  try {
    const getAllEntities = await Entity.find({});
    res.json({
      msg: getAllEntities,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.updateEntity = async function (req, res) {
  const entity = {
    companyName: req.body.companyName,
    website: req.body.website,
    country: req.body.country,
    jobType: req.body.jobType,
    linkedIn: req.body.linkedIn,
    contact: req.body.contact,
    additionalNotes: req.body.additionalNotes,
  };
  try {
    const updatedEntity = await Entity.findByIdAndUpdate(req.params.id, entity);
    res.json({
      msg: updatedEntity,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.removeEntity = async function (req, res) {
  try {
    const removedEntity = await Groups.findByIdAndDelete(req.params.id);
    res.json({
      msg: "Group Removed",
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};
