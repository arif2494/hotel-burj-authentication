import React, { useState } from 'react';
import { useLocation } from 'react-router';
import OffcanvasMenu from 'react-offcanvas-menu-component';
import { NavLink, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import hotelIcon from '../../img/hotelIcon.svg';
import { Switch } from '@headlessui/react';
import { TextCenter } from 'react-bootstrap-icons';
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
	if (enabled) {
		document.getElementById('root').classList.add('dark');
	} else {
		document.getElementById('root').classList.remove('dark');
	}
	return (
		<div className="bg-black text-white">
			<nav>
				<div class="logo">Burj Al Arabia</div>
				<label for="btn" class="icon" id="bar-icon">
					<span id="bar">
						<TextCenter size={36} className="fa-plus" />
					</span>
				</label>
				<input className="input-field" type="checkbox" id="btn" />
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<label for="btn-1" class="show">
							Features +
						</label>
						<a href="/">Features</a>
						<input className="input-field" type="checkbox" id="btn-1" />
						<ul>
							<li>
								<a href="/">Pages</a>
							</li>
							<li>
								<a href="/">Elements</a>
							</li>
							<li>
								<a href="/">Icons</a>
							</li>
						</ul>
					</li>
					<li>
						<label for="btn-2" class="show">
							Services +
						</label>
						<a href="/">Services</a>
						<input className="input-field" type="checkbox" id="btn-2" />
						<ul>
							<li>
								<a href="/">Web Design</a>
							</li>
							<li>
								<a href="/">App Design</a>
							</li>
							<li>
								<label for="btn-3" class="show">
									More +
								</label>
								<a href="/">
									More <span class="fa fa-plus" />
								</a>
								<input className="input-field" type="checkbox" id="btn-3" />
								<ul>
									<li>
										<a href="/">Submenu-1</a>
									</li>
									<li>
										<a href="/">Submenu-2</a>
									</li>
									<li>
										<a href="/">Submenu-3</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<a href="/">Portfolio</a>
					</li>
					<li>
						<a href="/">Contact</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};
export default Header;
