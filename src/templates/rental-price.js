module.exports = function (price1, price2) {
	if (price1 === 1 || price1 === price2) {
		return '';
	}

	return '€' + price1 + ' -';
};
