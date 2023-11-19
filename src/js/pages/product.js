import '../../styles/main.scss';
import '../components/menu';
import $ from 'jquery';
import 'slick-carousel';
import { fetchAllProductsData } from '../services/sanity-API';
import productCardEN from '/src/templates/productCard-EN.hbs';

const productDetailsEl = document.querySelector('.productDetails-container');
const recommendedProductsEl = document.querySelector(
	'.recommendedProducts-list'
);

async function getAllRecommendedProducts() {
	try {
		const data = await fetchAllProductsData();
		renderRecommendedProducts(data.result);
	} catch (error) {
		console.log(error);
	}
}

function renderRecommendedProducts(data) {
	try {
		recommendedProductsEl.innerHTML = productCardEN(data);

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
	getAllRecommendedProducts();

	// // slick slider for mobile only  (<768px)
	// if ($(window).width() < 768) {
	// 	$('.recommendedProducts-list').slick({
	// 		infinite: false,
	// 		slidesToShow: 1,
	// 		slidesToScroll: 1,
	// 		speed: 400,
	// 	});
	// }
}
ProductPageInit();
