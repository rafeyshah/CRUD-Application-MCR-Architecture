var mongoose = require("mongoose");
const { groupsSchema } = require("./groups");

groupsSchema.statics = {
  create: function (data, cb) {
    var work = new this(data);
    work.save(cb);
  },

  get: function (query, cb) {
    this.find(query, cb);
  },

  update: function (query, updateData, cb) {
    this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
  },

  delete: function (query, cb) {
    this.findOneAndDelete(query, cb);
  },
};

var groupModel = mongoose.model("groups", groupsSchema);
module.exports = groupModel;
