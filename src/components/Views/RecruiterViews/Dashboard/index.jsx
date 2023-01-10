import React from 'react';
import './style.css';
import HeaderContent from './Header/HeaderContent';
import { Layout } from 'antd';
import DashboardContent from './Content';
import SidebarContent from './Sidebar';
const { Header, Sider, Content } = Layout;

function Dashboard() {
	return (
		<>
			<Layout>
				<Sider collapsible={false}>
					<SidebarContent />
				</Sider>
				<Layout>
					<Header style={{ backgroundColor: 'white' }}>
						<HeaderContent />
					</Header>
					<Content>
						<DashboardContent />
					</Content>
				</Layout>
			</Layout>
		</>
	);
}

export default Dashboard;
