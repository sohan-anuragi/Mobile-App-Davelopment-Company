import ContactBox from './contact-box';
import styles from './header-styles/navbar-container.module.css'
import { headerDataProvider } from './headerstore';
import { useContext } from 'react';

export default function GamezoneBar(){

const gameZone = [
  { game: 'Action Game Development', link: 'action-game-development' },
  { game: 'Android Game Development', link: 'android-game-development' },
  { game: 'Educational Game Development', link: 'educational-game-development' },
  { game: 'Multiplayer Games Development', link: 'multiplayer-games-development' },
  { game: 'HTML5 Game Development', link: 'multiplayer-games-development' },
  { game: 'iPhone Game Development', link: 'iphone-game-development' },
  { game: 'Sport Game Development', link: 'sport-game-development' }
];

    const {toggle2, hoverEnter,hoverLeave } = useContext(headerDataProvider)

    return (
        <div className={styles['drop-box2']}
                 onMouseEnter={() => hoverEnter(toggle2)}
                 onMouseLeave={() => hoverLeave()}>
              <div className={styles['drop-box']}>

        <div className={styles['gamezone-div']}>
        {gameZone.map((Games) => (
            <a href={Games.link} className={styles['gamezone-a']}>
              {Games.game}
            </a>
        ))}
        </div>
        </div>
        </div>
    )
}