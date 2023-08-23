import { useSelector } from "react-redux";
import styles from "./DropDown.module.scss";
import { useEffect } from "react";
import { getCities, getLanguage } from "../../redux/selectors";
import classNames from "classnames";

const DropDown = function ({dispatchFn}) {
  const language = useSelector(getLanguage);
  const searchCities = useSelector(getCities);

  useEffect(() => {
    console.log(searchCities);
  }, []);

  return (
    <ul className={styles.dropDown}>
      {searchCities.length === 0 ? (
        <li className={classNames(styles.item)}>
          <p className={styles.rejected}>
            😢 {' '}{language === "uk" ? "нічого не знайдено" : "not found"}
          </p>
        </li>
      ) : (
        searchCities.map((city) => (
          <li className={classNames(styles.city, styles.btn)} key={city.lat} >
            <button className={styles.item} onClick={() => dispatchFn({regionData: {lat: city.city.lat, lon: city.city.lon}, lang: language})} >
              {city.city.name}, {city.city.state ? `${city.city.state},` : ""}{" "}
              {city.country.name.official ?? city.country.name.common}{" "}
              {city.country.flag}
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

export default DropDown;
