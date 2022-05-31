import classnames from 'classnames'

import styles from './styles.module.scss'

interface SubscriptionButtonProps {
  className?: string
}

const SubscriptionButton = ({ className }: SubscriptionButtonProps) => {
  return (
    <button type='button' className={classnames(styles.button, className)}>
      Subscribe now
    </button>
  )
}

export default SubscriptionButton
