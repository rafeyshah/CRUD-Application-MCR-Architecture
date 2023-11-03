var mongoose = require("mongoose");
const { groupsSchema } = require("./groups");

groupsSchema.statics = {
  create: async function (data) {
    var work = new this(data);
    await work.save();
  },

  get: async function (query) {
    await this.find(query);
  },

  update: async function (query, updateData) {
    await this.findOneAndUpdate(query, { $set: updateData }, { new: true });
  },

  delete: async function (query) {
    await this.findOneAndDelete(query);
  },
};

var groupModel = mongoose.model("groups", groupsSchema);
module.exports = groupModel;
