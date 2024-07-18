import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import LogIn from './pages/LogIn';
import SingUp from './pages/SingUp';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LogIn />} />
				<Route path="/signup" element={<SingUp />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
