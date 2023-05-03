import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    users: []
}

const slice = createSlice( {
    name: 'userSlice',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        addUser: (state, action) => {
            const user = action.payload.user;
            state.users.push(user);
        }
    }
})

const {reducer: userReducer, actions} = slice;
const userActions = {
    ...actions
}
const {addUser} = slice.actions;

export {
    userActions,
    userReducer,
    addUser
};