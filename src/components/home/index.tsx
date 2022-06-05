import Image from 'next/image'

import girlCoding from '../../../public/images/avatar.svg'
import SubscriptionButton from '../subscription-button'
import { HomeProps } from '../../types/home'
import { currencyFormat } from '../../utils/helpers'

import styles from './styles.module.scss'

const HomeContent = ({ product }: HomeProps) => (
  <main className={styles.container}>
    <section className={styles.content}>
      <span className={styles.text}>👏 Hey, welcome</span>
      <h1 className={styles.title}>
        News about <br /> the <span>React</span> world.
      </h1>
      <p className={styles.text}>
        Get access to all publications <br />
        <span>
          for {currencyFormat(product.amount)} /{product.interval.substring(0, 2)}
        </span>
      </p>
      <SubscriptionButton className={styles.button} />
    </section>
    <div className={styles.logo}>
      <Image src={girlCoding} alt='Girl coding' />
    </div>
  </main>
)

export default HomeContent
