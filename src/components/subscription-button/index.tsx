import classnames from 'classnames'
import { signIn, signOut, useSession } from 'next-auth/react'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'

import styles from './styles.module.scss'

interface SubscriptionButtonProps {
  className?: string
}

const SubscriptionButton = ({ className }: SubscriptionButtonProps) => {
  const { data: session } = useSession()

  const handleSubscription = async () => {
    if (!session) {
      signIn('github')
      return
    }

    try {
      const response = await api.post('/subscribe')
      const { sessionId } = response.data
      const stripe = await getStripeJs()
      await stripe.redirectToCheckout({ sessionId })
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <button type='button' className={classnames(styles.button, className)} onClick={handleSubscription}>
      Subscribe now
    </button>
  )
}

export default SubscriptionButton
