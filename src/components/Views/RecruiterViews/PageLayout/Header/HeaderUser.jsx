import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

function HeaderUser() {
	return (
		<div>
			<Avatar size={32} icon={<UserOutlined />} />
		</div>
	);
}

export default HeaderUser;
