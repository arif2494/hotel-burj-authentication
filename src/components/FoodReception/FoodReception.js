import React from 'react';
import { Link } from 'react-router-dom';
import food from '../../img/food.jpg';
import reception from '../../img/reception.jpg';
const FoodReception = () => {
	return (
		<div className="bg-gray-100 dark:bg-gray-800">
			<div className="container mx-auto p-4  md:py-12 w-full md:w-8/12">
				<h2 className="bottom-line mb-12 text-center text-4xl font-thin dark:text-gray-100">
					FOOD & RECEPTION
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2">
					{/* first row */}
					<div className="text-center bg-white dark:bg-gray-600 p-2 md:p-16">
						<p className="bottom-line mb-3 text-gray-500  font-thin dark:text-gray-300">FIND FOOD</p>
						<h3 className="text-4xl mb-4 md:mb-14 font-thin dark:text-gray-100">Restaurent</h3>
						<p className="font-thin text-lg my-8 text-gray-400 dark:text-gray-200">
							Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque
							euismod orci ut et lobortis. Phasellus enim libero, blandit.
						</p>
						<Link to="/rooms">
							<button className="bg-black flex mx-auto text-white px-6 py-3 font-medium ">
								Explore Rooms
							</button>
						</Link>
					</div>
					<div>
						<img src={food} alt="!" className="mb-2 md:mb-0" />
					</div>
					{/* second row */}
					<div>
						<img src={reception} alt="!" />
					</div>
					<div className="text-center bg-white dark:bg-gray-600 p-2 md:p-16">
						<p className="bottom-line mb-3 text-gray-500  font-thin dark:text-gray-300">
							HOTEL BUEJ AL ARABIA
						</p>
						<h3 className="text-4xl mb-4 md:mb-14 font-thin dark:text-gray-100">Receptions</h3>
						<p className="font-thin text-lg my-8 text-gray-400 dark:text-gray-200">
							Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque
							euismod orci ut et lobortis. Phasellus enim libero, blandit.
						</p>
						<Link to="/rooms">
							<button className="bg-black flex mx-auto text-white px-6 py-3 font-medium ">
								Explore Rooms
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodReception;
