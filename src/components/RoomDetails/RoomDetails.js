import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router';
import useData from '../../hooks/useData';
import DatePicker from '../DatePicker/DatePicker';
import RoomHeading from '../RoomHeading/RoomHeading';
import flyer from '../../img/flyer.jpg';
import {
	People,
	BoundingBoxCircles,
	CurrencyDollar,
	Tv,
	Wifi,
	Cup,
	Lock,
	ThermometerHalf,
	Telephone,
	Joystick,
	EyeSlash,
	EggFried
} from 'react-bootstrap-icons';

const RoomDetails = () => {
	const { rooms } = useData();
	const id = useParams();
	const roomId = parseInt(id.roomId);
	const found = rooms.find((room) => room.id === roomId);
	const { img, name, capacity, size, price, ratting, description } = found;
	const ratingDetails = {
		isHalf: true,
		size: 40,
		value: ratting,
		edit: false
	};
	return (
		<div>
			<RoomHeading>Room Details</RoomHeading>

			<div className="container mx-auto w-9/12">
				<div className="grid grid-cols-5 gap-4 my-8">
					{/* First column */}
					<div className="col-span-3">
						{/* Name */}
						<h2 className="text-4xl font-medium">{name}</h2>
						{/* Rattings */}
						<p className="font-thin text-lg mt-3">Rattings : </p>
						<div className="flex items-center">
							<ReactStars {...ratingDetails} />
							<p className="text-2xl ml-3">{ratting}</p>
						</div>
						{/* Image */}
						<img src={img} alt="!" className="w-full" />
						{/* Room details */}
						<div className="grid grid-cols-3 divide-x-2 divide-gray-500 border-b-2 border-gray-200 mb-4">
							<div className=" my-6 flex items-center justify-center flex-col">
								<People size={40} />
								<p className="text-2xl">Capacity : {capacity}</p>
							</div>
							<div className=" my-6 flex items-center justify-center flex-col">
								<BoundingBoxCircles size={40} />
								<p className="text-2xl">Room Size : {size}</p>
							</div>
							<div className=" my-6 flex items-center justify-center flex-col">
								<CurrencyDollar size={40} />
								<p className="text-2xl">Price : {price}</p>
							</div>
						</div>

						{/* Description */}
						<div className="border-b-2 border-gray-200 pb-3 mb-4">
							<p className="text-justify text-lg ">{description}</p>
						</div>

						{/* Rooms services */}
						<div>
							<h2 className="text-2xl ">Room Services</h2>
							<div className="grid grid-cols-3 gap-4 mt-4">
								<div className="flex">
									<Tv size={24} className="mr-3" />
									<p>Television</p>
								</div>
								<div className="flex">
									<Cup size={24} className="mr-3" />
									<p>Coffee</p>
								</div>
								<div className="flex">
									<Wifi size={24} className="mr-3" />
									<p>Free Wifi</p>
								</div>

								<div className="flex">
									<Lock size={24} className="mr-3" />
									<p>Locker</p>
								</div>
								<div className="flex">
									<ThermometerHalf size={24} className="mr-3" />
									<p>Controled Temprature</p>
								</div>
								<div className="flex">
									<Telephone size={24} className="mr-3" />
									<p>Telephone</p>
								</div>

								<div className="flex">
									<Joystick size={24} className="mr-3" />
									<p>Gaming Facility</p>
								</div>
								<div className="flex">
									<EyeSlash size={24} className="mr-3" />
									<p>Privacy</p>
								</div>
								<div className="flex">
									<EggFried size={24} className="mr-3" />
									<p>Food</p>
								</div>
							</div>
						</div>
					</div>
					{/* second Column */}
					<div className="col-span-2">
						<div>
							<h2 className="text-3xl ">Select Your Booking Date</h2>
							<DatePicker />
							<button className="bg-black flex  text-white my-6 px-6 py-3 font-medium ">Book Now</button>
						</div>
						<img className="w-9/12" src={flyer} alt="!" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default RoomDetails;
