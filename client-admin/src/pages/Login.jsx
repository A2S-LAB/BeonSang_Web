import classes from './css/Login.module.css';
import Logo from '../assets/Logo.png';

export const Login = () => {
  return (
    <main className={classes.main}>
      <img src={Logo} alt='범상 로고' />

      <h1>범상</h1>

      <form action='#' method='post' className={classes.form}>
        <div>
          <label htmlFor='email'>E-Mail</label>
          <input type='email' id='email' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' />
        </div>
        <button type='submit'>로그인</button>
      </form>
    </main>
  );
};
