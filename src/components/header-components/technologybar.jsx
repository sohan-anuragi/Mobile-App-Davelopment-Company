import styles from './header-styles/navbar-container.module.css'
import { technologyIcons } from "./icons";
import { headerDataProvider } from './headerstore';
import { useContext } from 'react';
import ContactBox from './contact-box';
import { Link } from 'react-router-dom';

export default function TechnologyBar(){


 const technology = [
  {
    heading: "MOBILE",
    textIcon: [
      { text: "Android", icon: technologyIcons.Android, link:'/applayout/android-app' },
      { text: "iOS", icon: technologyIcons.iOS, link:'/applayout/ios-app' },
      { text: "React", icon: technologyIcons.React, link:'/applayout/react-development' },
      { text: "Flutter", icon: technologyIcons.Flutter, link:'/applayout/flutter-development' },
      { text: "Xamarin", icon: technologyIcons.Xamarin, link:'/applayout/xamarin-development' }
    ]
  },
  {
    heading: "CMS",
    textIcon: [
      { text: "WordPress", icon: technologyIcons.WordPress, link:'/applayout/wordpress-development' },
      { text: "Joomla", icon: technologyIcons.Joomla },
      { text: "Drupal", icon: technologyIcons.Drupal },
      { text: "Shopify", icon: technologyIcons.Shopify }
    ]
  },
  {
    heading: "TECHNOLOGY",
    textIcon: [
      { text: "Java", icon: technologyIcons.Java, link:'/applayout/java-web-development' },
      { text: "Php", icon: technologyIcons.Php, link:'/applayout/php-web-development' },
      { text: "Node.Js", icon: technologyIcons.NodeJs, link:'/applayout/nodejs-development' },
      { text: "Oracle", icon: technologyIcons.Oracle, link:'/applayout/oracle-development' },
      { text: "Dot Net", icon: technologyIcons.DotNet, link:'/applayout/dotnet-development' }
    ]
  },
  {
    heading: "NEW",
    textIcon: [
      { text: "BlockChain", icon: technologyIcons.BlockChain, link:'/applayout/blockchain-development' },
      { text: "AR & VR", icon: technologyIcons.ARVR, link:'/applayout/augmented-reality-development' },
      { text: "IOT", icon: technologyIcons.IOT, link:'/applayout/iot-development' },
      { text: "Artificial Intelligence", icon: technologyIcons.ArtificialIntelligence, link:'/applayout/ai-development' },
      { text: "Cloud Computing", icon: technologyIcons.CloudComputing.CloudComputing, link:'/applayout/cloud-computing-development' }
    ]
  }
]

const {toggle2, hoverEnter,hoverLeave } = useContext(headerDataProvider)

return (
  <>
    <div className={styles['drop-box2']}
         onMouseEnter={() => hoverEnter(toggle2)}
         onMouseLeave={() => hoverLeave()}>
      <div className={styles['drop-box']}>
        {technology.map((colum) => (
          <div className={styles['inner-box']}>
            <h3>{colum.heading}</h3>
            {colum.textIcon.map((ram) => (
              <a href={ram.link || '#'} className={styles['inner-a']}>
                <span className={styles['icon-span']}>{ram.icon}</span>
                <div className={styles['heading-div']}>
                  {ram.text}
                </div>
              </a>
            ))}
          </div>
        ))}
      </div>
      <ContactBox></ContactBox>
    </div>
  </>
)

}
