# Bitcoin Price Plasmoid

## About
Plasma applet showing the current price of Bitcoin from various markets to choose from. The plasmoid can also convert the price to a desired currency.

Written by Maciej Gierej - http://makg.eu

## Installation
```
plasmapkg2 -i package
```

Use additional `-g` flag to install plasmoid globally, for all users.

## Supported sources
- CoinMarketCap
- Bitmarket.pl
- Bitmaszyna.pl
- BitBay
- Blockchain.info
- Bitfinex
- Bitstamp
- Kraken
- GDAX
- Cex.io

## Supported currencies
- USD ($) - US Dollar
- EUR (€) - Euro
- CZK (Kč) - Czech Coruna
- GBP (£) - British Pound Sterling
- ILS (₪) - Israeli New Sheqel
- INR (₹) - Indian Rupee
- JPY (¥) - Japanese Yen
- KRW (₩) - South Korean Won
- PHP (₱) - Philippine Peso
- PLN (zł) - Polish Zloty
- THB (฿) - Thai Baht

## Screenshots
![Bitcoin Price Plasmoid](https://raw.githubusercontent.com/MakG10/plasma-applet-bitcoin-price/master/bitcoin-price-plasmoid.png)

![Bitcoin Price Plasmoid (Panel)](https://raw.githubusercontent.com/MakG10/plasma-applet-bitcoin-price/master/bitcoin-price-panel.png)

![Bitcoin Price Plasmoid (Configuration)](https://raw.githubusercontent.com/MakG10/plasma-applet-bitcoin-price/master/bitcoin-price-config.png)

## Contributors
- Maciej Gierej
- NasCorp

## Changelog

### 1.2.2
- Removed outdated APIs
- Change currency API to api.exchangeratesapi.io with public access (as of now)
- Update QtControls imports to 2.5

### 1.2.1
- Changed currency converter API from fixer.io to currencyconverterapi.com
- Fixed XHR request and callback (could cause unnecessary multiple API calls)

### 1.2
- Added new exchange sources: Bitfinex, Bitstamp, Kraken, GDAX
- Added "Show decimals" option to show/hide decimals in the price
- Added "Show background" option to show/hide plasmoid background on the desktop

### 1.1
- Fixed displaying on panels (issue #1)
- Added "Show text" option

### 1.0
Initial release
