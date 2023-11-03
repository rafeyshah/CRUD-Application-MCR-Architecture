var mongoose = require("mongoose");
var { userSchema } = require("./user");

userSchema.statics = {
  create: async function (data) {
    var work = new this(data);
    await work.save();
  },

  get: async function (query) {
    await this.find(query);
  },

  getByName: async function (query) {
    await this.find(query);
  },

  //   update: function (query, updateData, cb) {
  //     this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
  //   },

  //   delete: function (query, cb) {
  //     this.findOneAndDelete(query, cb);
  //   },
};

var workModel = mongoose.model("users", userSchema);
module.exports = workModel;
