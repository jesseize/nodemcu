'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var config = new Schema({
  device1: {
    type: String,
    required: 'on/off'
  },
  range1: {
    type: String,
    required: 'Range 1'
  },
  device2: {
    type: String,
    required: 'Device 2'
  },
  range2: {
    type: String,
    required: 'Range 2'
  },
  device3: {
    type: String,
    required: 'Device 3'
  },
  range3: {
    type: String,
    required: 'Range 3'
  }
});


module.exports = mongoose.model('configs', config);
