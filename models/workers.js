var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workersSchema = new Schema(
  {
    workId: {
      type: String,
      unique: false,
      required: true,
    },
    groupId: {
      type: String,
      unique: false,
      required: true,
    },
    type: {
      type: String,
      enum: ["daily wages", "monthly wages"],
      default: "daily wages",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = workersSchema;
