
import styles from './Our-technologies-style/Our-technologies.module.css'

export default function OurTechnologiesHeading({handleOnclick,toggleBlue}){

  

    return(
        <>
        <div className={styles['Our-technologies-heading-container']}>
            
                <div className={toggleBlue === 'Mobile App' ? styles['blue-effect'] : styles['heading-container']}
                onClick={() => handleOnclick('Mobile App')}
                >
                  <span className={styles['heading-span']}>
                   Mobile App
                  </span>
                </div>
                  <div className={toggleBlue === 'Backend' ? styles['blue-effect'] : styles['heading-container']}
                  onClick={() => handleOnclick('Backend')}
                  >
                  <span className={styles['heading-span']} >
                   Backend
                  </span>
                </div>
                  <div className={toggleBlue === 'Frontend' ? styles['blue-effect'] : styles['heading-container']}
                  onClick={() => handleOnclick('Frontend')}
                  >
                  <span className={styles['heading-span']}>
                   Frontend
                  </span>
                </div>
                  <div className={toggleBlue === 'Data Base' ? styles['blue-effect'] : styles['heading-container']}
                  onClick={() => handleOnclick('Data Base')}
                  >
                  <span className={styles['heading-span']}>
                   Data Base
                  </span>
                </div>
        </div>
        </>
    )
}