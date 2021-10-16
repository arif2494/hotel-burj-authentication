import React from 'react';
import BestRooms from '../BestRooms/BestRooms';
import DatePicker from '../DatePicker/DatePicker';
import FoodReception from '../FoodReception/FoodReception';
import HomeAbout from '../HomeAbout/HomeAbout';
import Reviews from '../Reviews/Reviews';

const Home = () => {
	return (
		<div>
			{/* hero section */}
			<div className="hero-section flex items-center justify-center">
				{/* datepicker */}
				<DatePicker />
				<button className="px-6 py-3 text-white bg-black">Book Now</button>
			</div>
			{/* Home About */}
			<HomeAbout />
			{/* our best rooms */}
			<BestRooms />
			{/* Reviews */}
			<Reviews />
			{/* fOOD & RECEPTION */}
			<FoodReception />
		</div>
	);
};

export default Home;
