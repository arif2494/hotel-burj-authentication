import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import OffcanvasMenu from 'react-offcanvas-menu-component';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import hotelIcon from '../../img/hotelIcon.svg';
// demo

const Header = () => {
	const { user, logOut } = useAuth();
	const location = useLocation();

	// show photo in off canvas
const photo=(photo) =>{
if(photo){
	return	<img className='mr-3 rounded-full h-12 w-12' src={user.photoURL} alt="!" />
}else{
	return	<img src={hotelIcon} className="menu-logo" alt="logo" width="100" height="100" />
}

}
				
	return (
		<div>
			<header className="text-white body-font bg-transparent header-position w-full ">
				<div className="container mx-auto">
					<div className="grid  grid-cols-1 lg:grid-cols-2 h-20 items-center ">
						{/* 1st column */}
						<div className='hidden lg:block'>
							<nav>
								<NavLink to="/" className="mr-5 hover:text-gray-900 text-3xl text-white">
									Home
								</NavLink>
								<NavLink to="/rooms" className="mr-5 hover:text-gray-900 text-3xl text-white">
									Rooms
								</NavLink>
								<NavLink to="/about" className="mr-5 hover:text-gray-900 text-3xl text-white">
									About
								</NavLink>
								<NavLink to="/contact" className="mr-5 hover:text-gray-900 text-3xl text-white">
									Contact
								</NavLink>
								<NavLink to="/gallery" className="mr-5 hover:text-gray-900 text-3xl text-white">
									Gallery
								</NavLink>
							</nav>
						</div>
						{/* 2nd column */}
						<div className='flex ml-auto'>
							<div>
								<NavLink to="/" className="flex">
									<img className="w-10" src={hotelIcon} alt="!" />
									<span className="ml-3 text-3xl text-white hover:text-gray-900 hidden lg:block">BURJ AL ARABIA</span>
								</NavLink>
							</div>
							<div>
								{/* conditional login and image */}
								<div className='flex items-center'>
				<span>{user?.displayName &&
			<span className='text-lg  mx-2'>{user.displayName}</span>
				}</span>
				<span className='hidden lg:block'>{user?.photoURL &&
				<img className='mr-3 rounded-full h-12 w-12' src={user.photoURL} alt="!" />
				}</span>
				{user?.email ? (
					<button
						onClick={logOut}
						className=" h-9 text-black  bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-900
	      hover:text-white rounded text-base mt-4 md:mt-0"
					>
						Sign Out
					</button>
				) : (
					<NavLink
						to="/login"
						className=" bg-gray-100 text-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-900
	      hover:text-white rounded text-base mt-4 md:mt-0 ml-3"
					>
						Sign In
					</NavLink>
				)}
			</div>
							</div>
						</div>
						{/* end */}
					</div>
				</div>
			</header>
	
			{/* off canvas */}
			<div className="lg:hidden block">
				<OffcanvasMenu
					Link={Link} // react-router-dom Link
					location={location} // location parameter passed from Router
					config={{
						width: 300, // you can modify default width
						push: true // if you want to enable push feature
					}}
					// this is where you create your menu items
					menu={[
						// basic menu item
						{ text: 'Home', link: '/' },
						{ text: '	Rooms', link: '/rooms' },
						{ text: 'About', link: '/about' },
						{ text: '	Contact', link: '/contact' },
						{ text: 'Gallery', link: '/gallery' }
					]}
					header={
						// you can add logo to the header for example
						// <img src={hotelIcon} className="menu-logo" alt="logo" width="100" height="100" />
						photo(user?.photoURL)
					}
				/>
			</div>
		</div>
	);
};
export default Header;
