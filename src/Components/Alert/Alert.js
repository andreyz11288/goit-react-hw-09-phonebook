import s from './Alert.module.css';

export default function Alert({ massage }) {
  return (
    <div className={s.div}>
      <h3 className={s.h1}>{massage}</h3>
    </div>
  );
}
