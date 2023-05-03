import React, {useEffect} from 'react';
import {Comment} from "../Comment/Comment";
import {useDispatch, useSelector} from "react-redux";
import {commentService} from "../../services/";
import {commentActions} from "../../redux";
import css from './Comments.module.css'

const Comments = () => {
    const dispatch = useDispatch();
    const { comments } = useSelector(state => state.comments);
    useEffect(() => {
        const fetchComments = async () => {
            const response = await commentService.getAll();
            const data = response.data;
            dispatch(commentActions.setComments(data));
        }
        fetchComments();
    }, [dispatch]);

    return (
        <div className={css.commentsBlock}>
            {comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};


export {
    Comments
};