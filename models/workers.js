var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const Joi = require("joi");

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

function validateWorker(genre) {
  const schema = Joi.object({
    works: Joi.string().min(24).max(24).required(),
    groups: Joi.string().min(24).max(24).required(),
    type: Joi.string().min(5).max(50).required(),
  });

  return schema.validate(genre);
}
exports.validate = validateWorker;
exports.workerSchema = workersSchema;
