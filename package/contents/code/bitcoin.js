var sources = [
	{
		name: 'Blockchain.info',
		url: 'https://blockchain.info/ticker',
		homepage: 'https://blockchain.info/',
		currency: 'USD',
		getRate: function(data) {
			return data.USD.last;
		}
	},
	{
		name: 'BitBay',
		url: 'https://bitbay.net/API/Public/BTCPLN/ticker.json',
		homepage: 'https://bitbay.net',
		currency: 'PLN',
		getRate: function(data) {
			return data.ask;
		}
	},
	{
		name: 'Bitfinex',
		url: 'https://api.bitfinex.com/v1/pubticker/btcusd',
		homepage: 'https://www.bitfinex.com/',
		currency: 'USD',
		getRate: function(data) {
			return data.ask;
		}
	},
	{
		name: 'Bitmaszyna.pl',
		url: 'https://bitmaszyna.pl/api/BTCPLN/ticker.json',
		homepage: 'https://bitmaszyna.pl/',
		currency: 'PLN',
		getRate: function(data) {
			return data.ask;
		}
	},
	{
		name: 'Bitstamp',
		url: 'https://www.bitstamp.net/api/ticker',
		homepage: 'https://www.bitstamp.net/',
		currency: 'USD',
		getRate: function(data) {
			return data.ask;
		}
	},
	{
		name: 'Kraken',
		url: 'https://api.kraken.com/0/public/Ticker?pair=XXBTZUSD',
		homepage: 'https://www.kraken.com',
		currency: 'USD',
		getRate: function(data) {
			return data.result.XXBTZUSD.a[0];
		}
	},
	{
		name: 'CEX.IO',
		url: 'https://cex.io/api/last_price/BTC/USD',
		homepage: 'https://cex.io',
		currency: 'USD',
		getRate: function(data) {
			return data.lprice;
		}
	},
];

var currencyApiUrl = 'https://api.exchangeratesapi.io';

var currencySymbols = {
	'USD': '$',  // US Dollar
	'EUR': '€',  // Euro
	'CZK': 'Kč', // Czech Coruna
	'GBP': '£',  // British Pound Sterling
	'ILS': '₪',  // Israeli New Sheqel
	'INR': '₹',  // Indian Rupee
	'JPY': '¥',  // Japanese Yen
	'KRW': '₩',  // South Korean Won
	'PHP': '₱',  // Philippine Peso
	'PLN': 'zł', // Polish Zloty
	'THB': '฿',  // Thai Baht
};

function getRate(source, currency, callback) {
	source = typeof source === 'undefined' ? getSourceByName('Bitmarket.pl') : getSourceByName(source);
	
	if(source === null) return false;
	
	request(source.url, function(data) {
		if(data.length === 0) return false;

		data = JSON.parse(data);
		var rate = source.getRate(data);
		
		if(source.currency != currency) {
			convert(rate, source.currency, currency, callback);
			return;
		}
		
		callback(rate);
	});
	
	return true;
}

function getSourceByName(name) {
	for(var i = 0; i < sources.length; i++) {
		if(sources[i].name == name) {
			return sources[i];
		}
	}
	
	return null;
}

function getAllSources() {
	var sourceNames = [];
	
	for(var i = 0; i < sources.length; i++) {
		sourceNames.push(sources[i].name);
	}
	
	return sourceNames;
}

function getAllCurrencies() {
	var currencies = [];
	
	Object.keys(currencySymbols).forEach(function eachKey(key) {
		currencies.push(key);
	});
	
	return currencies;
}

function convert(value, from, to, callback) {
	request(currencyApiUrl + '/latest?base=' + from, function(data) {
		data = JSON.parse(data);
		var rate = data['rates'][to];
		
		callback(value * rate);
	});
}

function request(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4) {
			callback(xhr.responseText);
		}
	};
	xhr.open('GET', url, true);
	xhr.send('');
}
