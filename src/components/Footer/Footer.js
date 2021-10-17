import React from 'react';
import { Facebook, Messenger, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import hotelIcon from '../../img/hotelIcon.svg';

const Footer = () => {
	return (
		<footer className="bg-black text-white">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 pt-12 w-9/12 mx-auto ">
					<div>
						<h4 className="font-thin text-2xl">Phone Support</h4>
						<p className="tent-lg font-thin text-gray-400 pb-5">24 HOURS A DAY</p>
						<a href="tel:+18475555555" className="font-thin ">
							1-847-555-5555
						</a>
					</div>
					<div>
						<h4 className="font-thin text-2xl">Connect With Us</h4>
						<p className="tent-lg font-thin text-gray-400 pb-5">SOCIAL MEDIA CHANNELS</p>
						<div className="flex  justify-between w-36">
							<a href="https" target="_blank">
								<Facebook />
							</a>
							<a href="https" target="_blank">
								<Messenger />
							</a>
							<a href="https" target="_blank">
								<Instagram />
							</a>
							<a href="https" target="_blank">
								<Twitter />
							</a>
							<a href="https" target="_blank">
								<Youtube />
							</a>
						</div>
					</div>
					<div>
						<h4 className="font-thin text-2xl">Catagories</h4>
						<p className="tent-lg font-thin text-gray-400 pb-5">IMPORTANT LINKS</p>
						<div className="flex flex-col justify-between">
							<Link to="/gallery">GALLERY</Link>
							<Link to="/login">LOGIN</Link>
							<Link to="/ROOMS">ROOMS</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
				<a
					href="https"
					target="_blank"
					className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
				>
					<img src={hotelIcon} alt="!" className="w-10" />
					<span className="ml-3 text-xl text-white">BURJ AL ARABIA</span>
				</a>
				<p className="text-sm text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
					© 2021 BURJ AL ARABIA —
					<a
						target="_blank"
						href="https://twitter.com/"
						className="text-gray-300 ml-1"
						rel="noopener noreferrer"
					>
						@burj_al_arabia
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
