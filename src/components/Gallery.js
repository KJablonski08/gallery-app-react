import React from 'react';
import PhotoDetail from './PhotoDetail';

const Gallery = () => {
	return (
		<div class='gallery-container'>
			<h2>Results</h2>
			<ul>
				<PhotoDetail />
			</ul>
		</div>
	);
};

export default Gallery;
