import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { stripe } from '../services/stripe'
import HomeContent from '../components/home'
import { HomeProps } from '../types/home'
import { getStripeCurrency } from '../utils/helpers'

export default function Home({ product }: HomeProps) {
  console.log('🚀 ~ file: index.tsx ~ line 10 ~ Home ~ product', product)
  return (
    <>
      <Head>
        <title>Home | ig.news</title>s
      </Head>
      <HomeContent product={product} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve(process.env.STRIPE_SUBSCRIPTION_PRICE_ID, {
    expand: ['product'],
  })
  console.log('🚀 ~ file: index.tsx ~ line 25 ~ constgetServerSideProps:GetServerSideProps= ~ price', price)

  const product = {
    priceId: price.id,
    amount: getStripeCurrency(price.unit_amount),
    interval: price.recurring.interval,
  }

  return {
    props: { product },
  }
}
