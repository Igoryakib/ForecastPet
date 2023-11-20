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
import { useSelector } from "react-redux";
import { getLanguage } from "../../../redux/selectors";
import Dots from "../../Message/Dots";

const clients = [
  {
    name_UK: "Андрій",
    name_EN: "Andrew",
    age: "63",
    text_UK:
      "Дуже легкий додаток, тепер я можу їздити з сім’єю на відпочинок кожен день!",
    text_EN:
      "Truly easy app, eventually, I may drive with my family to vacation every day!",
    photo: Human1,
  },
  {
    name_UK: "Кларіса",
    name_EN: "Clarissa",
    age: "26",
    text_UK:
      "Завдяки цьому додатку, я тепер більше гуляю на свіжому повітрі :)",
    text_EN:
      "Due to this app, finally, I go for a walk far more in the fresh air :)",
    photo: Human2,
  },
  {
    name_UK: "Джейн",
    name_EN: "Jane",
    age: "31",
    text_UK:
      "Тепер я можу проводити свої дослідження в ті дні коли нема дощу набагато легше",
    text_EN:
      "From here on now, I'm able to conduct researches when there's no rain",
    photo: Human3,
  },
];

const Sidebar = function ({ activeFeedback, setActiveFeedback, type }) {
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const language = useSelector(getLanguage);

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
      <span>{language === "uk" ? "найкраща погода" : "the best forecast"}</span>
      <div className={styles.header}>
        <Heading>
          {type === "signup"
            ? language === "uk"
              ? "Почни свою подорож у світ точних прогнозів!"
              : "Start your journey in the realm of accurate forecasts!"
            : language === "uk"
              ? "Дякуємо за довіру!"
              : "Thanks for your trust!"}
        </Heading>
        {isLoading ? (
          <Dots />
        ) : (
          <>
            <p className={styles.subheading}>
              {type === "signup"
                ? language === "uk"
                  ? "Розкрий світ прогнозів погоди, які ніколи не брешуть та доєднайся до ком’юніті однодумців"
                  : "Reveal the whole domain of weather forecasts, which never lie and join the community of like-minded people"
                : language === "uk"
                  ? "Порада дня:"
                  : "Daily adivce:"}{" "}
            </p>
            {type === "login" ? (
              <div className={styles.adviceContainer}>
                <p className={styles.advice}>{advice}</p>
              </div>
            ) : (
              ""
            )}
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
            ),
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
