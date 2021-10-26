<header className="text-white body-font bg-transparent header-position w-full ">
				<div className="container mx-auto">
					<div className="grid  grid-cols-1 lg:grid-cols-2 h-20 items-center ">
						{/* 1st column */}
						<div className="hidden lg:block">
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
						<div className="flex ml-auto">
							<div>
								<NavLink to="/" className="flex">
									<img className="w-10" src={hotelIcon} alt="!" />
									<span className="mx-3 text-3xl text-white hover:text-gray-900 hidden lg:block">
										BURJ AL ARABIA
									</span>
								</NavLink>
							</div>
							<div>
								{/* conditional login and image */}
								<div className="flex items-center">
									<span>
										{user?.displayName && <span className="text-lg  mx-2">{user.displayName}</span>}
									</span>
									<span className="hidden lg:block">
										{user?.photoURL && (
											<img className="mr-3 rounded-full h-12 w-12" src={user.photoURL} alt="!" />
										)}
									</span>
										{/* switch */}
					<Switch
						checked={enabled}
						onChange={setEnabled}
						className={`${enabled
							? 'bg-blue-600'
							: 'bg-gray-200'} relative inline-flex items-center h-6 rounded-full w-11`}
					>
						<span className="sr-only">Enable notifications</span>
						<span
							className={`${enabled
								? 'translate-x-6'
								: 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full`}
						/>
					</Switch>
					{/* switch */}
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