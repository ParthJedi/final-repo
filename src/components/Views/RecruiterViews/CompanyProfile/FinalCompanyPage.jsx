import React, { useEffect, useState } from 'react';
import { Row, Col, Divider } from 'antd';
import API from '../../../../utils/API/api';

export default function FinalCompanyPage({ token }) {
	const [companyData, setComapnyData] = useState({});

	function getComanyProfile() {
		API.getCompanyProfile(token)
			.then((res) => {
				if (res.status === 200 && Object.keys(res.data)) {
					setComapnyData(res.data);
				}
			})
			.catch((err) => {
				console.log('e', err);
			});
	}

	useEffect(() => {
		getComanyProfile();
	}, []);

	return (
		<>
			<div className='contentBox'>
				<h1>Company Information:</h1>
				<Row span={24}>
					<Col className='profileLabel' span={8}>
						Company Name:
					</Col>
					<Col className='profileValue' span={16}>
						{companyData.companyname
							? companyData.companyname
							: 'Test blank value'}
					</Col>
					<Col className='profileLabel' span={8}>
						Company Size:
					</Col>
					<Col className='profileValue' span={16}>
						{companyData.companysize
							? companyData.companysize
							: 'Test blank value'}
					</Col>
					<Col className='profileLabel' span={8}>
						Industry:
					</Col>
					<Col className='profileValue' span={16}>
						{companyData.industry ? companyData.industry : 'Test blank value'}
					</Col>
				</Row>
				<Divider />
				<h1>Overview:</h1>
				<Row span={24}>
					<Col className='profileLabel' span={8}>
						Overview:
					</Col>
					<Col className='profileValue' span={16}>
						{companyData.overview ? companyData.overview : 'Test blank value'}
					</Col>
					<Col className='profileLabel' span={8}>
						Values:
					</Col>
					<Col className='profileValue' span={16}>
						{companyData.values ? companyData.values : 'Test blank value'}
					</Col>
					<Col className='profileLabel' span={8}>
						Benefits:
					</Col>
					<Col className='profileValue' span={16}>
						{companyData.benefits ? companyData.benefits : 'Test blank value'}
					</Col>
				</Row>
				<Divider />
				<Divider />
				<h1>Social Links:</h1>
				<Row span={24}>
					<Col className='profileLabel' span={8}>
						Website:
					</Col>
					<Col className='profileValue' span={16}>
						{companyData.website ? companyData.website : 'Test blank value'}
					</Col>
					<Col className='profileLabel' span={8}>
						Linkedin:
					</Col>
					<Col className='profileValue' span={16}>
						{companyData.linkedin ? companyData.linkedin : 'Test blank value'}
					</Col>
					<Col className='profileLabel' span={8}>
						Facebook:
					</Col>
					<Col className='profileValue' span={16}>
						{companyData.facebook ? companyData.facebook : 'Test blank value'}
					</Col>
					<Col className='profileLabel' span={8}>
						Crunchbase:
					</Col>
					<Col className='profileValue' span={16}>
						{companyData.crunchbase
							? companyData.crunchbase
							: 'Test blank value'}
					</Col>
					<Col className='profileLabel' span={8}>
						Glassdoor:
					</Col>
					<Col className='profileValue' span={16}>
						{companyData.glassdoor ? companyData.glassdoor : 'Test blank value'}
					</Col>
				</Row>
			</div>
		</>
	);
}
