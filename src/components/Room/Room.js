import React from 'react';

const Room = () => {
	return (
		<div>
			<h1 className="text-center text-5xl mt-6">All Rooms</h1>
			<div className="container mx-auto">
				<div className="grid grid-cols-3 gap-14 mt-12">
					<div className=" border-2 border-solid rounded-xl shadow-2xl mb-2">
						<img
							className="w-full rounded-xl h-72 animate"
							src="https://source.unsplash.com/kyt0PkBSCNQ/250x250"
							alt=""
						/>
						<h3 className="text-2xl font-bold my-2 border-b-2 border-solid pb-2 pl-2 text-gray-700">
							Single Room
						</h3>
						<p className="p-2 text-gray-600 font-medium">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam commodi a beatae
							perferendis aliquam atque quia. Commodi quos eius repudiandae.
						</p>
						<div className="flex justify-evenly border-t-2 border-solid p-2 font-medium">
							<p>
								Price: <span className="font-bold"> $50</span>
							</p>
							<p>
								Seat Available : <span className="font-bold">2</span>
							</p>
						</div>
					</div>
					<div className=" border-2 border-solid rounded-xl shadow-2xl mb-2">
						<img
							className="w-full rounded-xl h-72 animate"
							src="https://source.unsplash.com/paydk0JcIOQ/250x250"
							alt=""
						/>
						<h3 className="text-2xl font-bold my-2 border-b-2 border-solid pb-2 pl-2 text-gray-700">
							Couple Room
						</h3>
						<p className="p-2 text-gray-600 font-medium">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam commodi a beatae
							perferendis aliquam atque quia. Commodi quos eius repudiandae.
						</p>
						<div className="flex justify-evenly border-t-2 border-solid p-2 font-medium">
							<p>
								Price: <span className="font-bold"> $50</span>
							</p>
							<p>
								Seat Available : <span className="font-bold">2</span>
							</p>
						</div>
					</div>
					<div className=" border-2 border-solid rounded-xl shadow-2xl mb-2">
						<img
							className="w-full rounded-xl h-72 animate"
							src="https://source.unsplash.com/xP0gM0Dh-MY/250x250"
							alt=""
						/>
						<h3 className="text-2xl font-bold my-2 border-b-2 border-solid pb-2 pl-2 text-gray-700">
							Family Room
						</h3>
						<p className="p-2 text-gray-600 font-medium">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam commodi a beatae
							perferendis aliquam atque quia. Commodi quos eius repudiandae.
						</p>
						<div className="flex justify-evenly border-t-2 border-solid p-2 font-medium">
							<p>
								Price: <span className="font-bold"> $50</span>
							</p>
							<p>
								Seat Available : <span className="font-bold">2</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Room;
