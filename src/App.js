import './App.css';
import React from 'react';
import { FloatButton } from 'antd';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import PageNotFound from './components/PageNotFound';
import { Route, Routes } from 'react-router-dom';
import RecruiterPageLayout from './components/Views/RecruiterViews/PageLayout';
import CandidatePageLayout from './components/Views/CandidateViews/PageLayout';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/dashboard' element={<RecruiterPageLayout />} />
				<Route path='/candidate' element={<CandidatePageLayout />} />
				<Route path='*' element={<PageNotFound />} />
			</Routes>
			<FloatButton.BackTop />
		</>
	);
}

export default App;
