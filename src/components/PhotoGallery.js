import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

const PhotoGallery = ({ query }) => {
	const API_KEY = process.env.REACT_APP_FLICKR_API_KEY;
	const [photos, setPhotos] = useState(null);
	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};

	useEffect(() => {
		const flickr = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=${query}&per_page=20&format=json&nojsoncallback=1`;
		axios
			.get(flickr)
			.then((res) => {
				let pics = res.data.photos.photo;
				let photoObjs = [];
				pics.map((pic) => {
					let photoObj = {
						src: `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`,
						width: '',
						height: '',
					};
					axios
						.get(
							`https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${API_KEY}&photo_id=${pic.id}&format=json&nojsoncallback=1`
						)
						.then((res) => {
							photoObj.height = res.data.sizes.size[6].height;
							photoObj.width = res.data.sizes.size[6].width;
						})
						.then(photoObjs.push(photoObj));
				});
				setPhotos(photoObjs);
			})
			.catch(console.error);
	}, [query]);
	if (!photos) {
		return (
			<div>
				<p>No Photos Found</p>
			</div>
		);
	}
	return (
		<div className='gallery-container horizontal-spacing'>
			<h1>Results</h1>
			<Gallery photos={photos} onClick={openLightbox} />
			<ModalGateway>
				{viewerIsOpen ? (
					<Modal onClose={closeLightbox}>
						<Carousel
							currentIndex={currentImage}
							views={photos.map((x) => ({
								...x,
								srcset: x.srcSet,
								caption: x.title,
							}))}
						/>
					</Modal>
				) : null}
			</ModalGateway>
		</div>
	);
};

export default PhotoGallery;
