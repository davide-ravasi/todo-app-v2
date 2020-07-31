import { 
	ADD_USER,
	REMOVE_USER,
	OPEN_FEEDBACK,
	CLOSE_FEEDBACK
} from './actionTypes.js';

export const setOpenFeedback = (msg) => ({
    type: OPEN_FEEDBACK,
    payload: msg    
})

export const setCloseFeedback = () => ({
    type: CLOSE_FEEDBACK,
    payload: ''    
})

export const setAddUser = (user) => ({
    type: ADD_USER,
    payload: user    
})

export const setRemoveUser = () => ({
    type: REMOVE_USER,
    payload: ''    
})
/* when it returns a function and not a state it pass through 
   the thunk middleware that manage asyncs calls */
//export const requestRobots = () => (dispatch) => {
//     dispatch({type: REQUEST_ROBOT_PENDING});
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response=> response.json())
//       .then(data => dispatch({type: REQUEST_ROBOT_SUCCESS, payload: data}))
//       .catch(error => dispatch({type: REQUEST_ROBOT_FAILED, payload: error}));
// }