import styles from './header-styles/contact-var.module.css'
import ContactNumb from './contactnumb';
import ContactUl from './contactul';

export default function ContactVar(){
    return (
        <div className={`${styles['contact-var-container']}`}>
          <ContactNumb></ContactNumb>
          <ContactUl></ContactUl>

        </div>
    )
}