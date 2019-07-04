const { port, host  } =  require('./config');
const emailSender = require('./emailSender');
const glh = {
  port,
  host
};

// With an additional callback function the "gitlabhook.conf" will be ignored.
const server = require('gitlabhook')(glh, function(data) {
	emailSender(data).catch(error => {
		console.log('error', error);
	})
});

module.exports = server;