import React, { useEffect } from 'react';
import { Card } from 'antd';
import API from '../../../../../utils/API/api';

function UpcomingInterviews({ token }) {
	function getUpcomingInterviews(token) {
		API.getUpcomingInterviews(token)
			.then((res) => {
				console.log('vacancy data: ', res);
			})
			.catch((err) => {
				console.log('e', err);
			});
	}
	useEffect(() => {
		getUpcomingInterviews(token);
	}, []);
	return (
		<>
			<Card
				title='Upcoming Interviews'
				style={{
					width: '90%',
					marginLeft: '5%'
				}}
			>
				<p>Interview 1 content</p>
				<p>Interview 2 content</p>
				<p>Interview 3 content</p>
			</Card>
		</>
	);
}

export default UpcomingInterviews;
