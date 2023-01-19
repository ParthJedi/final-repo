import './App.css';
import React, { useState } from 'react';
import { FloatButton } from 'antd';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import PageNotFound from './components/PageNotFound';
import { Route, Routes } from 'react-router-dom';
import RecruiterPageLayout from './components/Views/RecruiterViews/PageLayout';
import CandidatePageLayout from './components/Views/CandidateViews/PageLayout';

function App() {
	const [token, setToken] = useState(null);
	return (
		<>
			<Routes>
				<Route path='/' setToken={setToken} element={<LandingPage />} />
				<Route path='/login' setToken={setToken} element={<LoginPage />} />
				<Route
					path='/dashboard'
					token={token}
					element={<RecruiterPageLayout />}
				/>
				<Route
					path='/candidate'
					token={token}
					element={<CandidatePageLayout />}
				/>
				<Route path='*' element={<PageNotFound />} />
			</Routes>
			<FloatButton.BackTop />
		</>
	);
}

export default App;
