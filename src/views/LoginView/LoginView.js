import React, { Component } from 'react';
import styles from './LoginView.module.css';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from '../../components/Button/Button.module.css'
import { authSelectors } from '../../redux/auth';

class LoginView extends Component {

    state = {
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };
    handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        
        if (email.trim() ===''){
            toast.error('Введите email ');
        return;
        }          
       if(password.trim() ===''  ){
           toast.error('Введите password');
        return;
         }
            
        this.props.onLogin(this.state);
        this.setState({ name: '', email: '', password: '' })
    };

render() {
    const { email, password } = this.state;
        return (
            <div>
                <h1 className={styles.Title}>Страница логина</h1>
                <form
                    onSubmit={this.handleSubmit}
                    className={styles.Form}
                    autoComplete='off'>
                    <label className={styles.Label}>
                        Почта <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange} />
                    </label>
                    <label className={styles.Label}>
                        Пароль <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}/>
                    </label>
                    <button className={s.Button} type="submit" >Войти</button>
                     {this.props.isloadingAuth && <p>Загружаем...</p>}
                    </form>
            </div>
        );
    };
};
const mapStateToProps = (state) => ({
    isLoadingAuth: authSelectors.getLoadingAuth(state),
});

const mapDispatchToProps = {
    onLogin:authOperations.logIn,
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginView);
