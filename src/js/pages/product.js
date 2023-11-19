import '../../styles/main.scss';
import '../components/menu';
import $ from 'jquery';
import 'slick-carousel';

// slick slider for mobile only  (<768px)
if ($(window).width() < 768) {
	$('.recommendedProducts-list').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 400,
	});
}
