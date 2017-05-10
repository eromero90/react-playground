import React, { PropTypes } from 'react';
import { UserComponent } from './user';
import { CommentsComponent } from './comment';

import '../public/css/styles.scss';

const Root = () => (
	<main>
		Hello React
		<UserComponent />
		<CommentsComponent />
	</main>
);

export default Root;