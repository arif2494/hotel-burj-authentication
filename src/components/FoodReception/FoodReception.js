import React from 'react';
import food from '../../img/food.jpg';
import reception from '../../img/reception.jpg';
const FoodReception = () => {
	return (
		<div className="bg-gray-100">
			<div className="container mx-auto  py-12 w-8/12">
				<h2 className="bottom-line mb-12 text-center text-4xl font-thin">FOOD & RECEPTION</h2>
				<div className="grid grid-cols-1 md:grid-cols-2">
					{/* first row */}
					<div className="text-center bg-white p-16">
						<p className="bottom-line mb-3 text-gray-500  font-thin">FIND FOOD</p>
						<h3 className="text-4xl mb-14 font-thin">Restaurent</h3>
						<p className="font-thin text-lg my-8 text-gray-400">
							Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque
							euismod orci ut et lobortis. Phasellus enim libero, blandit.
						</p>
						<button className="bg-black flex mx-auto text-white px-6 py-3 font-medium ">
							Explore Rooms
						</button>
					</div>
					<div>
						<img src={food} alt="!" className="mb-2 md:mb-0" />
					</div>
					{/* second row */}
					<div>
						<img src={reception} alt="!" />
					</div>
					<div className="text-center bg-white p-16">
						<p className="bottom-line mb-3 text-gray-500  font-thin">HOTEL BUEJ AL ARABIA</p>
						<h3 className="text-4xl mb-14 font-thin">Receptions</h3>
						<p className="font-thin text-lg my-8 text-gray-400">
							Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque
							euismod orci ut et lobortis. Phasellus enim libero, blandit.
						</p>
						<button className="bg-black flex mx-auto text-white px-6 py-3 font-medium ">
							Explore Rooms
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodReception;
