import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CharactersContext } from "../../App";
import Loader from "../../components/ui/Loader/Loader";
import CharactersService from "../../services/CharactersService";
import Search from "../../components/application/Search/Search";
import Pagination from "../../components/application/Pagination/Pagination";
import CharacterCard from "../../components/application/CharacterCard/CharacterCard";
import styles from "./styles.module.css";

const CharactersList = () => {
  const navigate = useNavigate();

  const { search, setCharacter } = useContext(CharactersContext);

  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const handleCharacterClick = (character) => {
    setCharacter(character);
    navigate(`/character/${character?.id}`);
  };

  useEffect(() => {
    CharactersService.filterCharacters({ name: search })
      .then(({ data }) => {
        setCharacters(data?.results);
        setPageCount(data?.info?.pages);
      })
      .catch((error) => console.log("Error", error));
  }, [search]);

  useEffect(() => {
    setLoading(true);

    CharactersService.getCharacters({ page: currentPage, name: search })
      .then(({ data }) => {
        setCharacters(data?.results);
        setPageCount(data?.info?.pages);
        setLoading(false);
      })
      .catch((error) => console.log("Error", error));
  }, [currentPage]);

  return (
    <div>
      <div className={styles.filters}>
        <Search />
      </div>
      <div className={styles.pagination}>
        <Pagination pageCount={pageCount} setCurrentPage={setCurrentPage} />
      </div>
      <div className={styles.characters}>
        {isLoading ? (
          <Loader />
        ) : (
          characters.map((character) => (
            <CharacterCard key={character.id} {...character} onClick={handleCharacterClick} />
          ))
        )}
      </div>
    </div>
  );
};

export default CharactersList;
