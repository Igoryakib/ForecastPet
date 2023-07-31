import React from "react";
import styles from "./SearchForm.module.scss";
import Search from "../../static/Search.svg";

const SearchForm = ({ searchValue, setSearchValue, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={styles.searchForm}>
      <button className={styles.formBtn} type="submit">
        <img src={Search} alt="icon" />
      </button>
      <input
        className={styles.searchFormInput}
        onChange={(event) => setSearchValue(event.target.value)}
        type="input"
        value={searchValue}
        placeholder="Пошук міста або поштового індекса"
      />
    </form>
  );
};

export default SearchForm;
