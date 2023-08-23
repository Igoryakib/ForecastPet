import React, { useRef } from "react";
import styles from "./SearchForm.module.scss";
import Search from "../../static/Search.svg";
import { useSelector } from "react-redux";
import { getLanguage, getWeather } from "../../redux/selectors";
import Spinner from "../Spinner/Spinner";
import DropDown from "./DropDown";

const SearchForm = ({ searchValue, setSearchValue, onSubmit, dispatchFn }) => {
  const language = useSelector(getLanguage);
  const { isLoading } = useSelector(getWeather);
  const dropdownEl = useRef()
  window.addEventListener('click', (e) => {
    if(e.target !== dropdownEl.current) setSearchValue('');
  })

  return (
    <form onSubmit={onSubmit} className={styles.searchForm} ref={dropdownEl}>
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
      {searchValue.length >= 2 ? <DropDown dispatchFn={dispatchFn} /> : ""}
    </form>
  );
};

export default SearchForm;
