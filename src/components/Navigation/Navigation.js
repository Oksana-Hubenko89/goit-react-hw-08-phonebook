import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <div>
    <NavLink
      to="/" exact
       className={styles.link}
       activeClassName={styles.activeLink}
      >
      Главная
    </NavLink>

    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}>
        Заметки
      </NavLink>
      )}
      </div>
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
