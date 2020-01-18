
import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,            //same as the user reducer expectation
    payload: user
});


// export const setCurrentUser = user => ({
//   type: UserActionTypes.SET_CURRENT_USER,
//   payload: user
// });