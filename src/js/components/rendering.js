import productCardEN from '../../templates/productCard-EN.hbs';
import productDetailsEN from '../../templates/productDetails-EN.hbs';

function renderProductList(container, data) {
	try {
		container.innerHTML = productCardEN(data);
	} catch (error) {
		console.log(error);
	}
}

function renderProductDetails(container, data) {
	try {
		container.innerHTML = productDetailsEN(data);
	} catch (error) {
		console.log(error);
	}
}

export { renderProductList, renderProductDetails };
