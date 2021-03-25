import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css';


const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink
      to="/" exact
      className={styles.Link}
      activeClassName={styles.ActiveLink}>
      
      Главная
    </NavLink>

    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className={styles.Link}
        activeClassName={styles.ActiveLink}>
        Заметки
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
