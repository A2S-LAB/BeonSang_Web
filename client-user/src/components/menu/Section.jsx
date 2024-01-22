import classes from './css/Section.module.css';
import { List } from './List';

export const Section = () => {
  return (
    <section className={classes.section}>
      <List />
    </section>
  );
};
