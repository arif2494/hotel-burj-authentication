import React from 'react';
import { Link } from 'react-router-dom';

const Room = (props) => {
	const { name, img, description, price, id } = props.room;
	console.log(props);
	const url = '';
	return (
		<div className="border-2 border-gray-400 my-2  rounded-2xl p-4">
			<div className="grid grid-cols-6 gap-4">
				<div className=" col-span-2">
					<img src={img} alt="" className="w-full rounded-2xl" />
				</div>
				<div className=" col-span-3 p-4 flex justify-center items-center flex-col">
					<div>
						<h1 className="font-medium text-3xl ">{name}</h1>
						<p className="pt-4 text-lg font-thin">{description.substring(0, 300)}...</p>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center">
					<h1 className="font-bold text-3xl"> $ {price}</h1>
					<p className="text-lg my-4">Per Night</p>
					<Link to="">
						<button className="bg-black flex  text-white px-6 py-3 font-medium ">Show Details</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Room;
