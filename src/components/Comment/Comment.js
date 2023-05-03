import React from 'react';
import css from './Comment.module.css'

const Comment = ({comment}) => {
    const {id, postId, name, body} = comment;
    return (
        <div className={css.Comment}>
            <p>id: {id}</p>
            <p>username: {postId}</p>
            <p>name: {name}</p>
            <p>body: {body}</p>
        </div>
    );
};

export {
    Comment
};