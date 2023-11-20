import '../../styles/main.scss';
import '../components/menu';
import $ from 'jquery';
import 'slick-carousel';
import { fetchAllProductsData } from '../services/sanity-API';
import { renderProductList } from '../components/rendering';

const productDetailsEl = document.querySelector('.productDetails-container');
export const recommendedProductsContainer = document.querySelector(
	'.recommendedProducts-list'
);

async function getRecommendedProducts() {
	try {
		const data = await fetchAllProductsData();
		renderProductList(recommendedProductsContainer, data.result);

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
	getRecommendedProducts();
}
ProductPageInit();
