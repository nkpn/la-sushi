import '../../styles/main.scss';
import '../components/menu';
import $ from 'jquery';
import 'slick-carousel';
import {
	fetchAllProductsData,
	fetchProductByURL,
} from '../services/sanity-API';
import {
	renderProductDetails,
	renderProductList,
} from '../components/rendering';

const productDetailsContainer = document.querySelector(
	'.productDetails-container'
);
export const recommendedProductsContainer = document.querySelector(
	'.recommendedProducts-list'
);

function getProductIdFromUrl() {
	const url = window.location.href;
	console.log(url);
	const productId = url.replace('http://localhost:8000/', '').split('/')[1];

	return productId;
}

async function getProductInfoByUrl(url) {
	try {
		const data = await fetchProductByURL(url);
		console.log('data about the product by URL: ', data);
		renderProductDetails(productDetailsContainer, data);
	} catch (error) {
		console.log(error);
	}
}

async function getRecommendedProducts() {
	try {
		const data = await fetchAllProductsData();
		renderProductList(recommendedProductsContainer, data);

		// slick slider for mobile only  (<768px)
		if ($(window).width() < 768) {
			$('.recommendedProducts-list').slick({
				infinite: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 400,
			});
		}
	} catch (error) {
		console.log(error);
	}
}

function ProductPageInit() {
	const productId = getProductIdFromUrl();
	getProductInfoByUrl(productId);
	getRecommendedProducts();
}
ProductPageInit();
