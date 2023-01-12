import React from 'react';
import { Badge } from 'antd';
import BellIcon from '../../../../../assets/images/logo/bell.png';

function HeaderNotifications() {
	return (
		<div>
			<Badge count={3} style={{ marginTop: '2.5em' }}>
				<img
					src={BellIcon}
					style={{ width: '2em', marginTop: '2em' }}
					alt='notification bell'
				/>
			</Badge>
		</div>
	);
}

export default HeaderNotifications;
