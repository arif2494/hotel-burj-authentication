import React from 'react';
import RoomHeading from '../RoomHeading/RoomHeading';
import aboutImg from '../../img/about.jpg';
import bed from '../../img/bed.png';
import chef from '../../img/chef.png';
import resturant from '../../img/restaurant.png';
import pool from '../../img/swimming-pool.png';
const About = () => {
	return (
		<div>
			<RoomHeading>About Us</RoomHeading>
			<div className="container mx-auto">
				{/* about hotel */}
				<div className="grid grid-cols-1 md:grid-cols-2 my-8 flex items-center justify-end">
					<div className="p-16">
						<h2 className="text-4xl font-medium ">BURJ AL ARABIA SINCE 1992</h2>
						<h6 className="text-lg my-4">High quality accommodation services.</h6>
						<p className="text-justify font-thin">
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
							tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
							nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
						</p>
						<p className="text-justify font-thin">
							Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
							illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
							blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
						</p>
					</div>
					<div>
						<img src={aboutImg} alt="!" className="w-full md:w-9/12" />
					</div>
				</div>
				{/* our institute */}
				<div className="grid gap-4 md:gap-8 grid-cols-2 md:grid-cols-4 px-16 my-4">
					<div className="border-2 border-gray-400 p-4 flex  flex-col items-center">
						<img src={bed} alt="!" className="w-20" />
						<p className="text-2xl font-thin mt-2">50 Rooms</p>
					</div>
					<div className="border-2 border-gray-400 p-4 flex  flex-col items-center">
						<img src={chef} alt="!" className="w-20" />
						<p className="text-2xl font-thin mt-2">35 Staff</p>
					</div>
					<div className="border-2 border-gray-400 p-4 flex  flex-col items-center">
						<img src={resturant} alt="!" className="w-20" />
						<p className="text-2xl font-thin mt-2">2 Restaurent</p>
					</div>
					<div className="border-2 border-gray-400 p-4 flex  flex-col items-center">
						<img src={pool} alt="!" className="w-20" />
						<p className="text-2xl font-thin mt-2">3 Swimming Pool</p>
					</div>
				</div>
				{/*  */}
			</div>
		</div>
	);
};

export default About;
