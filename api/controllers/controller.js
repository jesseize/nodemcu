'use strict';


var mongoose = require('mongoose'),
config = mongoose.model('configs');

/*
  Get config
*/
exports.list_configs = function(req, res) {
  config.find({}, function(err, ex) {
    console.log(ex);
    if (err)
      res.send(err);
    res.json(ex);
  });
};

/*
  Update config
*/
exports.update_config = function(req, res) {
  console.log(req.body);
  config.findOneAndUpdate({_id: req.params.configID}, req.body, {new: true}, function(err, ex) {
    if (err)
      res.send(err);
    res.json(ex);
  });
};


/*
  Add config
*/
exports.add_config = function(req, res) {
  var e = new config(req.body);
  e.save(function(err, ex) {
    if (err)
      res.send(err);
    res.json(ex);
  });
};

/*
  Get example by ID
*/
exports.get_config = function(req, res) {
  config.findById(req.params.configID, function(err, ex) {
    if (err)
      res.send(err);
    res.json(ex);
  });
};

/*
  Delete config
*/
exports.delete_config = function(req, res) {
  config.remove({
    _id: req.params.configID
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Config successfully deleted.' });
  });
};
