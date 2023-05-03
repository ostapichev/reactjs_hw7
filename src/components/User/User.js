import React from 'react';
import css from './User.module.css'

const User = ({user}) => {
    const {id, name, username} = user;
    return (
        <div className={css.User}>
            <p>id: {id}</p>
            <p>username: {username}</p>
            <p>name: {name}</p>
        </div>
    );
};

export {
    User
};