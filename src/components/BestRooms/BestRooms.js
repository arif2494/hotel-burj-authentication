import React from 'react';
import mainImg from '../../img/bestRoomMain.jpg';
import bestRoom1 from '../../img/bestRoom1.jpg';
import bestRoom2 from '../../img/bestRoom2.jpg';
import bestRoom3 from '../../img/bestRoom3.jpg';
import bestRoom4 from '../../img/bestRoom4.jpg';

const BestRooms = () => {
	return (
		<div className="bg-gray-100">
			<div className="container mx-auto w-8/12">
				<p className="font-thin  text-gray-500 text-center pt-8 bottom-line">LUXURY ROOMS</p>
				<h2 className="text-5xl font-thin text-center py-5 mb-5">BEST ROOMS</h2>
				<div className="grid grid-cols-2 gap-4 pt-6 pb-12">
					<div className="w-full h-full">
						<img src={mainImg} alt="!" className="w-full " />
						<div className="bg-white p-6 ">
							<h3 className="text-3xl font-thin mb-3">Small Room</h3>
							<p>
								<span className="flex mb-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>1 Guests
								</span>
								<span className="flex">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
										/>
									</svg>15Ft
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
									<span className="bg-yellow-500 p-1 rounded ml-3">FROM $25</span>
								</p>
							</div>
							<div className="overlay">
								<img src={bestRoom2} alt="" />
								<p className="overlay-text ">
									<span>LUXURY ROOM</span>
									<span className="bg-yellow-500 p-1 rounded ml-3">FROM $25</span>
								</p>
							</div>
							<div className="overlay">
								<img src={bestRoom3} alt="" />
								<p className="overlay-text ">
									<span>DOUBLE ROOM</span>
									<span className="bg-yellow-500 p-1 rounded ml-3">FROM $25</span>
								</p>
							</div>
							<div className="overlay">
								<img src={bestRoom4} alt="" />
								<p className="overlay-text ">
									<span>LIGHTING ROOM</span>
									<span className="bg-yellow-500 p-1 rounded ml-3">FROM $25</span>
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
