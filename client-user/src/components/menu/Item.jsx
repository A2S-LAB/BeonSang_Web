import classes from './css/Item.module.css';

export const Item = ({ foods }) => {
  const elementFood = foods.map(food => {
    return (
      <li key={food.title} className={classes.li}>
        <img src={food.image} alt={food.title} />
        <div>
          <div className={classes['text-box']}>
            <h5>{food.title}</h5>
            <p>{food.desc}</p>
          </div>

          <div>
            <strong>{food.price}원</strong>
          </div>
        </div>
      </li>
    );
  });

  return <>{elementFood}</>;
};
