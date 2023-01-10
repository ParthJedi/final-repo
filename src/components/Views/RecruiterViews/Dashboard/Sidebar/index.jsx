import React from 'react';
import { Menu } from 'antd';
import {
	MenuFoldOutlined,
	UploadOutlined,
	UserSwitchOutlined,
	UsergroupAddOutlined
} from '@ant-design/icons';
import PraktikaLogo from '../../../../Logo/index';

function SidebarContent() {
	return (
		<>
			<PraktikaLogo />
			<span style={{ marginLeft: '2em', fontWeight: 'bold' }}>HR</span>
			<Menu
				mode='inline'
				defaultSelectedKeys={['1']}
				items={[
					{
						key: '1',
						icon: <MenuFoldOutlined />,
						label: 'Dashboard'
					},
					{
						key: '2',
						icon: <UserSwitchOutlined />,
						label: 'Company Profile'
					},
					{
						key: '3',
						icon: <UploadOutlined />,
						label: 'Vacancies'
					},
					{
						key: '4',
						icon: <UsergroupAddOutlined />,
						label: 'Candidates'
					}
				]}
			/>
		</>
	);
}

export default SidebarContent;
