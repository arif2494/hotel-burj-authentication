import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../img/homeAbout.png';

const HomeAbout = () => {
	return (
		<div className="dark:bg-gray-900">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="text-center flex flex-col self-center">
						<p className="font-thin text-gray-500 p-8 dark:text-gray-300">HOTEL BURJ AL ARABIA</p>
						<h2 className=" text-6xl p-2 md:text-9xl font-thin dark:text-gray-100">
							Relax in our <br /> Resort
						</h2>
						<p className="font-thin text-gray-700 text-lg p-2 md:p-16 dark:text-gray-200">
							Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis
							rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam
							nulla ipsum, venenatis malesuada felis.
						</p>
						<Link to="/about">
							<button className="bg-black flex mx-auto text-white px-6 py-3 font-medium ">
								ABOUT US
							</button>
						</Link>
					</div>
					<div>
						<img src={img} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeAbout;
