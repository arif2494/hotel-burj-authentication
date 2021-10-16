import { createContext } from 'react';
import useRooms from '../hooks/useRooms';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
	const allContext = useRooms();
	return <DataContext.Provider value={allContext}>{children}</DataContext.Provider>;
};

export default DataProvider;
