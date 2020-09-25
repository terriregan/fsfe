import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>InstaHack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/mug.jpg" className={styles.image}/> 

        <p className={styles.description}>@terriregan</p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <img src="/lewes.jpeg"/> 
            <p className={styles.text}>Life at the Beach</p>
          </a>

          <a href="" className={styles.card}>
            <img src="/bike.jpg"/> 
            <p className={styles.text}>Mountains to Coast Ride</p>
          </a>

          <a href="" className={styles.card}>
            <img src="/football.jpeg"/> 
            <p className={styles.text}>Fantasy Football League</p>
          </a>
     
        </div>
      </main>

      <footer className={styles.footer}> 
          Powered by a small but {' '}
          <img src="/biceps.svg" alt="A Big Mighty Team" className={styles.logo} />
          {' '} mighty team
      </footer>
    </div>
  )
}
