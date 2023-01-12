import React from 'react';
import { Row, Col, Card, FloatButton } from 'antd';
import VacancyTable from './VacancyTable';
import UpcomingInterviews from './UpcomingInterviews';

function DashboardContent() {
	return (
		<>
			<h1>Dashboard</h1>
			<Row>
				<Col span={8}>
					<Card
						title='Interviews today'
						// extra={<a href='#'>More</a>}
						style={{
							width: 250
						}}
					>
						<p>Card content</p>
						<p>Card content</p>
						<p>Card content</p>
					</Card>
				</Col>
				<Col span={8}>
					<Card
						title='Pending interview'
						// extra={<a href='#'>More</a>}
						style={{
							width: 250
						}}
					>
						<p>Card content</p>
						<p>Card content</p>
						<p>Card content</p>
					</Card>
				</Col>
				<Col span={8}>
					<Card
						title='Available Vacancy'
						// extra={<a href='#'>More</a>}
						style={{
							width: 250
						}}
					>
						<p>Card content</p>
						<p>Card content</p>
						<p>Card content</p>
					</Card>
				</Col>
			</Row>
			<br />
			<Row>
				<Col span={12}>
					<VacancyTable />
				</Col>
				<Col span={12}>
					<UpcomingInterviews />
				</Col>
			</Row>
			<FloatButton.BackTop />
		</>
	);
}

export default DashboardContent;
