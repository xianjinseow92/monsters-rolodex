import React from "react";

// Components
import Card from "components/card/card.component";

// Styles
import styles from "./card-list.styles.module.scss";


export const CardList = (props) => {
  /**
   * The purpose of this component is SOLELY just to arrange the cards properly.
   * HOW each card should be rendered (and it's styles), should be handled by another component
   */

  // Component-important variables
  const {
    monsters, // responsible for rendering list of monsters
  } = props;

  return (
    <div className={styles["card-list"]}>
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster}/>
      ))}
    </div>
  );
};

export default CardList;
