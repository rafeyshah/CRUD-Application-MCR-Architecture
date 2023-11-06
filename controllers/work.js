const Work = require("../models/workDOA");

const { validate } = require("../models/work");
const MongoClient = require("mongodb").MongoClient;
const fs = require("fs");
const Papa = require("papaparse");

const dotenv = require("dotenv");
dotenv.config();
const url = process.env.DB;

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

exports.uploadCSV = async function (req, res) {
  try {
    const csvFile = req.file.buffer.toString();
    const csvArr = [];
    Papa.parse(csvFile, {
      header: true,
      step: function (result) {
        csvArr.push(result.data);
      },
      complete: function () {
        res.json(csvArr);
      },
    });
  } catch (ex) {
    res.json({
      error: ex,
    });
  }
};
