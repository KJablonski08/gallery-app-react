import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import SearchButtons from './components/SearchButtons';
import Routes from './Routes';
import axios from 'axios';

function App() {
	const API_KEY = process.env.REACT_APP_FLICKR_API_KEY;
	const [buttons, setButtons] = useState({
		photos: [],
		dogs: [],
		cats: [],
		computers: [],
	});

	useEffect(() => {
		let query = 'dogs';
		const flickr = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${query}&per_page=20&format=json&nojsoncallback=1`;
		axios
			.get(flickr)
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.log('Error fetching data from Flickr API', error);
			});
	}, []);

	return (
		<div className='App'>
			<SearchBar />
			<SearchButtons />
			<Routes />
		</div>
	);
}

export default App;
