import React, { useState, useEffect, useCallback } from 'react';
import PhotoDetail from './PhotoDetail';
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
					let url = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`;
					photoObjs.push({
						src: url,
					});
				});
				setPhotos(photoObjs);
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
			</ul>
		</div>
	);
};

export default PhotoGallery;
