import css from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'users'}>USERS</NavLink>
            <NavLink to={'comments'}>COMMENTS</NavLink>
            <NavLink to={'cars'}>CARS</NavLink>
        </div>
    );
};

export {
    Header
};