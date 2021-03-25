import React, { Component } from 'react';
import style from './RegisterView.module.css';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
//import s from '../../components/Button/Button.module.css';

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
            <div >
                <h1 className={style.title}>Страница регистрации</h1>
                <div >
                <form className={style.form}
                    onSubmit={this.handleSubmit}
                    
                        autoComplete='off'>
                        <div >
                    <label  className={style.label}>
                        Имя  
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.handleChange} />
                    </label>
                        </div>
                        <div >
                    <label className={style.label}>
                        Почта  
                        <input 
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange} />
                            </label>
                        </div>
                        <div >
                    <label className={style.label}>
                        Пароль  
                        <input 
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange} />
                            </label>
                        </div>
                        <div >
                    <button className={style.Button} type="submit" >Зарегестрироваться</button>
                    </div>
                    </form>
                   </div>
            </div>
        );
    };

};

const mapDispatchToProps = {
    onRegister: authOperations.register,
};

export default connect(null,mapDispatchToProps)(RegisterView);
