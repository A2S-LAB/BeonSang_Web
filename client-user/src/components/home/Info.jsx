import classes from './css/Info.module.css';
import A2S from '../../assets/A2S.png';
import { OpacityOff } from '../motion/ OpacityOff';

export const Info = () => {
  return (
    <main className={classes.main}>
      <section>
        <OpacityOff duration={1}>
          <img className={classes.section__logo} src={A2S} alt='A2S LOGO' />
        </OpacityOff>
      </section>
      <section className={classes['box-text']}>
        <OpacityOff duration={1} delay={1}>
          <p>
            GROWERS. CHOI DINING. KITSCH KITSCH DINING. MATGGAL POCHA.SENDWAY.
            MOTIVE.
          </p>
        </OpacityOff>

        <OpacityOff duration={1} delay={2}>
          <p>DONGBAEK KATSU. HAPPY CHEESE SMILE. ASEUL CHEONGDAM. RYUSENSO.</p>
        </OpacityOff>

        <OpacityOff duration={1} delay={3}>
          <p className='punchline'>BONJOURDOG BAKESHOP. HANOKU. ONHWA DINING</p>
        </OpacityOff>
      </section>
    </main>
  );
};
