import React, { useState, useEffect } from 'react';
import PhotoDetail from './PhotoDetail';
import axios from 'axios';

const Gallery = ({ query }) => {
	const API_KEY = process.env.REACT_APP_FLICKR_API_KEY;
	let [photos, setPhotos] = useState(null);

	useEffect(() => {
		const flickr = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${query}&per_page=20&format=json&nojsoncallback=1`;
		axios
			.get(flickr)
			.then((res) => {
				setPhotos(res.data.photos.photo);
			})
			.catch(console.error);
	}, []);
	if (!photos) {
		return (
			<div>
				<p>No Photos Found</p>
			</div>
		);
	}
	return (
		<div className='gallery-container'>
			<h1>Results</h1>
			<ul>
				{photos.map((picture, idx) => {
					return <PhotoDetail pic={picture} />;
				})}
			</ul>
		</div>
	);
};

export default Gallery;
