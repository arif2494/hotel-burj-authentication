import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
	const [ user, setUser ] = useState(null);
	const googleProvider = new GoogleAuthProvider();
	const auth = getAuth();
	const signinUsingGoogle = () => {
		return signInWithPopup(auth, googleProvider);
	};
	// sign up with email and password

	const signUpWithEmailAndPassword = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	// set user name
	const setUSerName = (name) => {
		return updateProfile(auth.currentUser, {
			displayName: name
		});
	};
	//  Log in with email and password
	const loginWithEmailAndPassword = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	// current user
	useEffect(
		() => {
			onAuthStateChanged(auth, (user) => {
				if (user) {
					setUser(user);
				}
			});
		},
		[ user, auth ]
	);
	// logout
	const logOut = () => {
		signOut(auth).then(() => {
			setUser(null);
		});
	};

	return {
		signinUsingGoogle,
		user,
		setUser,
		signUpWithEmailAndPassword,
		loginWithEmailAndPassword,
		logOut,
		setUSerName
	};
};

export default useFirebase;
