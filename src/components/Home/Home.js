import React from 'react';
import BestRooms from '../BestRooms/BestRooms';
import HomeAbout from '../HomeAbout/HomeAbout';
import Reviews from '../Reviews/Reviews';
import Rooms from '../Rooms/Rooms';
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
			{/* Rooms */}
			<div className="container mx-auto mt-12">
				<h1 className="text-5xl mb-3">Hotel Rooms</h1>
				<Rooms />
			</div>
		</div>
	);
};

export default Home;
