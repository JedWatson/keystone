var keystone = require('../../../');
var async = require('async');

module.exports = function (req, res) {
  async.parallel([
    function(callback) {
      req.user.managementLists().then((res) => {
        callback(null, res);
      });
    }
  ], function(err, results) {
    return res.json({
			abilities: results[0]
		});
  });
};

