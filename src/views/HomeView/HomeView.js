import React from 'react';
import styles from './HomeView.module.css';


const HomeView = () => (
  <div className={styles.Container}>
    <h1 className={styles.Title}>
      Приветствую!{' '}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </h1>          
    <p >Для отображения персональных контактов введите логин та пароль. Ещё нет аккаунта? Зарегистрируйтесь</p>
  </div>
);

export default HomeView;
