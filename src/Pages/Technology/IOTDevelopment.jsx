import img from './RoutImg/RoutImg.jpg';
import styles from './TechnologyPagesStyle/Technology.module.css';

export default function IOTDevelopment() {
  return (
    <>
      <div className={styles['image-container']}>
        <img src={img} alt="IOT Development" className={styles['hero-image']} />
        <div className={styles['overlay-text']}>
          <h1>IOT Development Company</h1>
        </div>
      </div>

      <div className={styles['content-section']}>
        <p className={styles['intro-paragraph']}>
          <span className={styles['highlight']}>Connecting the Future with Intelligent Solutions</span>
        </p>

        <p className={styles['main-paragraph']}>
          The <span className={styles['highlight']}>Internet of Things (IOT)</span> is revolutionizing how businesses and consumers interact with the digital and physical world. As a leading <span className={styles['highlight']}>IOT app development company</span>, we specialize in building smart, secure, and scalable IOT solutions that connect devices, collect data, and unlock new opportunities for automation, efficiency, and innovation.
        </p>

        <p className={styles['main-paragraph']}>
          With the increasing adoption of smart devices across industries—from manufacturing and logistics to healthcare and smart homes— IOT is no longer optional. Businesses today are looking for customized, real-time, and integrated solutions that can help them improve decision-making, optimize resources, and provide better user experiences. That's exactly what we deliver.
        </p>

        <p className={styles['main-paragraph']}>
          <span className={styles['highlight']}>Why Choose Us as Your IOT Development Partner?</span>
        </p>

        <p className={styles['main-paragraph']}>
          We are a trusted IOT development company with a proven track record of delivering innovative, data-driven solutions. Here's what makes us stand out:
        </p>

        <ul className={styles['benefits-list']}>
          <li><span className={styles['highlight']}>End-to-End IOT Expertise:</span> From embedded systems to cloud integration and mobile interfaces, we handle the entire IOT ecosystem.</li>
          <li><span className={styles['highlight']}>Custom Solutions:</span> We tailor our IOT apps to your specific use case—whether it's smart home automation, industrial IOT, or wearable tech.</li>
          <li><span className={styles['highlight']}>Cross-Platform Development:</span> Our apps are designed for Android, iOS, and web, ensuring seamless access to connected devices.</li>
          <li><span className={styles['highlight']}>Security-First Approach:</span> We prioritize data security and compliance with industry standards to ensure your IOT infrastructure is safe.</li>
        </ul>

        <p className={styles['main-paragraph']}>
          <span className={styles['highlight']}>Our IOT App Development Services</span>
        </p>

        <p className={styles['main-paragraph']}>
          We offer a full range of IOT development services to help you build a smart, connected ecosystem:
        </p>

        <ul className={styles['benefits-list']}>
          <li><span className={styles['highlight']}>IOT Mobile App Development:</span> Intuitive apps that allow users to monitor, control, and interact with devices in real time.</li>
          <li><span className={styles['highlight']}>Embedded Software & Firmware Development:</span> Software that powers your devices, sensors, and hardware.</li>
          <li><span className={styles['highlight']}>Cloud Integration:</span> Secure and scalable cloud architecture for storing, analyzing, and managing IOT data.</li>
          <li><span className={styles['highlight']}>Real-Time Data Analytics & Dashboards:</span> Turn raw sensor data into actionable insights through powerful dashboards and AI integration.</li>
          <li><span className={styles['highlight']}>Device & Sensor Integration:</span> We connect your hardware to the digital world using protocols like MQTT, CoAP, BLE, and more.</li>
          <li><span className={styles['highlight']}>IOT Testing & Maintenance:</span> Ensure performance, scalability, and security with regular updates and monitoring.</li>
        </ul>

        <p className={styles['main-paragraph']}>
          <span className={styles['highlight']}>Industries We Serve</span>
        </p>

        <p className={styles['main-paragraph']}>
          We build IOT applications for a wide range of industries, including:
        </p>

        <ul className={styles['benefits-list']}>
          <li>Smart Homes & Buildings</li>
          <li>Healthcare & MedTech</li>
          <li>Manufacturing & Industrial Automation</li>
          <li>Logistics & Supply Chain</li>
          <li>Agriculture & AgriTech</li>
          <li>Retail & Inventory Management</li>
          <li>Energy & Utilities</li>
          <li>Wearables & Fitness Tech</li>
        </ul>

        <p className={styles['main-paragraph']}>
          Whether you want to build a smart HVAC controller or an industrial IOT monitoring system, we bring the right tools and talent to make it happen.
        </p>

        <p className={styles['main-paragraph']}>
          <span className={styles['highlight']}>Let's Build Your IOT Ecosystem</span>
        </p>

        <p className={styles['main-paragraph']}>
          Looking for a reliable IOT app development company to bring your connected product to life? Whether you're a startup exploring smart tech or an enterprise looking to scale your operations, we have the expertise to deliver tailor-made solutions that align with your vision.
        </p>
      </div>
    </>
  );
}
