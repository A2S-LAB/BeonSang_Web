import classes from './css/List.module.css';

import { Items } from './Items';

export const List = () => {
  return (
    <main className={classes.main}>
      <h1>MENU</h1>
      <Items />
    </main>
  );
};
