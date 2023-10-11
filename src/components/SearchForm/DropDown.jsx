import { useSelector } from "react-redux";
import styles from "./DropDown.module.scss";
import { useEffect } from "react";
import { getCities, getLanguage } from "../../redux/selectors";
import classNames from "classnames";

const DropDown = function ({ dispatchFn }) {
  const language = useSelector(getLanguage);
  const searchCities = useSelector(getCities);

  return (
    <ul className={styles.dropDown}>
      {searchCities.length === 0 ? (
        <li className={classNames(styles.item)}>
          <p className={styles.rejected}>
            😢 {language === "uk" ? "нічого не знайдено" : "not found"}
          </p>
        </li>
      ) : (
        searchCities.map((city) => (
          <li className={classNames(styles.city, styles.btn)} key={city.lat}>
            <button
              className={styles.item}
              onClick={() =>
                dispatchFn({
                  regionData: { lat: city.city.lat, lon: city.city.lon },
                  lang: language,
                })
              }
            >
              <span className={styles.flag}>
                {city.country.cca2 === "RU" ? "🤮" : city.country.flag}
              </span>
              <div className={styles.itemInfo}>
                <span className={styles.itemCity}>
                  {city.city.name}
                  {city.city.state ? `, ${city.city.state}` : ""}{" "}
                </span>
                <span className={styles.itemCountry}>
                  {city.country.name.common ?? city.country.name.official}{" "}
                </span>
              </div>
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

export default DropDown;
