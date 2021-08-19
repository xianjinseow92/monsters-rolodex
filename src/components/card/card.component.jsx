import React from "react";

import styles from "./card.styles.module.scss";

const Card = (props) => {
  /**
   * Renders a monster card
   */

  const typeOfMonster = "set2";
  const imgSize= "180x180"
  const { monster } = props;


  return (
    <div className={styles["card-container"]}>
        <img src={`https://robohash.org/${monster.id}?set=${typeOfMonster}&size=${imgSize}`} alt="monster" />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};

export default Card;
