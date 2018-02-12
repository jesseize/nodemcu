'use strict';
module.exports = function(app) {
  var rest = require('../controllers/controller');

  // Routes
  app.route('/configs')
    .get(rest.list_configs)
    .post(rest.add_config);

  app.route('/config/:configID')
    .get(rest.get_config)
    .patch(rest.update_config);
};
