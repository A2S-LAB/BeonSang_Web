import classes from './css/Home.module.css';

export const Home = () => {
  return (
    <main className={classes.main}>
      <h1>페이지 관리</h1>

      <div className={classes.card}>
        <div>
          <img src='' alt='' />
          <a href='/user/main'>메인</a>
        </div>
        <div>
          <img src='' alt='' />
          <a href='/user/menu'>메뉴</a>
        </div>
      </div>
    </main>
  );
};
