import { SIGNIN,SIGNUP } from "./actionType";

export const signIn =(signinInfo) => {
    console.log(signinInfo);
    return{
        type:SIGNIN,
        payload: signinInfo
    };
};

export const signUp = (signupInfo) => {
    //console.log(signupInfo);
    return{
        type:SIGNUP,
        payload: signupInfo
    };
};