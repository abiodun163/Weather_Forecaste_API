const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e143990625mshc156e533208b7b1p135e6djsn97937a5a29ed',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};

const BASE_URL = `https://yahoo-weather5.p.rapidapi.com/weather?location=`;
//current_observation: conditions : text , temperature
//forecasts : 0 : day, high ,low, text


////////////////////////////////////////////////////////////////////////////

const searchBox = document.getElementById('searchBox');
const searchButton = document.getElementById('searchButton');
const city = document.getElementById('city');
const text = document.getElementById('text');
const temp = document.getElementById('temp')
let lowTemp = document.getElementById('low_temp');
let highTemp = document.getElementById('high_temp');

///////////////////////////////////////////////////////////////////////////

searchButton.onclick = () => dataFetching()
const dataFetching = () => {

	fetch(`${BASE_URL}${searchBox.value}`, options)
		.then(response => response.json())
		.then(response => {

			const current_observation =response.current_observation.condition;
			const forecasts = response.forecasts[0];
			showForecastsData(forecasts)
			showData(current_observation)

			city.textContent = searchBox.value.toUpperCase(); 

		})

}

/* city.textContent = searchBox.value.toUpperCase(); */ 
	
const showData = (data) => {
	/* city.textContent = searchBox.value.toUpperCase();  */

	const dataTemp = data.temperature
	const dataText = data.text
	text.textContent = `${dataText.toUpperCase()}` 
	temp.textContent = `Temp: ${dataTemp} deg` 
}

const showForecastsData = (data) => {
	/* city.textContent = searchBox.value; */


	const dataHigh = data.high;
	const datalow = data.low;
	lowTemp.textContent = `Min-Temp: ${datalow} deg`;
	highTemp.textContent = `Max-Temp: ${dataHigh} deg`;

	/* 
		california
		lagos
		new york
		ogun
		abeokuta
		wincosin
		abu dabhi
		ife
		abuja
		ede
	*/
}


