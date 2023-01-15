import './App.css';
import React from 'react';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import PageNotFound from './components/PageNotFound';
import { Route, Routes } from 'react-router-dom';
import PageLayout from './components/Views/RecruiterViews/PageLayout';
import CandidatePageLayout from './components/Views/CandidateViews/PageLayout';

function App() {
	return (
		<Routes>
			<Route path='/' element={<LandingPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/dashboard' element={<PageLayout />} />
			<Route path='/candidate' element={<CandidatePageLayout />} />
			<Route path='*' element={<PageNotFound />} />
		</Routes>
	);
}

export default App;
