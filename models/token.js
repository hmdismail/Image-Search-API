var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var ModelSchema = new Schema({
  token: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('token', ModelSchema);
