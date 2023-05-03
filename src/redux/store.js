import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices/user.slice";
import {commentReducer} from "./slices/comment.slice";

const rootReducer = combineReducers({
    users: userReducer,
    comments: commentReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};