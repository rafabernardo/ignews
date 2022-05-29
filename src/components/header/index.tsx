import Image from 'next/image'
import classnames from 'classnames'

import SignInButton from '../sign-in-button'
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
        <SignInButton className={styles['sign-in-button']} />
      </div>
    </header>
  )
}

export default Header
