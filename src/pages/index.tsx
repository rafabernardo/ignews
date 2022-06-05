import Head from 'next/head'
import { GetStaticProps } from 'next'

import { stripe } from '../services/stripe'
import HomeContent from '../components/home'
import { HomeProps } from '../types/home'
import { getStripeCurrency } from '../utils/helpers'

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>s
      </Head>
      <HomeContent product={product} />
    </>
  )
}

export const getServerSideProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve(process.env.STRIPE_SUBSCRIPTION_PRICE_ID, {
    expand: ['product'],
  })

  const product = {
    priceId: price.id,
    amount: getStripeCurrency(price.unit_amount),
    interval: price.recurring.interval,
  }

  return {
    props: { product },
    revalidate: 60 * 60 * 24,
  }
}
