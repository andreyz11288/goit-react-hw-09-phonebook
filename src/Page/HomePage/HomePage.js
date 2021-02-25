import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAutheticated, getUserName } from '../../redux/Auth/authSelectors';
import img from '../../img/idea-s.jpg';
import img2 from '../../img/Five.jpg';
import s from './HomePage.module.css';

const HomePage = () => {
  const isLogin = useSelector(getIsAutheticated);
  const name = useSelector(getUserName);
  return (
    <div className={s.div}>
      <h1 className={s.h1}>Добропожаловать на сайт Phonebook</h1>
      {isLogin ? (
        <p className={s.p}>
          <span className={s.span1}>{name},</span> &nbsp; &nbsp;
          <span className={s.span2}>
            мы очень рады что вы с нами!!! <br /> Теперь можете перейти к &nbsp;
            <NavLink to="/contacts">Контактам</NavLink>
          </span>
        </p>
      ) : (
        <p>
          Пожалуйста &nbsp;
          <NavLink to="/login">авторизируйтесь</NavLink>
          &nbsp; или &nbsp;
          <NavLink to="/register"> зарегистрируйтесь </NavLink>.
        </p>
      )}
      {isLogin ? (
        <img className={s.image} src={img} alt="idea-s" />
      ) : (
        <img className={s.image} src={img2} height="500" alt="five" />
      )}
    </div>
  );
};

export default HomePage;
