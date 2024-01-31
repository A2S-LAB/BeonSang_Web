import classes from './css/BrandMenu.module.css';

export const BrandMenu = ({ scrollY }) => {
  return (
    <>
      {scrollY >= 0 && (
        <section className={classes['box-text']}>
          <p>
            <strong>시그니처 스프카레. </strong>
            홈런볼 스프커리. 메가 닭고기 스프커리. 점보 스프커리. 범상 우동.
          </p>

          <p>
            <strong>스프카레. </strong>야채 스프커리. 특 야채 스프커리. 소세지
            베이컨 스프커리. 닭고기 스프커리. 닭고기야채 스프 커리. 우삼겹
            스프커리. 우삼겹야채 스프커리
          </p>
          <p>
            <strong>퓨전 호랑이.</strong> 백계. 카레필라프. 빨계.
            크림카레파스타. 크림카레리조또.
          </p>
          <p>
            <strong>아기 호랑이.</strong> 호랭이 볶음밥. 호돌이 돈까스.
          </p>
          <p>
            <strong>곁들임 후식.</strong> 카레치킨. 멘치카츠. 순살 대구 튀김.
            크림치즈곶감.
          </p>
        </section>
      )}
    </>
  );
};
