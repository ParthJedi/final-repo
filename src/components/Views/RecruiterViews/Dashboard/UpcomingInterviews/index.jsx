import React from 'react';
import { Card } from 'antd';

function UpcomingInterviews() {
	return (
		<>
			<Card
				title='Upcoming Interviews'
				style={{
					width: 250
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
