import React from 'react';
import mainImg from '../../img/bestRoomMain.jpg';
import bestRoom1 from '../../img/bestRoom1.jpg';
import bestRoom2 from '../../img/bestRoom2.jpg';
import bestRoom3 from '../../img/bestRoom3.jpg';
import bestRoom4 from '../../img/bestRoom4.jpg';
import { Person, BoundingBoxCircles } from 'react-bootstrap-icons';

const BestRooms = () => {
	return (
		<div className="bg-gray-100">
			<div className="container mx-auto p-2 w-full md:w-8/12">
				<p className="font-thin  text-gray-500 text-center pt-8 bottom-line">LUXURY ROOMS</p>
				<h2 className="text-5xl font-thin text-center py-5 mb-5">BEST ROOMS</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 pb-12">
					<div className="w-full h-full">
						<img src={mainImg} alt="!" className="w-full " />
						<div className="bg-white p-6 ">
							<h3 className="text-3xl font-thin mb-3">Small Room</h3>
							<p>
								<span className="flex mb-2">
									<Person size={25} />
									1 Guests
								</span>
								<span className="flex">
									<BoundingBoxCircles size={25} />
									15Ft
								</span>
							</p>
							<p className="font-thin text-gray-500 my-3">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatibus dolores nemo
								inventore placeat
							</p>
							<button className="bg-black flex text-white px-6 py-3 font-medium ">Explore Rooms</button>
						</div>
					</div>
					<div>
						<div className="grid grid-cols-2 gap-4">
							<div className="overlay">
								<img src={bestRoom1} alt="" />
								<p className="overlay-text ">
									<span>FAMILY ROOM</span>
									<span className="bg-yellow-500 hidden md:block p-1 rounded ml-3">FROM $25</span>
								</p>
							</div>
							<div className="overlay">
								<img src={bestRoom2} alt="" />
								<p className="overlay-text ">
									<span>LUXURY ROOM</span>
									<span className="bg-yellow-500 hidden md:block p-1 rounded ml-3">FROM $25</span>
								</p>
							</div>
							<div className="overlay">
								<img src={bestRoom3} alt="" />
								<p className="overlay-text ">
									<span>DOUBLE ROOM</span>
									<span className="bg-yellow-500 hidden md:block p-1 rounded ml-3">FROM $25</span>
								</p>
							</div>
							<div className="overlay">
								<img src={bestRoom4} alt="" />
								<p className="overlay-text ">
									<span>LIGHTING ROOM</span>
									<span className="bg-yellow-500 hidden md:block p-1 rounded ml-3">FROM $25</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BestRooms;
