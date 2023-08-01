import { useEffect, useState } from "react";
import styles from "./Time.module.scss";

const Time = function ({language = 'uk'}) {
  const [date, setDate] = useState(new Date())
  const time = `${date.getHours()}`.padStart(2, 0)+':'+`${date.getMinutes()}`.padStart(2, 0)
  const timer = setInterval(() => setDate(new Date()), 60000)

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }
  const day = Intl.DateTimeFormat(language, options).format(date)

  return <div className={styles.container}>
    <span className={styles.time} >{time}</span>
    <span className={styles.day} >{day}</span>
  </div>;
};

export default Time;
