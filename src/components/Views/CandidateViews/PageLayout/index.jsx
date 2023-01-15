import React, { useState } from "react";
import "./style.css";
import HeaderContent from "./Header/HeaderContent";
import { Layout } from "antd";
import EditProfile from "../EditProfile";
import JobOpportunities from "../JobOpportunities";

import SidebarContent from "./Sidebar";

const { Header, Sider, Content } = Layout;

function PageLayout() {
	const [render, updateRender] = useState("1");

	const components = {
		1: <JobOpportunities updateRender={updateRender} />,
		2: <EditProfile updateRender={updateRender} />,
	};

	return (
		<>
			<Layout>
				<Sider collapsible={false}>
					<SidebarContent updateRender={updateRender} />
				</Sider>
				<Layout>
					<Header style={{ backgroundColor: "white" }}>
						<HeaderContent />
					</Header>
					<Content>{components[render]}</Content>
				</Layout>
			</Layout>
		</>
	);
}

export default PageLayout;
