import React from 'react';
import { Row, Col, Divider, Button } from 'antd';

function ViewProfile({updateRender}) {
	return (
		<Row className='profile'>
			<Col span={24}>
				<h2>Data Saved</h2>
				{/* <Button onClick={updateRender('2')}>Edit</Button> */}
			</Col>
		</Row>
	);
}

export default ViewProfile;
