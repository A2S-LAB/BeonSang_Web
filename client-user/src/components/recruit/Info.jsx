import classes from './css/Info.module.css';

export const Info = () => {
  return (
    <div className={classes['text-box']}>
      <div>
        <h1>채용</h1>
      </div>
      <div>
        <strong>"자신의 가능성을 펼칠 챌린저를 모집합니다"</strong>
      </div>

      <div>
        <p>
          범상에서는 꿈을 가진 챌린저들을 모아 성장에 최적화된 환경을 제공하여
        </p>
        구성원들이 빠르게 목표를 이룰 수 있도록 합니다.
        <p></p>
      </div>
    </div>
  );
};
