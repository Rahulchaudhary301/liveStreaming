

const mongoose = require('mongoose');





const OnlineLive = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },

});

module.exports = mongoose.model('Online', OnlineLive);
