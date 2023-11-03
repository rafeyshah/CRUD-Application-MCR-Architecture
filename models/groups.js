var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var groupSchema = new Schema(
  {
    name: {
      type: String,
      unique: false,
      required: true,
    },
    workId: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);

module.exports = groupSchema;
