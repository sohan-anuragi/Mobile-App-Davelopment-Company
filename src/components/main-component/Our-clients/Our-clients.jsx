import OurClients1 from "./Our-clients1";
import styles from './Our-clients-style/Our-clients.module.css'
import OurHappyClients from "./Our-heappyclients";

export default function OurClients(){
    return (
        <>
         <div className={styles['Our-clients-container']}>
            <OurClients1></OurClients1>
            <OurHappyClients></OurHappyClients>
         </div>
        </>
    )
}