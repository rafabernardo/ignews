import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import classnames from 'classnames'

import styles from './styles.module.scss'

const SignInButton = ({ className }) => {
  const isLoggedIn = true

  return (
    <button type='button' className={classnames(styles.button, className)}>
      <FaGithub className={classnames(styles.icon, { [styles.logged]: isLoggedIn })} />
      {isLoggedIn ? 'Rafaela Rodrigues' : 'Sign in with Github'}
      {isLoggedIn && <FiX className={styles.close} />}
    </button>
  )
}

export default SignInButton
