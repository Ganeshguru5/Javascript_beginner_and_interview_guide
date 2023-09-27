const fetch = require('node-fetch')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f742260e6dmshdeb7934353d148fp1f4ed5jsn1f5f3421a5f3',
		'X-RapidAPI-Host': 'movierulz.p.rapidapi.com'
	}
};

fetch('https://movierulz.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

