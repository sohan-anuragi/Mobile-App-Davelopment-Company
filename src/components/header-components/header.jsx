import { useState, useEffect } from 'react'
import ContactVar from './contact-var'
import DropBox from './dropbox'
import styles from './header-styles/header.module.css'
import DropBoxDataProvider from './headerstore'
import NavBar from './nav-bar'

export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <DropBoxDataProvider>
        <div className={styles["nav-bar-container"]}>
          <ContactVar />
          <NavBar />
        </div>

        {/* DropBox only for desktop screens */}
        {windowWidth > 1030 && <DropBox />}
      </DropBoxDataProvider>
    </>
  )
}
