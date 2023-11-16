module.exports = function () {
	return this.Price.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
