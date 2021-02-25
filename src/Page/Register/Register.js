import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import s from './Register.module.css';
import { useDispatch } from 'react-redux';
import { registerAuth } from '../../redux/Auth/authOperation';

// const mapDispatchToProps = {
//   onRegister: registerAuth,
// };

const Register = () => {
  const dispftch = useDispatch();
  // static propTypes = {
  //   phonebookValue: PropTypes.func,
  // };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // state = {
  //   name: '',
  //   email: '',
  //   password: '',
  // };

  const nameFunc = e => setName(e.target.value);
  const emailFunc = e => setEmail(e.target.value);
  const passwordFunc = e => setPassword(e.target.value);

  const btnClick = e => {
    e.preventDefault();
    // const { name, email, password } = this.state;
    // console.log(name, email, password);
    dispftch(registerAuth({ name, email, password }));
    setName('');
    setPassword('');
    setEmail('');
    // this.setState({ name: '', password: '', email: '' });
  };

  // render() {
  // const { name, email, password } = this.state;
  return (
    <>
      <h1 className={s.h1}>Регистрация</h1>
      <form className={s.form} onSubmit={btnClick}>
        <label className={s.label}>
          Логин
          <input
            className={s.input}
            type="text"
            value={name}
            placeholder="Введите логин"
            onChange={nameFunc}
          />
        </label>

        <label className={s.label}>
          Почта
          <input
            className={s.input}
            type="text"
            value={email}
            placeholder="Введите почту"
            onChange={emailFunc}
          />
        </label>

        <label className={s.label}>
          Пароль
          <input
            className={s.input}
            type="password"
            value={password}
            placeholder="Введите пароль"
            onChange={passwordFunc}
          />
        </label>
        <br />
        <button type="submit" className={s.button}>
          Зарегистрироваться
        </button>
      </form>
    </>
  );
  // }
};

export default Register;
