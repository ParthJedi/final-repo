import React, { useState } from 'react';
import './style.css';
import HeaderContent from './Header/HeaderContent';
import { Layout } from 'antd';
import DashboardContent from '../Dashboard';
import SidebarContent from './Sidebar';
import CompanyProfile from '../CompanyProfile';
import Vacancies from '../Vacancies';
import Candidates from '../Candidates';

const { Header, Sider, Content } = Layout;

function PageLayout() {
	const [render, updateRender] = useState('1');

	const components = {
		'1': <DashboardContent />,
		'2': <CompanyProfile />,
		'3': <Vacancies />,
		'4': <Candidates />
	};

	return (
		<>
			<Layout>
				<Sider collapsible={false}>
					<SidebarContent updateRender={updateRender} />
				</Sider>
				<Layout>
					<Header style={{ backgroundColor: 'white' }}>
						<HeaderContent />
					</Header>
					<Content>{components[render]}</Content>
				</Layout>
			</Layout>
		</>
	);
}

export default PageLayout;
