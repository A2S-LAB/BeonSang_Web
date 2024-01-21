import classes from './css/Items.module.css';
const Foods = [
  {
    title: '연어초밥',
    image:
      'https://t3.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/9edO/image/YwShZG-eTxURrC6AU3q6AVt1700.jpg',
  },
];

export const Items = () => {
  const elementFood = Foods.map(food => {
    return (
      <li key={food.title} className={classes.card}>
        <img src={food.image} alt={food.title} />
        <h1>{food.title}</h1>
      </li>
    );
  });

  return <ul>{elementFood}</ul>;
};
