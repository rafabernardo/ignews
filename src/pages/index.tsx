import Head from 'next/head'
import Image from 'next/image'

import girlCoding from '../../public/images/avatar.svg'
import SubscriptionButton from '../components/subscription-button'
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.container}>
        <section className={styles.content}>
          <span className={styles.text}>👏 Hey, welcome</span>
          <h1 className={styles.title}>
            News about <br /> the <span>React</span> world.
          </h1>
          <p className={styles.text}>
            Get access to all publications <br />
            <span>for $9.90 month</span>
          </p>
          <SubscriptionButton className={styles.button} />
        </section>
        <div className={styles.logo}>
          <Image src={girlCoding} alt='Girl coding' />
        </div>
      </main>
    </>
  )
}
