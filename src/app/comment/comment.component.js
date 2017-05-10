import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from './comment.actions';

@connect( store => {
	return {
		comments: store.comments.comments
	};
})
export class CommentsComponent extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchComments());
	}

	render() {
		console.log("render CommentsComponent");
		const { comments } = this.props;
		if(!!comments.length) {
			return <h1>{ comments[0].title }</h1>
		} else {
			return <span>Loading comments...</span>
		}
		
	}
}
