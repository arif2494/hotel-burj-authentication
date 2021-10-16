import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Rooms from './components/Rooms/Rooms';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import PageNotFound from './components/PageNotFound/PageNotFound';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import DataProvider from './context/DataProvider';
import RoomDetails from './components/RoomDetails/RoomDetails';

function App() {
	return (
		// Rooms data context
		<DataProvider>
			{/* Authentication system */}
			<AuthProvider>
				<Router>
					<Header />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/rooms">
							<Rooms />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/contact">
							<ContactUs />
						</Route>
						<Route exact path="/gallery">
							<Gallery />
						</Route>
						<Route path="/rooms/:roomId">
							<RoomDetails />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="*">
							<PageNotFound />
						</Route>
					</Switch>
					<Footer />
				</Router>
			</AuthProvider>
		</DataProvider>
	);
}

export default App;
