import { useEffect, useState } from 'react';
const useRooms = () => {
	const [ rooms, setRooms ] = useState([]);

	useEffect(() => {
		fetch('data.json').then((res) => res.json()).then((data) => setRooms(data));
	}, []);
	return { rooms };
};

export default useRooms;