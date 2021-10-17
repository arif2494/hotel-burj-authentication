import React from 'react';
import { Link } from 'react-router-dom';

const Room = (props) => {
	const { name, img, description, price, id } = props.room;
	console.log(props);
	const url = `/rooms/${id}`;
	return (
		<div className="border-2 border-gray-400 my-6  rounded-2xl p-2  md:p-4">
			<div className="grid grid-cols-1 md:grid-cols-6  md:gap-4">
				<div className=" col-span-2">
					<img src={img} alt="" className="w-full rounded-2xl" />
				</div>
				<div className=" col-span-3 p-2 md:p-4 flex justify-center items-center flex-col">
					<div>
						<h1 className="font-medium text-2xl md:text-3xl ">{name}</h1>
						<p className="pt-2 md:pt-4 text-lg text-justify font-thin">
							{description.substring(0, 300)}...
						</p>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center">
					<h1 className="font-bold text-3xl"> $ {price}</h1>
					<p className="text-lg my-2 md:my-4">Per Night</p>
					<Link to={url}>
						<button className="bg-black flex  text-white px-6 py-3 font-medium ">Show Details</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Room;
