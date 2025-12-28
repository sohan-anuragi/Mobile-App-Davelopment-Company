import styles from './footer-styles/footer-contact.module.css'
import { FaPhone } from "react-icons/fa6";
import { BsMessenger } from "react-icons/bs";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { useEffect, useRef, useState } from 'react'
export default function FooterContact(){

      const heading = useRef(null)
      const [visible,setVisible] = useState(false)
  
     useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          const entry = entries[0]
          if (entry.isIntersecting) {
          setVisible(true);
         observer.unobserve(heading.current); 
          }
        })
        observer.observe(heading.current)
          return () => observer.disconnect();
      })


    return (
        <>
        <div id='contact-with-us' className={styles['Contact-footer-container']}>
            <h3 ref={heading} className={`${visible ? styles['visible'] : ''} ${styles['Contact-footer-heading']}`} >
                Get in touch with Our Expert
            </h3>
            <p className={styles['Contact-footer-para']}>
                As a Mobile App Development Company,<br/> we take pride in crafting 
                innovative mobile experiences that drive engagement and growth
            </p>

            <div className={styles['cbtn-form-container']}>
                <div className={styles['cbtn-container']}>
                  <span className={styles['mob-span']}>
                   <a href='#' className={`${styles['numb']}`} ><FaPhone className={`${styles['phone-icon']}`} /> +91 764-982-7068</a>
                  </span>
                  <span className={styles['mob-span']}>
                   <a href='#' className={`${styles['numb']}`} ><BsMessenger className={`${styles['phone-icon']}`} ></BsMessenger> +91 764-982-7068</a>
                  </span>
                  <span className={styles['mob-span']}>
                   <a href='#' className={`${styles['numb']}`} ><FaSquareWhatsapp className={`${styles['phone-icon']}`} /> +91 764-982-7068</a>
                  </span>
                </div>
                <div className={styles['form-container']}>
                 <form>
                    <input type='text' placeholder='Full Name*' className={styles['input-name']} ></input>
                    <input type='email' placeholder='Email*' className={styles['input-name']} ></input>
                    <input type='text' placeholder='Mobile*' className={styles['input-name']} ></input>

                     <select className={styles['select-service']}>
                        <option value="">Select Service*</option>
                        <option value="app">App Development</option>
                        <option value="web">Web Development</option>
                        <option value="ai">AI Solutions</option>
                       <option value="blockchain">Blockchain</option>
                     </select>
                     <select className={styles['select-service']}>
                       <option value="">Select Project Budget*</option>
                       <option value="below10k">Below ₹10,000</option>
                       <option value="10k-50k">₹10,000 – ₹50,000</option>
                       <option value="50k-1lakh">₹50,000 – ₹1,00,000</option>
                       <option value="above1lakh">Above ₹1,00,000</option>
                     </select>
                     <select className={styles['select-service']}>
                       <option value="">When to Start*</option>
                        <option value="immediately">Immediately</option>
                        <option value="1week">Within 1 Week</option>
                        <option value="1month">Within 1 Month</option>
                        <option value="later">Later / Not Decided</option>
                      </select>
                      <textarea className={styles['textarea']} placeholder='Message*'></textarea>
                  
                      <button className={styles['submit-btn']}>
                        Send Request
                      </button>
  
                 </form>
                </div>
            </div>

        </div>
        </>
    )
}