import React from "react";
import styles from "./styles.module.css";

const CharacterCard = ({ onClick, ...character }) => {
  const handleClick = () => {
    onClick(character);
  };

  return (
    <div className={styles.root} onClick={onClick && handleClick}>
      <div className={styles.image}>
        <img src={character?.image} alt={character?.name} />
      </div>
      <div className={styles.information}>
        <h1 className={styles.name}>{character?.name}</h1>
        <div>
          <span className={styles.status}>{character?.status}</span>
          <span className={styles.status}> - {character?.species}</span>
        </div>
        {character?.gender && (
          <div className={styles.extraInfo}>
            <div className={styles.title}>Gender:</div>
            <div className={styles.subTitle}>{character.gender}</div>
          </div>
        )}
        {character?.location?.name && (
          <div className={styles.extraInfo}>
            <div className={styles.title}>Last known location:</div>
            <div className={styles.subTitle}>{character?.location?.name}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
