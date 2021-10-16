import React from 'react';

const RoomHeading = ({ children }) => {
	return (
		<div>
			<div className="room-details flex justify-center items-center">
				<h2 className="text-4xl text-white font-thin bottom-line">{children}</h2>
			</div>
		</div>
	);
};

export default RoomHeading;
