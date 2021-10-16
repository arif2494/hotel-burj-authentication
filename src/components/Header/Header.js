import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import hotelIcon from '../../img/hotelIcon.svg';

const Header = () => {
	const { user, logOut } = useAuth();
	return (
	
			<header className="text-gray-600 body-font bg-transparent header-position w-full">
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
						<NavLink to="/" className="mr-5 hover:text-gray-900 text-3xl text-white">
							Home
						</NavLink>
						<NavLink to="/rooms" className="mr-5 hover:text-gray-900 text-3xl text-white">
							Rooms
						</NavLink>
						<NavLink to="/login" className="mr-5 hover:text-gray-900 text-3xl text-white">
							Login
						</NavLink>
					</nav>
					<NavLink
						to="/"
						className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0 "
					>
						<img className="w-10" src={hotelIcon} alt="!" />
						<span className="ml-3 text-3xl text-white hover:text-gray-900">BURJ AL ARABIA</span>
					</NavLink>
					<div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
						<span>{user?.displayName && 
					<span className='mr-2 text-white font-medium text-2xl'>{user.displayName}</span>
						}</span>
						<span>{user?.photoURL && 
						<img className='mr-3 rounded-full h-12 w-12' src={user.photoURL} alt="!" />
						}</span>
						{user?.email ? (
							<button
								onClick={logOut}
								className=" h-9  bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-900
            hover:text-white rounded text-base mt-4 md:mt-0"
							>
								Sign Out
							</button>
						) : (
							<NavLink
								to="/login"
								className=" bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-900
            hover:text-white rounded text-base mt-4 md:mt-0"
							>
								Sign In
							</NavLink>
						)}
					</div>
				</div>
			</header>
		
	);
};

export default Header;
