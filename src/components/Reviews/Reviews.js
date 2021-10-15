import React from 'react';
// import { render } from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import user1 from '../../img/user1.jpg';
import user2 from '../../img/user2.jpg';
import user3 from '../../img/user3.jpg';

const getConfigurableProps = () => ({
	showArrows: true,
	showIndicators: false,
	infiniteLoop: true,
	showThumbs: false,
	autoPlay: true,
	stopOnHover: true,
	swipeable: true,
	interval: 3000,
	transitionTime: 500
});
const Reviews = () => {
	return (
		<div className="review-bg flex items-center flex-col justify-center">
			<h2 className="text-5xl	text-white bottom-line mb-8">REVIEWS</h2>
			<Carousel {...getConfigurableProps()}>
				<div>
					<h1 className="text-lg w-6/12 mx-auto text-white ">
						Sed sollicitudin, sem id imperdiet semper, enim ante tempor sapien, a commodo nisl dolor at
						elit. Aliquam suscipit egestas velit at elementum. Nulla sit amet ligula at dolor rhoncus
						rhoncus. Aenean molestie est tortor. Mauris dictum magna sit amet velit ornare.
					</h1>
					<img src={user1} alt="!" className="review-img" />
					<p className="text-white mt-3 font-thin text-gray-200 text-lg">Jeffry Hen - Luxury Room</p>
				</div>
				<div>
					<h1 className="text-lg w-6/12 mx-auto text-white">
						Sed sollicitudin, sem id imperdiet semper, enim ante tempor sapien, a commodo nisl dolor at
						elit. Aliquam suscipit egestas velit at elementum. Nulla sit amet ligula at dolor rhoncus
						rhoncus.
					</h1>
					<img src={user2} alt="!" className="review-img" />
					<p className="text-white mt-3 font-thin text-gray-200 text-lg">David Paul - Standard Room</p>
				</div>
				<div>
					<h1 className="text-lg w-6/12 mx-auto text-white">
						sem id imperdiet semper, enim ante tempor sapien, a commodo nisl dolor at elit. Aliquam suscipit
						egestas velit at elementum. Nulla sit amet ligula at dolor rhoncus rhoncus. Aenean molestie est
						tortor. Mauris dictum magna sit amet velit ornare.
					</h1>
					<img src={user3} alt="!" className="review-img" />
					<p className="text-white mt-3 font-thin text-gray-200 text-lg">Banty kon - King Room</p>
				</div>
			</Carousel>
		</div>
	);
};

// render(<Reviews />, document.getElementById('root'));

export default Reviews;
