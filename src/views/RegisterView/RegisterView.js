import React, { Component } from 'react';
import styles from './RegisterView.module.css';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import s from '../../components/Button/Button.module.css';

class RegisterView extends Component {

    state = {
        name: '',
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onRegister(this.state);
        this.setState({ name: '', email: '', password: '' })
    };


render() {

    const { name, email, password } = this.state;

        return (
            <div>
                <h1 className={styles.Title}>Страница регистрации</h1>
                <form
                    onSubmit={this.handleSubmit}
                    className={styles.Form}
                    autoComplete='off'>
                    
                    <label className={styles.Label}>
                        Имя  
                        <input className={styles.Input}
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange} />
                    </label>

                    <label className={styles.Label}>
                        Почта  
                        <input className={styles.Input}
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange} />
                    </label>
                    <label className={styles.Label}>
                        Пароль  
                        <input className={styles.Input}
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange} />
                    </label>
                    <button className={s.Button} type="submit" >Зарегестрироваться</button>
                    </form>
            </div>
        );
    };

};

const mapDispatchToProps = {
    onRegister: authOperations.register,
};

export default connect(null,mapDispatchToProps)(RegisterView);
