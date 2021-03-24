import React, { Component, Suspense, lazy } from 'react';
import './App.css';
import { Switch} from 'react-router-dom';
import Container from '../Container';
import AppBar from '../../components/AppBar';
import { authOperations } from '../../redux/auth';
import { connect } from 'react-redux';
import { ToastContainer} from 'react-toastify';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';

const HomeView = lazy(() =>
  import('../../views/HomeView' /* webpackChunkName: "home-view" */),
);
const RegisterView = lazy(() =>
  import('../../views/RegisterView' /* webpackChunkName: "home-view" */),
);
const LoginView = lazy(() =>
  import('../../views/LoginView' /* webpackChunkName: "home-view" */),
);
const ContactsView = lazy(() =>
  import('../../views/ContactsView' /* webpackChunkName: "home-view" */),
);

class App extends Component {

  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    
    return (
     
        <Container>
          <AppBar />
           <Suspense fallback={<p>Загружаем...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            
          <PublicRoute path="/register" restricted
            redirectTo="/contacts"
            component={RegisterView} />
          
            <PublicRoute path="/login" restricted
            redirectTo="/contacts"
            component={LoginView} />
          
            <PrivateRoute path="/contacts"
            redirectTo="/login"
            component={ContactsView} />
          
        </Switch>

        </Suspense>
      <ToastContainer />
      </Container>
      );
  }
};

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
}

export default connect(null,mapDispatchToProps)(App);
