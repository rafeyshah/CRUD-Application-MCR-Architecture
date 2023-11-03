var mongoose = require("mongoose");
var { workSchema } = require("./work");

workSchema.statics = {
  create: async function (data) {
    var work = new this(data);
    await work.save();
  },

  get: async function (query, cb) {
    await this.find(query, cb);
  },

  getByName: async function (query, cb) {
    await this.find(query, cb);
  },

  update: async function (query, updateData, cb) {
    await this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
  },

  delete: async function (query, cb) {
    await this.findOneAndDelete(query, cb);
  },
};

var workModel = mongoose.model("works", workSchema);
module.exports = workModel;
