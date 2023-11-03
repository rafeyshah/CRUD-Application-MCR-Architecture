const mongoose = require("mongoose");
const { workerSchema } = require("./workers");

workerSchema.statics = {
  create: async function (data) {
    const work = new this(data);
    await work.save();
  },

  get: async function (query) {
    await this.find(query);
  },

  getByNameId: async function (query) {
    await this.find(query);
  },

  update: async function (query, updateData) {
    await this.findOneAndUpdate(query, { $set: updateData }, { new: true });
  },

  delete: async function (query) {
    await this.findOneAndDelete(query);
  },
};

const workerModel = mongoose.model("workers", workerSchema);
module.exports = workerModel;
