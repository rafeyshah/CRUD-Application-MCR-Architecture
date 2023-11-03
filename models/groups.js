var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var groupSchema = new Schema(
  {
    name: {
      type: String,
      unique: false,
      required: true,
    },
    works: {
      type: Schema.Types.ObjectId,
      ref: "works"
    },
  },
  {
    timestamps: true,
  }
);

module.exports = groupSchema;
