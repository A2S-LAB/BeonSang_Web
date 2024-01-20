import classes from './css/Info.module.css';
import A2S from '../../assets/A2S.png';

export const Info = () => {
  return (
    <main className={classes.main}>
      <section>
        <img className={classes.section__logo} src={A2S} alt='A2S LOGO' />
      </section>
      <section className={classes['box-text']}>
        <p>
          GROWERS. CHOI DINING. KITSCH KITSCH DINING. MATGGAL POCHA.SENDWAY.
          MOTIVE.
        </p>

        <p>DONGBAEK KATSU. HAPPY CHEESE SMILE. ASEUL CHEONGDAM. RYUSENSO.</p>
        <p>BONJOURDOG BAKESHOP. HANOKU. ONHWA DINING</p>
      </section>
    </main>
  );
};
