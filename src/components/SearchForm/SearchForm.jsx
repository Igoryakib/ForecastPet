import React from "react";
import styles from "./SearchForm.module.scss";
import Search from "../../static/Search.svg";
import { useSelector } from "react-redux";
import { getLanguage, getWeather } from "../../redux/selectors";
import Spinner from "../Spinner/Spinner";

const SearchForm = ({ searchValue, setSearchValue, onSubmit }) => {
  const language = useSelector(getLanguage);
  const { isLoading } = useSelector(getWeather);

  return (
    <form onSubmit={onSubmit} className={styles.searchForm}>
      <button className={styles.formBtn} type="submit">
        {isLoading ? <Spinner /> : <img src={Search} alt="icon" />}
      </button>
      <input
        className={styles.searchFormInput}
        onChange={(event) => setSearchValue(event.target.value)}
        type="input"
        value={searchValue}
        placeholder={
          language === "uk"
            ? "Пошук міста або поштового індекса"
            : "Search for city name or postcode"
        }
      />
    </form>
  );
};

export default SearchForm;
