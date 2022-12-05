import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/ui/Loader/Loader";
import CharactersService from "../../services/CharactersService";
import CharacterCard from "../../components/application/CharacterCard/CharacterCard";
import styles from "./styles.module.css";

const CharacterInfo = ({ characterInfo }) => {
  const { id } = useParams();

  const [isLoading, setLoading] = useState(false);
  const [character, setSharecter] = useState(characterInfo);

  useEffect(() => {
    if (!character?.id) {
      setLoading(true);

      CharactersService.getSingleCharacter({ id }).then(({ data }) => {
        setSharecter(data);
        setLoading(false);
      });
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <h1>More info about {character?.name}</h1>
      </div>
      <CharacterCard {...character} />
      <div className={styles.information}>
        <div className={styles.extraInfo}>
          Was seen in <span className={styles.expressive}>{character?.episode?.length}</span>{" "}
          episodes
        </div>
        {character?.origin?.name !== "unknown" && (
          <div className={styles.extraInfo}>
            Born in <span className={styles.expressive}>{character?.origin?.name}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterInfo;
