import './App.css';
import React from 'react';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route path='/' element={<LandingPage />} />
			<Route path='/login' element={<LoginPage />} />
		</Routes>
	);
}

export default App;
