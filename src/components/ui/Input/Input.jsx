import React from "react";
import styles from "./styles.module.css";

const types = { SEARCH: "search" };

const Input = ({ type, value, onChange, ...rest }) => {
  const search = type === types.SEARCH ? styles.search : "";

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={`${styles.root} ${search}`}>
      <input value={value} onChange={handleChange} className={styles.input} {...rest} />
    </div>
  );
};

export default Input;
