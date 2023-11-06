const fs = require("fs");
const Papa = require("papaparse");

exports.csvFileParser = async function (req, res) {
  try {
    const path = "public/files/uploads/";
    const csvFile = fs.readFileSync(`${path}${req.params.id}.csv`, "utf8");
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
