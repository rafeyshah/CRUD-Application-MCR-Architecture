var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var workersSchema = new Schema(
  {
    works: {
      type: Schema.Types.ObjectId,
      ref: "works"
    },
    groups: {
      type: Schema.Types.ObjectId,
      ref: "groups"
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
