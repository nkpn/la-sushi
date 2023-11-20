import '../../styles/main.scss';
import '../components/menu';
import { fetchAllProductsData, fetchProductData } from '../services/sanity-API';
import $ from 'jquery';
import 'slick-carousel';
import { renderProductList } from '../components/rendering';

const bestSellersContainer = document.querySelector('.best-sellers-list');

async function getAllRecommendProducts() {
	try {
		const data = await fetchAllProductsData();
		renderProductList(bestSellersContainer, data.result);
	} catch (error) {
		console.log(error);
	}
}

// TODO Add language logic

// function insertBestSellers(data) {
// 	const productsData = data;
// 	const productCardsWrapper = document.querySelector('.product-cards');
// 	const list = document.createElement('ul');
// 	list.classList.add('best-sellers-list');

// 	productsData.forEach((product) => {
// 		console.log(product);
// 		const productCard = document.createElement('li');
// 		productCard.classList.add('product-card');

// 		if (product.isTopSeller) {
// 			const label = document.createElement('p');
// 			label.classList.add('product-label');
// 			label.textContent = 'Best Seller';
// 			productCard.appendChild(label);
// 		}

// 		const image = document.createElement('img');
// 		image.classList.add('product-image');
// 		image.alt = product.nameEN;
// 		if (product.imageUrl) {
// 			image.src = product.imageUrl;
// 		} else {
// 			image.src = '../../images/placeholder.png';
// 		}

// 		const title = document.createElement('h4');
// 		title.classList.add('product-title');
// 		title.textContent = product.nameEN;

// 		const description = document.createElement('p');
// 		description.classList.add('product-description');
// 		description.textContent = product.descriptionEN;

// 		const weight = document.createElement('p');
// 		weight.classList.add('product-weight');
// 		weight.textContent = `${product.weight} g`;

// 		const wrapper = document.createElement('div');
// 		wrapper.classList.add('price-wrapper');

// 		const price = document.createElement('p');
// 		price.classList.add('product-price');
// 		price.textContent = product.price;

// 		const button = document.createElement('p');
// 		button.classList.add('primary-button');
// 		button.textContent = 'Order';

//         // Combine all elements to card

//         productCard.appendChild(image)
//         productCard.appendChild(title)
//         productCard.appendChild(description)
//         productCard.appendChild(weight);
//         wrapper.appendChild(price);
//         wrapper.appendChild(button);
//         productCard.appendChild(wrapper);
//         list.appendChild(productCard);
//     })
//     productCardsWrapper.appendChild(list);
// }

async function getProductInfo(id) {
	try {
		const data = await fetchProductData(id);
		console.log('data about the product: ', data);
	} catch (error) {
		console.log(error);
	}
}

getProductInfo('1d87c793-3b02-4332-bcc7-f990edb39fe4');

function HomePageInit() {
	getAllRecommendProducts();

	// slick slider for mobile only  (<768px)
	if ($(window).width() < 768) {
		$('.reviews-list').slick({
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 400,
		});
	}
}

HomePageInit();
