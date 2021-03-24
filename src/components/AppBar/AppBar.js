import React from 'react';
import { connect } from 'react-redux';
import styles from './AppBar.module.css';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav'
import { authSelectors } from '../../redux/auth';
import PageHeading from '../../components/PageHeading';
import stylesPageHeading from "../../components/PageHeading/PageHeading.module.css";
import { CSSTransition } from "react-transition-group";

const AppBar = ({ isAuthenticated }) => (
  <div>
    < CSSTransition classNames={stylesPageHeading}  in={true} appear  timeout={500} unmountOnExit>
          <PageHeading text="Phonebook" />
    </CSSTransition>
  <header styles={styles.header}>
   
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
  
    </div>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps,null)(AppBar);
