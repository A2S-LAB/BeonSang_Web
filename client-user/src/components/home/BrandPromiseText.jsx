import classes from './css/BrandPromiseText.module.css';

const BrandPromiseTexts = [
  {
    strong: '1',
    p: `버려지는 음식을 최소화하기 위해\n모든 반찬과 밥은 소량씩제공됩니다.\n언제든, 며천이든 필요하신 만큼 제공해드리고\n있사오니 부족하시면 말씀해주세요.`,
  },
  {
    strong: '2',
    p: `매일 매일 준비된 양만 판매하여\n재고를 최소화 하기위해 노력하고 있습니다.\n준비된 양이 모두 소진되어 '재료소진'\n되어도 너그러히 양해 부탁드립니다.`,
  },
  {
    strong: '3',
    p: `자연분해되는 친환경 주방세제를 사용하고 있으며,\n냅킨을 제외한 모든 일회용품을 최소화하고자 합니다.`,
  },
  {
    strong: '4',
    p: `판매 수익 중 일부를 저소득층 학생 운동선수들에게 지원하고 있습니다.\n더 많은 학생선수가 마음껏 꿈을 꾸도록 도와주는 것이\n저희 은퇴 선수 선배들이 해야할 역할이지 않을까요?`,
  },
  {
    strong: '5',
    p: `수평적 기업문화를 구축을 하기 위해 노력합니다.\n또한 공정하고 투명한 노사관계를 기업 운영의\n핵심 가치로 여깁니다.`,
  },
];

export const BrandPromiseText = () => {
  const elementPromiseText = BrandPromiseTexts.map(textType => {
    return (
      <div key={textType.strong} className={classes.promiseText}>
        <strong>{textType.strong}</strong>
        <p>{textType.p}</p>
      </div>
    );
  });

  return <>{elementPromiseText}</>;
};
