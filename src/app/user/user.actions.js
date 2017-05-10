import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/users/1';

export function fetchUser() {
	return function(dispatch) {
		dispatch({type: 'FETCH_USER_START', payload: true});

		axios.get(URL)
			.then( response => {
				dispatch({type: 'RECEIVE_USER', payload: response.data})
			})
			.catch( err => {
				dispatch({type: 'FETCH_USER_ERROR', payload: error})
			});
	}
}
