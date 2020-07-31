import { 
	OPEN_FEEDBACK,
	CLOSE_FEEDBACK
} from '../actionTypes.js';

const initialStateFeedback = {
	open: false,
	message: ''
}

export const feedback = (state=initialStateFeedback, action={}) => {
    switch(action.type) {
         case OPEN_FEEDBACK:
            return Object.assign({}, state, { open: true, message: action.payload });
		 case CLOSE_FEEDBACK:
            return Object.assign({}, state, { open: false, message: '' });	
        default:
            return state;
    }
}

// const initialStateRobots = {
//     isPending: false,
//     robots: [],
//     error: ''
// }

// export const requestRobots = (state=initialStateRobots, action={}) => {
//     switch(action.type) {
//         case REQUEST_ROBOT_PENDING:
//             return Object.assign({}, state, { isPending: true})
//         case REQUEST_ROBOT_SUCCESS:
//             return Object.assign({}, state, { robots: action.payload, isPending: false })
//         case REQUEST_ROBOT_FAILED: 
//             return Object.assign({}, state, { error: action.payload, isPending: false })
//         default:
//             return state;            
//     }
// }