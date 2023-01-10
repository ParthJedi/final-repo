import React from 'react';
import { Outlet } from 'react-router-dom';

function PageLayout() {
	return (
		<div>
			<Outlet context={{ hello: 'world' }} />
		</div>
	);
}

export default PageLayout;
