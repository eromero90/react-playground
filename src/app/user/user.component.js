import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from './user.actions';

@connect( store => {
	return {
		user: store.user.user
	};
})
export class UserComponent extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchUser());
	}

	render() {
		console.log("render UserComponent");
		const { user } = this.props;
		return <h1>{ user.name }</h1>;
	}
}
