import classes from './css/BrandPromise.module.css';
import { BrandPromiseText } from './BrandPromiseText';

export const BrandPromise = ({ scrollY }) => {
  console.log(scrollY);
  return (
    <section className={classes['brand-promise']}>
      {scrollY >= 800 && (
        <div className={classes.top}>
          <div>
            <h3>BRAND PROMISE</h3>
            <p>꾸준함이 만드는 우리 브랜드의 ESG 경영 철학</p>
          </div>
          <div>
            <p>
              주식회사 범류는 그 영향력이 작을지라도 우리가 할 수 있는 가능한
              모든 영역의 가치실현을 꿈꾸는 사회적 기업 입니다.
            </p>
          </div>
        </div>
      )}

      {scrollY >= 900 && (
        <div className={classes.bottom}>
          <BrandPromiseText />
          <div>
            <p>
              완벽하진 않지만 조금씩, 조금 더 <br />
              우리가 모두 바라는 FOOD & LIFESTYLE <br />
              브랜드로 한발씩 나아갑니다.
            </p>
          </div>
          <div>
            <p>
              2-3F, 132-17, ITAEWON-DONG, <br />
              YONGSAN-GU. SEOUL
            </p>
            <div className={classes['border-line']}></div>
            <p>
              범류: 뛰어나거나 색다르지 않은 보통 사람들의 부류 <br />
              그럼에도 누구보다 특별한 공간을 만들어내는 우리들
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
