import { SIGNIN, SIGNUP } from "../actions/actionType";

const initialState = {
    username: "",
    password: "",
    name: ""
};

const updateSignInInfo = (state, action) => {
    //console.log(state);
    return {
        ...state,
        username: action.payload.username,
        password: action.payload.password
    };
   
}

const updateSignUpInfo = (state, action) => {
    return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        name: action.payload.name
    }
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN: 
            return updateSignInInfo(state, action);
        case SIGNUP: 
            return updateSignUpInfo(state, action);
        default: 
            return state;
    }
}