const Entity = require("../models/entityDOA");
const { validateEntity } = require("../models/entity");

exports.createEntity = async function (req, res) {
  const { error } = validateEntity(req.body);
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
      data: entity,
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
      msg: "Getting all entities",
      data: getAllEntities,
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
      msg: "Updating entity",
      data: entity,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};

exports.removeEntity = async function (req, res) {
  try {
    const removedEntity = await Entity.findByIdAndDelete(req.params.id);
    res.json({
      msg: `Group Removed ID: ${req.params.id}`,
    });
  } catch (err) {
    res.json({
      error: err,
    });
  }
};
