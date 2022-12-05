import React, { useContext } from "react";
import { CharactersContext } from "../../../App";
import Input from "../../ui/Input/Input";
import styles from "./styles.module.css";

const Search = () => {
  const { search, setSearch } = useContext(CharactersContext);

  return (
    <div className={styles.root}>
      <h1 className={styles.label}>Search your favorite character</h1>
      <Input type="search" value={search} onChange={setSearch} />
    </div>
  );
};

export default Search;
