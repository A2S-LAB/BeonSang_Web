import { Link } from 'react-router-dom';
import classes from './css/Header.module.css';

export const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        <Link to='/'>A2S</Link>
      </div>

      <nav>
        <Link to='/menu'>MENU</Link>
        <Link to='/recruit'>RECRUIT</Link>
        <Link to='/contact'>CONTACT</Link>
      </nav>
    </header>
  );
};
