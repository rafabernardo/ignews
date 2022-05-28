import Image from 'next/image'
import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Image src='/images/logo.svg' alt='logo' width={80} height={20} />
        <nav className={styles.nav}>
          <a className={styles['nav-item']}>Home</a>
          <a className={styles['nav-item']}>Posts</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
