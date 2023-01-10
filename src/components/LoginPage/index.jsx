import React from 'react';
import { Col, Row } from 'antd';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
// import { useOutletContext } from 'react-router-dom';

function LoginPage() {
	// const obj = useOutletContext();
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

export default LoginPage;
