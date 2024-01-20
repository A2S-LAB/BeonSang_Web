import { Link } from 'react-router-dom';
import classes from './css/Header.module.css';

export const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        <Link to='/'>범상 스프커리</Link>
      </div>

      <nav>
        <Link to='/menu'>범상 이야기</Link>
        <Link to='/recruit'>메뉴</Link>
        <Link to='/contact'>채용</Link>
      </nav>
    </header>
  );
};
