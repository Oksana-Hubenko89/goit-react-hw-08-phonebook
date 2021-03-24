import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css';


const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink
      to="/" exact
      className={styles.link}
      activeClassName={styles.activeLink}>
      Главная
    </NavLink>
    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        cclassName={styles.link}
        activeClassName={styles.activeLink}
      >
        Заметки
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
