import productCardEN from '../../templates/productCard-EN.hbs';

function renderProductList(container, data) {
	try {
		container.innerHTML = productCardEN(data);
	} catch (error) {
		console.log(error);
	}
}

export { renderProductList };
