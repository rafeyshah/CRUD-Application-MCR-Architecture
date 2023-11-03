var mongoose = require("mongoose");
var { workerSchema } = require("./workers");

workerSchema.statics = {
  create: async function (data) {
    var work = new this(data);
    await work.save();
  },

  get: async function (query, cb) {
    await this.find(query, cb);
  },

  getByNameId: async function (query, cb) {
    await this.find(query, cb);
  },

  update: async function (query, updateData, cb) {
    await this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
  },

  delete: async function (query, cb) {
    await this.findOneAndDelete(query, cb);
  },
};

var workerModel = mongoose.model("workers", workerSchema);
module.exports = workerModel;
