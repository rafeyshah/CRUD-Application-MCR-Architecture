const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");

const workSchema = new Schema(
  {
    name: {
      type: String,
      unique: false,
      required: true,
    },
    type: {
      type: String,
      unique: false,
      required: true,
    },
    startDate: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

function validateWork(genre) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    type: Joi.string().min(5).max(50).required(),
    startDate: Joi.string().min(5).max(50).required(),
    userId: Joi.string().min(24).max(24),
  });

  return schema.validate(genre);
}
exports.validate = validateWork;
exports.workSchema = workSchema;
