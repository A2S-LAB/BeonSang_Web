import { useEffect } from 'react';
import classes from './css/Description.module.css';

export const Description = ({ scrollY }) => {
  console.log(scrollY);
  return (
    <section className={classes['brand-promise']}>
      {scrollY >= 500 && (
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

      {scrollY >= 600 && (
        <div className={classes.bottom}>
          <div>
            <strong>1</strong>
            <p>
              버려지는 음식을 최소화하기 위해 <br /> 모든 반찬과 밥은 소량씩
              제공됩니다. <br /> 언제든, 며천이든 필요하신 만큼 제공해드리고{' '}
              <br />
              있사오니 부족하시면 말씀해주세요
            </p>
          </div>
          <div>
            <strong>2</strong>
            <p>
              매일 매일 준비된 양만 판매하여 <br /> 재고를 최소화 하기위해
              노력하고 있습니다. <br />
              준비된 양이 모두 소진되어 '재료소진' <br />
              되어도 너그러히 양해 부특드립니다.
            </p>
          </div>
          <div>
            <strong>3</strong>
            <p>
              자연분해되는 친환경 주방세제를 사용하고 있으며, <br />
              냅킨을 제외한 모든 일회용품을 최소화하고자 합니다.
            </p>
          </div>
          <div>
            <strong>4</strong>
            <p>
              판매 수익 중 일부를 저소득층 학생 운동선수들에게 지원하고
              있습니다. <br />
              더 많은 학생선수가 마음껏 꿈을 꾸도록 도와주는 것이 <br />
              저희 은퇴 선수 선배들이 해야할 역할이지 않을까요?
            </p>
          </div>
          <div>
            <strong>5</strong>
            <p>
              수평적 기업문화를 구축을 하기 위해 노력합니다. <br /> 또한
              공정하고 투명한 노사관계를 기업 운영의 <br /> 핵심 가치로
              여깁니다.
            </p>
          </div>
          <div>
            완벽하진 않지만 조금씩, 조금 더 <br />
            우리가 모두 바라는 FOOD & LIFESTYLE <br />
            브랜드로 한발씩 나아갑니다.
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
