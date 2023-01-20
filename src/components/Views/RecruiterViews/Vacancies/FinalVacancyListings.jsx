import React, { useEffect, useState } from 'react';
import { Row, Col, Divider } from 'antd';
import API from '../../../../utils/API/api';

function FinalVacancyListings({ token }) {
	const [vacancyData, setVacancyData] = useState({});

	function getComanyProfile() {
		API.getVacancyInfo(token)
			.then((res) => {
				if (res.status === 200 && Object.keys(res.data)) {
					setVacancyData(res.data);
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
						{vacancyData.companyname
							? vacancyData.companyname
							: 'Test blank value'}
					</Col>
					<Col className='profileLabel' span={8}>
						Company Size:
					</Col>
					<Col className='profileValue' span={16}>
						{vacancyData.companysize
							? vacancyData.companysize
							: 'Test blank value'}
					</Col>
					<Col className='profileLabel' span={8}>
						Industry:
					</Col>
					<Col className='profileValue' span={16}>
						{vacancyData.industry ? vacancyData.industry : 'Test blank value'}
					</Col>
				</Row>
				<Divider />
				<h1>Overview:</h1>
				<Row span={24}>
					<Col className='profileLabel' span={8}>
						Overview:
					</Col>
					<Col className='profileValue' span={16}>
						{vacancyData.overview ? vacancyData.overview : 'Test blank value'}
					</Col>
					<Col className='profileLabel' span={8}>
						Values:
					</Col>
					<Col className='profileValue' span={16}>
						{vacancyData.values ? vacancyData.values : 'Test blank value'}
					</Col>
					<Col className='profileLabel' span={8}>
						Benefits:
					</Col>
					<Col className='profileValue' span={16}>
						{vacancyData.benefits ? vacancyData.benefits : 'Test blank value'}
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
						{vacancyData.website ? vacancyData.website : 'Test blank value'}
					</Col>
					<Col className='profileLabel' span={8}>
						Linkedin:
					</Col>
					<Col className='profileValue' span={16}>
						{vacancyData.linkedin ? vacancyData.linkedin : 'Test blank value'}
					</Col>
					<Col className='profileLabel' span={8}>
						Facebook:
					</Col>
					<Col className='profileValue' span={16}>
						{vacancyData.facebook ? vacancyData.facebook : 'Test blank value'}
					</Col>
					<Col className='profileLabel' span={8}>
						Crunchbase:
					</Col>
					<Col className='profileValue' span={16}>
						{vacancyData.crunchbase
							? vacancyData.crunchbase
							: 'Test blank value'}
					</Col>
					<Col className='profileLabel' span={8}>
						Glassdoor:
					</Col>
					<Col className='profileValue' span={16}>
						{vacancyData.glassdoor ? vacancyData.glassdoor : 'Test blank value'}
					</Col>
				</Row>
			</div>
		</>
	);
}

export default FinalVacancyListings;
