import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
});

function initMap() {
	const uluru = {lat: -25.363, lng: 131.044};
	const map = new google.maps.Map(document.getElementById('google-map'), {
		zoom: 4,
		center: uluru
	});
	const marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}

initMap();
