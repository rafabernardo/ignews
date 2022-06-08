import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import classnames from 'classnames'
import { signIn, signOut, useSession } from 'next-auth/react'

import styles from './styles.module.scss'

const SignInButton = ({ className }) => {
  const { data: session } = useSession()

  const handleClick = () => {
    if (!session) {
      signIn('github')
      return
    }

    signOut()
  }

  return (
    <button type='button' className={classnames(styles.button, className)} onClick={handleClick}>
      <FaGithub className={classnames(styles.icon, { [styles.logged]: session })} />
      {session ? session.user.name : 'Sign in with Github'}
      {session && <FiX className={styles.close} />}
    </button>
  )
}

export default SignInButton
