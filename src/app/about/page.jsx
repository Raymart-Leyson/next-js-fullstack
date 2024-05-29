import Image from 'next/image'
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>We Create digital ideas that are bigger, bolder, braver and better</h1>
        <p className={styles.description}>
          We create digital ideas that are bigger, bolder, braver and better.
          We believe in good ideas and flexibility and precission We're world's
          Our Special Team best consulting & finane solution provider. wide range
          of web and software development services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h3>100+</h3>
            <p>Completed Projects</p>
          </div>
          <div className={styles.box}>
            <h3>100+</h3>
            <p>Happy Clients</p>
          </div>
          <div className={styles.box}>
            <h3>100+</h3>
            <p>Cup Of Coffee</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Img" className={styles.img} fill/>
      </div>
      
    </div>
  )
}

export default AboutPage