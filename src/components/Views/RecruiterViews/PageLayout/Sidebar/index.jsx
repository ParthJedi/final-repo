import React from 'react';
import { Menu } from 'antd';
import {
	MenuFoldOutlined,
	UploadOutlined,
	UserSwitchOutlined,
	UsergroupAddOutlined
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import PraktikaLogo from '../../../../Logo/index';

function SidebarContent() {
	const navigate = useNavigate();
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
						label: 'Dashboard',
						onClick: () => navigate('/dashboard')
					},
					{
						key: '2',
						icon: <UserSwitchOutlined />,
						label: 'Company Profile',
						onClick: () => navigate('/company-profile')
					},
					{
						key: '3',
						icon: <UploadOutlined />,
						label: 'Vacancies',
						onClick: () => navigate('/vacancies')
					},
					{
						key: '4',
						icon: <UsergroupAddOutlined />,
						label: 'Candidates',
						onClick: () => navigate('/candidates')
					}
				]}
			/>
		</>
	);
}

export default SidebarContent;
