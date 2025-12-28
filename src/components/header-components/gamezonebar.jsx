import ContactBox from "./contact-box.jsx";
import styles from "./header-styles/navbar-container.module.css";
import { HeaderDataContext } from "./header-context.jsx";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function GamezoneBar() {
  const gameZone = [
    {
      game: "Action Game Development",
      link: "/applayout/action-game-development",
    },
    {
      game: "Android Game Development",
      link: "/applayout/android-game-development",
    },
    {
      game: "Educational Game Development",
      link: "/applayout/educational-game-development",
    },
    {
      game: "Multiplayer Games Development",
      link: "/applayout/multiplayer-games-development",
    },
    {
      game: "HTML5 Game Development",
      link: "/applayout/html5-game-development",
    },
    {
      game: "iPhone Game Development",
      link: "/applayout/iphone-game-development",
    },
    {
      game: "Sport Game Development",
      link: "/applayout/sport-game-development",
    },
  ];

  const { toggle2, hoverEnter, hoverLeave } = useContext(HeaderDataContext);

  return (
    <div
      className={styles["drop-box2"]}
      onMouseEnter={() => hoverEnter(toggle2)}
      onMouseLeave={() => hoverLeave()}
    >
      <div className={styles["drop-box"]}>
        <div className={styles["gamezone-div"]}>
          {gameZone.map((Games, idx) => (
            <Link key={idx} to={Games.link} className={styles["gamezone-a"]}>
              {Games.game}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
