import classes from './css/MiddleLogo.module.css';
import logo from '../../assets/logo.png';

export const MiddleLogo = () => {
  return (
    <section className={classes['logo-box']}>
      <img src={logo} alt='logo' />
    </section>
  );
};
