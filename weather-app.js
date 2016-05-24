// ********************* INSTRUCTIONS ********************* 

// When the page loads, we need to get some data!

// Make an AJAX call to the wundergrounds API

//we call that function, and then pass the observation variable (argument) through it

// When the data returns, we want to diplay specific things

// look for: weather, city name, date and time 
// console.log it to find these features!


// ********************* ACTUAL CODE *********************

// global variable
var weatherWidget = {};

weatherWidget.apiUrl = 'http://api.wunderground.com/api/dc2a2af30433fc78/conditions/q/CA/San_Francisco.json';
weatherWidget.init = function() {
	// the code in here is used to initialize our application
	
	// we're calling the functions we established below!
	weatherWidget.getData();
};

weatherWidget.getData = function() {
	$.ajax({
		url: weatherWidget.apiUrl,
		method: 'GET',
		dataType: 'json'
	})
	.then(function(weatherData) {
		// cocnsole.log(weatherData);
		// console.log(weatherData.current_observation);
		var observation = weatherData.current_observation;
		weatherWidget.displayWeather(observation);
	});
};

weatherWidget.displayWeather = function(weather) {
	console.log(weather);
	var city = weather.display_location.city;
		$('.city_name').text(city);

	var temp_c = weather.temp_c;
		$('.temp_c').text(temp_c);
	
	var time = weather.local_time_rfc822;
		$('.date_time').text(time);
	
	var condition = weather.weather;
		$('.weather_string').text(condition);
	
	var image = weather.icon_url;
	// find the src attribute, add this value!
		$('.weather_image').attr('src', image);
};

$(document).ready(function(){
  weatherWidget.init();
});