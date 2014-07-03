// Start sails and pass it command line arguments
var domain = require('domain'),
    serverDm = domain.create();
    // geekJs = {};

require('sails').lift(require('optimist').argv);

serverDm.on('error', function (error) {
    delete error.domain;
    console.error(error);
    // jsGen.serverlog.error(error);
});

serverDm.run(function () {
	// geekJs.config = {name:'geeksty'};

});