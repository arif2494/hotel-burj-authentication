import React from 'react';
import BestRooms from '../BestRooms/BestRooms';
import FoodReception from '../FoodReception/FoodReception';
import HomeAbout from '../HomeAbout/HomeAbout';
import Reviews from '../Reviews/Reviews';

const Home = () => {
	return (
		<div>
			{/* hero section */}
			<div className="hero-section flex items-center justify-center">
				<div className="text-center middle">
					<h1 className="text-7xl text-indigo-500 font-medium ">HOTEL BURJ AL ARABIA</h1>
					<p className="w-6/12 text-2xl mx-auto text-white font-medium">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, magni pariatur? Eum vel
						debitis odit laboriosam magnam iusto fugiat maiores est rerum voluptas, voluptatum cupiditate
						id?
					</p>
				</div>
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
