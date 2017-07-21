'use strict';
var BigNumber = require('bignumber.js');

var etherUnits = function() {}
etherUnits.unitMap = {
	'nonuko':     '0',
	'wei':        '1',
	'kwei':       '1000',
	'ada':        '1000',
	'femtonuko':  '1000',
	'mwei':       '1000000',
	'babbage':    '1000000',
	'piconuko':   '1000000',
	'gwei':       '1000000000',
	'shannon':    '1000000000',
	'nanonuko':   '1000000000',
	'nano':       '1000000000',
	'szabo':      '1000000000000',
	'micronuko':  '1000000000000',
	'micro':      '1000000000000',
	'finney':     '1000000000000000',
	'millinuko':  '1000000000000000',
	'milli':      '1000000000000000',
	'nuko':       '1000000000000000000',
	'knuko':      '1000000000000000000000',
	'grand':      '1000000000000000000000',
	'einstein':   '1000000000000000000000',
	'mnuko':      '1000000000000000000000000',
	'gnuko':      '1000000000000000000000000000',
	'tnuko':      '1000000000000000000000000000000'
};
etherUnits.getValueOfUnit = function(unit) {
	unit = unit ? unit.toLowerCase() : 'nuko';
	var unitValue = this.unitMap[unit];
	if (unitValue === undefined) {
		throw new Error(globalFuncs.errorMsgs[4] + JSON.stringify(this.unitMap, null, 2));
	}
	return new BigNumber(unitValue, 10);
}
etherUnits.fiatToWei = function(number, pricePerEther) {
	var returnValue = new BigNumber(String(number)).div(pricePerEther).times(this.getValueOfUnit('nuko')).round(0);
	return returnValue.toString(10);
}

etherUnits.toFiat = function(number, unit, multi) {
	var returnValue = new BigNumber(this.toEther(number, unit)).times(multi).round(5);
	return returnValue.toString(10);
}

etherUnits.toEther = function(number, unit) {
	var returnValue = new BigNumber(this.toWei(number, unit)).div(this.getValueOfUnit('nuko'));
	return returnValue.toString(10);
}

etherUnits.toWei = function(number, unit) {
	var returnValue = new BigNumber(String(number)).times(this.getValueOfUnit(unit));
	return returnValue.toString(10);
}

module.exports = etherUnits;
