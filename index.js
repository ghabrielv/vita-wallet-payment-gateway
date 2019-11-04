var newWindow;
exports.paymentGateway = function(email, amount = undefined, env = undefined, port = 3000) {
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
	var params = email + (amount ? '?amount=' + amount : '');
	var url = (env == 'prod' || env == 'qa') ? 'https://' + (env == 'prod' ? 'app.vitawallet.io' : 'qa-ui-dot-vita-wallet-api-qa-2.appspot.com') + '/payment-gateway/' + params : 'http://localhost:' + port + '/payment-gateway/' + params;
	newWindow = window.open(url,'Pasarela de pago','width=auto,height=auto,toolbar=0,menubar=0');  
	if (window.focus) {
		newWindow.focus();
	}
}
