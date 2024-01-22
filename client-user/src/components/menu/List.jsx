import classes from './css/List.module.css';
import { FOOD_SECTION } from '../../assets/Item';
import { Item } from './Item';

export const List = () => {
  const foodSection = FOOD_SECTION.map(section => {
    return (
      <div key={section.sectionTitle}>
        <h3 className={classes.h3}>{section.sectionTitle}</h3>
        <ul className={classes.ul}>
          <Item foods={section.foods} />
        </ul>
      </div>
    );
  });

  return <>{foodSection}</>;
};
