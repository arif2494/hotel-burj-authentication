import React, { useEffect, useState } from 'react';
// import useData from '../../hooks/useData';
import Room from '../Room/Room';
import RoomHeading from '../RoomHeading/RoomHeading';

const Rooms = () => {
	// const { rooms } = useData();
	const [ rooms, setRooms ] = useState([]);
	const [ page, setPage ] = useState(0);
	const [ pageCount, setPageCount ] = useState(0);
	const size = 5;
	useEffect(
		() => {
			fetch(`http://localhost:5000/rooms?page=${page}&&size=${size}`).then((res) => res.json()).then((data) => {
				setRooms(data.rooms);
				// pagination
				const count = data.count;
				const pageNumber = Math.ceil(count / size);
				setPageCount(pageNumber);
			});
		},
		[ page ]
	);

	return (
		<div>
			<RoomHeading> All The Rooms</RoomHeading>
			<div className="dark:bg-gray-800 py-6">
				<div className="container mx-auto">{rooms.map((room) => <Room key={room.id} room={room} />)}</div>
				{/* pagination */}
				<div className="pagination">
					{[ ...Array(pageCount).keys() ].map((num) => (
						<button className={num === page ? 'selected' : ''} key={num} onClick={() => setPage(num)}>
							{num + 1}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default Rooms;
