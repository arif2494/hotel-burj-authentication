import React from 'react';
import useData from '../../hooks/useData';
import Room from '../Room/Room';
import RoomHeading from '../RoomHeading/RoomHeading';

const Rooms = () => {
	const { rooms } = useData();

	return (
		<div>
			<RoomHeading> All The Rooms</RoomHeading>
			<div className="container mx-auto">{rooms.map((room) => <Room key={room.id} room={room} />)}</div>
		</div>
	);
};

export default Rooms;
