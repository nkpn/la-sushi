export default function onProductCardClick(e) {
	const product = e.target;
	if (!product.classList.contains('product-card')) {
		return;
	}

	try {
		const productUrl = product.getAttribute('data-productUrl');
		goToProductPage(productUrl);
	} catch (error) {
		console.log(error);
	}
}

function goToProductPage(productName) {
	const id = JSON.stringify(productName).replaceAll('"', '');
	const url = `product.html?/${id}`;
	// url = 'lasushi/{category}/{productName}';
	window.location.href = url;
}
