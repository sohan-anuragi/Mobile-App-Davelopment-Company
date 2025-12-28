import img from './RoutImg/RoutImg.jpg';
import styles from './TechnologyPagesStyle/Technology.module.css';

export default function CloudComputingDevelopment() {
  return (
    <>
      <div className={styles['image-container']}>
        <img src={img} alt="Cloud Computing" className={styles['hero-image']} />
        <div className={styles['overlay-text']}>
          <h1>Cloud Computing</h1>
        </div>
      </div>

      <div className={styles['content-section']}>
        <p className={styles['intro-paragraph']}>
          <span className={styles['highlight']}>Introduction</span>
        </p>

        <p className={styles['main-paragraph']}>
          <span className={styles['highlight']}>Cloud Computing</span> is outlined as a pool of resources that's accessible to anyone as a service over the web. This new manner of computing has the whole modified the organization's manner of managing their business. Cloud computing is over a service during a remote information center. It provides many ways in which will facilitate the organizations quickly and with efficiency thus on add and cypher resources virtually in real-time.
        </p>

        <p className={styles['main-paragraph']}>
          <span className={styles['highlight']}>Why Cloud Computing?</span>
        </p>

        <p className={styles['main-paragraph']}>
          In the previous couple of decades the quantity of information has inflated exponentially and since that data storage moreover, as its management has become the primary consideration of the organization. These organizations pay a great deal of cash on the maintenance of their information centres and servers aside from specializing in their core business. Cloud Computing provides an economical mechanism for those organizations to keep up their information centres and servers thus far at an optimum price.
        </p>

        <ul className={styles['benefits-list']}>
          <li>As <span className={styles['highlight']}>Cloud Computing</span> is completely a business model, it's given the freedom to several massive and tiny-scale businesses to grow at Associate in Nursing exponential rate with having restricted resources solely.</li>
          <li><span className={styles['highlight']}>Cloud Computing</span> conjointly has offered versatile surroundings to those organizations to access any piece of technology, that was historically unprocurable to them.</li>
          <li>The services exposed by cloud supplier companies like <a href="#" className={styles['link-style']}>AWS</a> host preponderant solutions developed by a cloud-based application development company with thoughtful and proven design to justifiedly map the answer hosted against a cloud service offered like <span className={styles['highlight']}>PAAS, DAAS, or IAAS</span>.</li>
        </ul>

        <p className={styles['main-paragraph']}>
          Cloud computing has revolutionized how organizations approach their IT infrastructure, enabling them to scale rapidly, reduce costs, and focus on their core business objectives. By leveraging cloud services, businesses can access cutting-edge technology and infrastructure without the burden of managing physical servers and data centers.
        </p>

        <p className={styles['main-paragraph']}>
          Whether you're looking to migrate existing applications to the cloud or build new cloud-native solutions, our cloud computing expertise ensures your business stays competitive in today's digital landscape.
        </p>
      </div>
    </>
  );
}
