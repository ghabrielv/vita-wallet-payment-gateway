var newWindow;
exports.paymentGateway = function(email, amount = undefined, env = undefined, token = undefined, port = 3000) {
	var url = '';
	switch (env) {
		case undefined:
		case 'prod':
			env = 'prod';
			break;
		case 'qa':
		case 'dev':
			env = 'qa';
			break;
		case 'local':
			env = 'local';
			break;
		default:
			env = 'prod';
	}
	var params = email + (amount ? '?amount=' + amount : '') + (token ? '&token=' + token : '');
	var url = (env == 'prod' || env == 'qa') ? 'https://' + (env == 'prod' ? 'app.vitawallet.io' : 'qa.vitawallet.io') + '/payment-gateway/' + params : 'http://localhost:' + port + '/payment-gateway/' + params;
	newWindow = window.open(url,'Pasarela de pago','width=1024,height=768,toolbar=0,menubar=0');
	if (window.focus) {
		newWindow.focus();
	}
}
