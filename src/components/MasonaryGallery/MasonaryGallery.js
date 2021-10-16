import React from 'react';
import RoomHeading from '../RoomHeading/RoomHeading';
import Gallery from 'react-photo-masonry/dist/react-photo-gallery.esm';
import { photos } from './photos';
const MasonaryGallery = () => {
	return (
		<div>
			<RoomHeading>Gallery</RoomHeading>
			<div className="container mx-auto w-9/12">
				<h2 className="text-4xl text-center my-6">Gallery</h2>
				<Gallery photos={photos} direction={'column'} />
			</div>
		</div>
	);
};

export default MasonaryGallery;
