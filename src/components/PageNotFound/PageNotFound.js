import React from 'react';
import notFound from '../../img/pageNotFOund.jpg';
const PageNotFound = () => {
	return (
		<div>
			{/* <RoomHeading>Page Not Found</RoomHeading> */}
			<img src={notFound} alt="!" className="w-full" />
		</div>
	);
};

export default PageNotFound;
