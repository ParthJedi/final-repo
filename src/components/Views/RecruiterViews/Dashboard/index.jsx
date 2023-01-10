import React from 'react';
import './style.css';
import {
	MenuFoldOutlined,
	UploadOutlined,
	UserSwitchOutlined,
	UsergroupAddOutlined
} from '@ant-design/icons';
import PraktikaLogo from '../../../Logo';
import HeaderContent from './HeaderContent';
import { Layout, Menu } from 'antd';
const { Header, Sider, Content } = Layout;

function Dashboard() {
	return (
		<>
			<Layout>
				<Sider collapsible={false}>
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
				</Sider>
				<Layout>
					<Header style={{ backgroundColor: 'white' }}>
						<HeaderContent />
					</Header>
					<Content>Dashboard</Content>
				</Layout>
			</Layout>
		</>
	);
}

export default Dashboard;
