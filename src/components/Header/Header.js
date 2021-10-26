import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import OffcanvasMenu from 'react-offcanvas-menu-component';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import hotelIcon from '../../img/hotelIcon.svg';
import { Switch } from '@headlessui/react';
// demo

const Header = () => {
	const { user, logOut } = useAuth();
	const location = useLocation();

	// show photo in off canvas
	const photo = (photo) => {
		if (photo) {
			return <img className="mr-3 rounded-full h-12 w-12" src={user.photoURL} alt="!" />;
		} else {
			return <img src={hotelIcon} className="menu-logo" alt="logo" width="100" height="100" />;
		}
	};
	// switch for dark mode 
	const [ enabled, setEnabled ] = useState(false);
if(enabled){
	document.getElementById('root').classList.add('dark')
}else{
		document.getElementById('root').classList.remove('dark')
}
	return (
		<div className='bg-black text-white'>
			<nav className='navbar container mx-auto py-3'>
				<ul className='list-none flex justify-between'>
				<div  className='inline-block flex items-center'>
						
					<li className='inline-block cursor-pointer	px-6 hover:bg-gray-300 py-3 mr-3'>Home</li>
					<li className='inline-block cursor-pointer	px-6 hover:bg-gray-300 py-3 mr-3'>Rooms</li>
					<li className='inline-block cursor-pointer	px-6 hover:bg-gray-300 py-3 mr-3'>About</li>
					<li className='inline-block cursor-pointer	px-6 hover:bg-gray-300 py-3 mr-3'>Contact</li>
					<li className='inline-block cursor-pointer	px-6 hover:bg-gray-300 py-3 '>Gallery</li>
					
				</div>
					<div  className='inline-block'>
							<img className='inline-block w-12 mr-3' src={hotelIcon} alt="!" />
							<li className='inline-block mr-3 cursor-pointer hover:bg-gray-300 py-3 px-4 mr-3'>BURJ AL ARABIA</li>
							<li className='inline-block mr-3 cursor-pointer hover:bg-gray-300 py-3 px-4 mr-3'>LOG IN</li>
					<li className='inline-block mr-3 cursor-pointer hover:bg-gray-300 py-3 px-4 mr-3'>SIGN OUT</li>
					<img className='inline-block w-14 rounded-full h-14' src={user?.photoURL} alt="!" />
					</div>
					
				
				</ul>
			</nav>

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
					header={// you can add logo to the header for example
					// <img src={hotelIcon} className="menu-logo" alt="logo" width="100" height="100" />
					photo(user?.photoURL)}
				/>
			</div>
		</div>
	);
};
export default Header;
