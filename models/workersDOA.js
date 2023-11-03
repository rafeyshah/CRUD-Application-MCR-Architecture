var mongoose = require("mongoose");
var { workerSchema } = require("./workers");

workerSchema.statics = {
  create: function (data, cb) {
    var work = new this(data);
    work.save(cb);
  },

  get: function (query, cb) {
    this.find(query, cb);
  },

  getByNameId: function (query, cb) {
    this.find(query, cb);
  },

  update: function (query, updateData, cb) {
    this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
  },

  delete: function (query, cb) {
    this.findOneAndDelete(query, cb);
  },
};

var workerModel = mongoose.model("workers", workerSchema);
module.exports = workerModel;
