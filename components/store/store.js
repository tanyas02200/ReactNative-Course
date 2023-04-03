import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from './reducers/authReducer'

export const configureReduxStore = () => {
    const reducer = {
        auth: authReducer
    }
    const store = configureStore(
        {reducer}
    );
    return store;
}