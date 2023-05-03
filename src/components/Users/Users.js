import React, {useEffect} from 'react';
import {User} from "../User/User";
import {useDispatch, useSelector} from "react-redux";
import {userService} from "../../services";
import {addUser, userActions} from "../../redux";
import css from './Users.module.css'

const Users = () => {
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.users);
    const submit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const username = e.target.userName.value;
        const user = {id: new Date().getTime(), name, username};
        dispatch(addUser({user}));
    }

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await userService.getAll();
            const data = response.data;
            dispatch(userActions.setUsers(data));
        }
        fetchUsers();
    }, [dispatch]);

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" placeholder={'name'} name={'name'}/>
                <input type="text" placeholder={'userName'} name={'userName'}/>
                <button>SAVE</button>
            </form>
            <div className={css.usersBlock}>
                {
                    users && users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
        </div>
    );
};


export {
    Users
};