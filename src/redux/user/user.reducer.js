
import { UserActionTypes } from './user.types';

const INITAL_STATE = {
    currentUser: null

}

const userReducer = (state = INITAL_STATE, action) => { //it takes all the actions
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER: //if the action match the one the we are looking for in case "SET_CURRENT_USER"
            return{
                ...state,
                currentUser: action.payload //to update the update flexible property.
            };
        
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