// import React, { useState } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';

import useAuth from '../../hooks/useAuth';

const Login = () => {

	const { signinUsingGoogle, signUpWithEmailAndPassword ,loginWithEmailAndPassword,setUSerName,setUser} = useAuth();
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
			});
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
			});

			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
			});

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
			});
}
	
	const handleToggle=(e)=>{
		const checked=e.target.checked
setCheck(checked)
	}

	return (
		<div>
			<h1 className="text-6xl text-center mt-6">Login Using Google</h1>
			<button
				className="flex mx-auto mt-5 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
				onClick={handleGoogleSignIn}
			>
				Sign In with Google
			</button>

			<div className="mt-12">
				<h1 className="text-3xl font-medium mb-4 text-center">Sign Up</h1>
				<form onSubmit={check ? handleSubmit(handleLogin) :handleSubmit(handleSignUp)} className='flex flex-col items-center'>
					{check || <input
						className="p-3 bg-gray-200 w-80 mb-6 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md"
						placeholder='Type Your Name'
						{...register('name',{ required: true })}
						type='text'
					/>
					
					}
					<input
						className="p-3 bg-gray-200 w-80 mb-6 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md"
						placeholder='Type Email'
						{...register('email',{ required: true })}
						type='email'
					/>
				{errors.email && <span className='text-red-600'>Please Enter Email Address</span>}   

					<input
						className="p-3 bg-gray-200 w-80 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-md"
						placeholder='Type Password' 
						type='password'
						{...register('password', 
						{ required: true })}
					/>

					{errors.password && <span className='text-red-600'>Please Enter Password</span>}
					<label  htmlFor="check"><input onClick={handleToggle} type="checkbox" id='check' className=" checked:bg-blue-600 checked:border-transparent" /> Already Have a account?</label>
			
					<input
						className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-full py-3 px-6 mt-3 text-white font-medium text-1xl"
						type="submit"
					/>

					
				</form>
			</div>
		</div>
	);
};

export default Login;