import React from 'react';
import { Col, Row } from 'antd';
import HeaderSearch from './HeaderSearch';
import HeaderNotifications from './HeaderNotifications';
import HeaderUser from './HeaderUser';

function HeaderContent() {
	const headerChildren = () => {
		return (
			<Row className='' align='middle' justify='space-between'>
				<Col></Col>

				<Col>
					<Row align='middle'>
						<div style={{ marginRight: '10px' }}>
							<HeaderSearch />
						</div>
						<div className='header-icon'>
							<HeaderNotifications />
						</div>
						<div className='header-icon'>
							<HeaderUser />
						</div>
					</Row>
				</Col>
			</Row>
		);
	};

	return (
		<>
			<Row justify='center'>
				<Col span={24}>{headerChildren()}</Col>
			</Row>
		</>
	);
}

export default HeaderContent;
