import { Link } from 'react-router-dom';
import classes from './css/Header.module.css';

export const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        <Link to='/'>범상 스프커리</Link>
      </div>

      <nav>
        <Link to='/menu'>메뉴</Link>
        <Link to='/contact'>채용</Link>
        <Link to='https://map.naver.com/p/search/%EB%B2%94%EC%83%81/place/1111530355?searchType=place&lng=126.6427315&lat=37.3834875&placePath=/booking?bookingRedirectUrl=https://pcmap.place.naver.com/restaurant/1111530355/booking?theme=place&entry=pll&c=15.00,0,0,0,dh'>
          예약
        </Link>
      </nav>
    </header>
  );
};
