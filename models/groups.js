const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");

const groupsSchema = new Schema(
  {
    name: {
      type: String,
      unique: false,
      required: true,
    },
    works: {
      type: Schema.Types.ObjectId,
      ref: "works",
    },
  },
  {
    timestamps: true,
  }
);

function validateGroup(genre) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    works: Joi.string().min(5).max(50).required()
  });

  return schema.validate(genre);
}
exports.validate = validateGroup;
exports.groupsSchema = groupsSchema;
