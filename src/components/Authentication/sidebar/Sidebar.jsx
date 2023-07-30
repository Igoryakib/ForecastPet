import FeedbackNav from "./FeedbackNav";
import Human1 from "../../../static/feedback/human1.png";
import Human3 from "../../../static/feedback/human3.png";
import Human2 from "../../../static/feedback/human2.png";
import Feedback from "./Feedback";
import Spinner from "../../Spinner/Spinner";

import styles from "./Sidebar.module.scss";
import Heading from "../../small components/Heading/Heading";
import { useEffect, useState } from "react";

import Photo from "../../../static/photos/1";

const clients = [
  {
    name: "Андрій",
    age: "63",
    text: "Дуже легкий додаток, тепер я можу їздити з сім’єю на відпочинок кожен день!",
    photo: Human1,
  },
  {
    name: "Кларіса",
    age: "26",
    text: "Завдяки цьому додатку, я тепер більше гуляю на свіжому повітрі :)",
    photo: Human2,
  },
  {
    name: "Джейн",
    age: "31",
    text: "Тепер я можу проводити свої дослідження в ті дні коли нема дощу набагато легше",
    photo: Human3,
  },
];

const Sidebar = function ({ activeFeedback, setActiveFeedback, type }) {
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (type === "login") {
      const fetcher = async function () {
        setIsLoading(true);
        try {
          const res = await fetch("https://api.adviceslip.com/advice");
          const data = await res.json();
          setAdvice(data.slip.advice);
        } catch {
          console.error("some error happaned during advice API fetching");
        } finally {
          setIsLoading(false);
        }
      };
      fetcher();
    }
  }, []);

  return (
    <div className={styles.sidebar}>
      <span>найкраща погода</span>
      <div className={styles.header}>
        <Heading>
          {type === "signup"
            ? "Почни свою подорож у світ точних прогнозів!"
            : "Дякуємо за довіру!"}
        </Heading>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <p className={styles.subheading}>
              {type === "signup"
                ? "Розкрий світ прогнозів погоди, які ніколи не брешуть та доєднайся до ком’юніті однодумців"
                : "Порада дня:"}{" "}
            </p>
            {type === "login" ? <p className={styles.advice}>{advice}</p> : ""}
          </>
        )}
      </div>

      {type === "signup" ? (
        <div>
          {clients.map((client, i) =>
            i + 1 === activeFeedback ? (
              <Feedback key={i} client={clients[activeFeedback - 1]} />
            ) : (
              ""
            )
          )}
          <FeedbackNav
            number={clients.length}
            setActiveFeedback={setActiveFeedback}
            activeFeedback={activeFeedback}
          />
        </div>
      ) : (
        <Photo />
      )}
    </div>
  );
};

export default Sidebar;
