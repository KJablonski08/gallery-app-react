import React from 'react';

const PhotoDetail = ({ pic }) => {
	return (
		<li>
			<img
				src={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`}
				alt=''
			/>
		</li>
	);
};

// https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_n.jpg

export default PhotoDetail;
