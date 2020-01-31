
import  UserActionTypes  from './user.types';

const INITAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (state = INITAL_STATE, action) => { //it takes all the actions
    switch(action.type){
        case UserActionTypes.SIGN_IN_SUCCESS: //if the action match the one the we are looking for in case "SET_CURRENT_USER"
            return{
                ...state,
                currentUser: action.payload, //to update the update flexible property.
                error: null
            };
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            };
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:

        return{
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
};

export default userReducer;

// const INITIAL_STATE = {
//   currentUser: null
// };

// const userReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case UserActionTypes.SET_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: action.payload
//       };
//     default:
//       return state;
//   }
// };

// export default userReducer;