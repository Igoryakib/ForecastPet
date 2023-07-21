import FeedbackNav from "./FeedbackNav";
import Human1 from "../../../../static/feedback/human1.png";
import Human3 from "../../../../static/feedback/human3.png";
import Human2 from "../../../../static/feedback/human2.png";
import Feedback from "./Feedback";

import styles from "./Sidebar.module.scss";
import Heading from "../small components/Heading";

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

const Sidebar = function ({ activeFeedback, setActiveFeedback }) {
  console.log(activeFeedback);
  return (
    <div className={styles.sidebar}>
      <span>найкраща погода</span>
      <div className={styles.header}>
        <Heading>Почни свою подорож у світ точних прогнозів!</Heading>
        <p className={styles.subheading}>
          Розкрий світ прогнозів погоди, які ніколи не брешуть та доєднайся до
          ком’юніті однодумців
        </p>
      </div>
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
    </div>
  );
};

export default Sidebar;
