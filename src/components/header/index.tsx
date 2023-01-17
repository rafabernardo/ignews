import Image from 'next/image'
import { useRouter } from 'next/router'

import SignInButton from '../sign-in-button'
import { ActiveLink } from '../active-link'
import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Image src='/images/logo.svg' alt='logo' width={80} height={20} />
        <nav className={styles.nav}>
          <ActiveLink href={'/'} activeClassName={styles.active}>
            <span className={styles['nav-item']}>Home</span>
          </ActiveLink>
          <ActiveLink href={'/posts'} activeClassName={styles.active}>
            <span className={styles['nav-item']}>Posts</span>
          </ActiveLink>
        </nav>
        <SignInButton className={styles['sign-in-button']} />
      </div>
    </header>
  )
}

export default Header
