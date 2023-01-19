import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import API from '../../../../utils/API/api';

const columns = [
	{
		title: '#',
		dataIndex: 'id',
		key: 'id'
	},
	{
		title: 'Name',
		dataIndex: 'jobTitle',
		key: 'jobTitle'
	},
	{
		title: 'Company Name',
		dataIndex: 'companyName',
		key: 'companyName'
	},
	{
		title: 'Experience',
		dataIndex: 'experience',
		key: 'experience'
	},
	{
		title: 'Title/Role',
		dataIndex: 'role',
		key: 'role'
	}
];

function Candidates() {
	const [candiadatesData, setCandidatesData] = useState(null);

	function getCandidateList(token) {
		API.getCandidateList(token)
			.then((res) => {
				console.log('candidate list data: ', res);
				// setCandidatesData()
			})
			.catch((err) => {
				console.log('e', err);
			});
	}

	useEffect(() => {
		getCandidateList();
	}, []);

	return (
		<>
			<h1>List of Candidates</h1>
			<Table
				columns={columns}
				dataSource={candiadatesData}
				pagination={false}
				// pagination={{
				// 	position: [top, bottom]
				// }}
			/>
		</>
	);
}

export default Candidates;
