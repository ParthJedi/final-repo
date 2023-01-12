import React from 'react';
import { Table, Card } from 'antd';

const columns = [
	{
		title: '#',
		dataIndex: 'id',
		key: 'id'
	},
	{
		title: 'Job Title / Role',
		dataIndex: 'jobTitle',
		key: 'jobTitle'
	},
	{
		title: 'Vacancies',
		dataIndex: 'vacancies',
		key: 'vacancies'
	},
	{
		title: 'Experience',
		dataIndex: 'experience',
		key: 'experience'
	}
];

const data = [
	{
		key: 1,
		id: 1,
		jobTitle: 'Full Stack Developer',
		vacancies: 10,
		experience: '5 years'
	},
	{
		key: 2,
		id: 2,
		jobTitle: 'Full Stack Developer',
		vacancies: 10,
		experience: '10 years'
	},
	{
		key: 3,
		id: 3,
		jobTitle: 'Full Stack Developer',
		vacancies: 10,
		experience: '15 years'
	},
	{
		key: 4,
		id: 4,
		jobTitle: 'Full Stack Developer',
		vacancies: 10,
		experience: '20 years'
	}
];

function VacancyTable() {
	return (
		<>
			<Card
				title='Pending Vacancies'
				style={{
					width: '95%'
				}}
			>
				<Table
					columns={columns}
					dataSource={data}
					pagination={false}
					// pagination={{
					// 	position: [top, bottom]
					// }}
				/>
			</Card>
		</>
	);
}

export default VacancyTable;
