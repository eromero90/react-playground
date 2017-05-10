import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/posts?userId=1';

export function fetchComments() {
	return function(dispatch) {
		dispatch({type: 'FETCH_COMENTS_START', payload: true});

		axios.get(URL)
			.then( response => {
				dispatch({type: 'RECEIVE_COMMENTS', payload: response.data})
			})
			.catch( err => {
				dispatch({type: 'FETCH_COMMENTS_ERROR', payload: error})
			});
	}
}
