import React from 'react';
import { Col, Row } from 'antd';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

function LandingPage() {
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

export default LandingPage;
