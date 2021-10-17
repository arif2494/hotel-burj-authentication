// import React, { useState } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';

import useAuth from '../../hooks/useAuth';
import RoomHeading from '../RoomHeading/RoomHeading';

const Login = () => {

	const {setIsLoading, signinUsingGoogle, signUpWithEmailAndPassword ,loginWithEmailAndPassword,setUSerName,setUser} = useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirect_uri = location.state?.from || '/';
const[check, setCheck]= useState(null)
	const handleGoogleSignIn = () => {
		signinUsingGoogle()
			.then((result) => {
				const user = result.user;
				console.log(user);
				history.push(redirect_uri);
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
			})
			.finally(()=> setIsLoading(false))
	};
	// form hook
	const { register, handleSubmit, formState: { errors } } = useForm();
	const handleSignUp = (data) =>{
		// Sign up with password
 signUpWithEmailAndPassword(data.email,data.password )
 	
	.then((result) => {
	const user = result.user;
		setUSerName(data.name)	
		.then(() => {
				setUser(user);
	history.push(redirect_uri);
			})
			.catch((error) => {
				// An error occurred
				// ...
			}).finally(()=> setIsLoading(false))

			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
			}).finally(()=> setIsLoading(false))

	};


	// Login with password
const handleLogin=(data)=>{
loginWithEmailAndPassword(data.email,data.password)
.then((result) => {
				// Signed in
				const user = result.user;
					history.push(redirect_uri);
				setUser(user);
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
			}).finally(()=> setIsLoading(false))
}
	
	const handleToggle=(e)=>{
		const checked=e.target.checked
setCheck(checked)
	}

	return (
		<div>
			<RoomHeading>
				Login Page
			</RoomHeading>
		<div className='dark:bg-gray-800'>
				<h1 className="text-6xl text-center pt-6 dark:text-gray-100">Login Using Google</h1>
			<button
				className="flex mx-auto mt-5 text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded"
				onClick={handleGoogleSignIn}
			>
				Sign In with Google
			</button>

			<div className="mt-12">
				<h1 className="text-3xl font-medium mb-4 text-center dark:text-gray-200">Sign Up</h1>
				<form onSubmit={check ? handleSubmit(handleLogin) :handleSubmit(handleSignUp)} className='flex flex-col items-center pb-6'>
					{check || <input
						className="p-3 bg-gray-600 w-80 mb-6 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md"
						placeholder='Type Your Name'
						{...register('name',{ required: true })}
						type='text'
					/>
					
					}
					<input
						className="p-3 bg-gray-600 w-80 mb-6 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md"
						placeholder='Type Email'
						{...register('email',{ required: true })}
						type='email'
					/>
				{errors.email && <span className='text-red-600'>Please Enter Email Address</span>}   

					<input
						className="p-3 bg-gray-600 w-80 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md"
						placeholder='Type Password' 
						type='password'
						{...register('password', 
						{ required: true })}
					/>

					{errors.password && <span className='text-red-600'>Please Enter Password</span>}
					<label  htmlFor="check"><input onClick={handleToggle} type="checkbox" id='check' className="checked:bg-blue-600 checked:border-transparent " /> <span className='dark:text-gray-300'>Already Have a account?</span></label>
			
					<input
						className="bg-black hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-full py-3 px-6 mt-3 text-white font-medium text-1xl"
						type="submit"
					/>

					
				</form>
			</div>
		</div>
		</div>
	);
};

export default Login;
