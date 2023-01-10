import './App.css';
import { Col, Row } from 'antd';
import React from 'react';
import LeftContent from './components/LandingPage/LeftContent';
import RightContent from './components/LandingPage/RightContent';

function App() {
	return (
		<Row>
			<Col span={12}>
				<LeftContent />
			</Col>
			<Col span={12}>
				<RightContent />
			</Col>
		</Row>
	);
}

export default App;
