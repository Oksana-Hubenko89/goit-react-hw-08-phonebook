import React from 'react';
import styles from './UserMenu.module.css';
import { connect } from 'react-redux';
import {authSelectors, authOperations} from '../../redux/auth'
import defaultAvatar from './default-avatar.png';
import s from '../../components/Button/Button.module.css'

const UserMenu = ({ avatar, name, onLogout }) => {
    return (
        <div className={styles.Container}>
            <img src={avatar} alt="" width="32" styles={styles.Avatar} />
            <span className={styles.Name}>Welcome, {name}</span>
            <button className={s.Button}type="button" onClick={onLogout}> Logout</button>
        </div>
    );
};
const mapStateProps = state => ({
    name: authSelectors.getUserName(state),
    avatar:defaultAvatar
});
const mapDispatchToProps = {
    onLogout:authOperations.logOut
};

export default connect(mapStateProps,mapDispatchToProps)(UserMenu);