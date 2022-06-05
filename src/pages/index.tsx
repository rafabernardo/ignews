import Head from 'next/head'

import HomeContent from '../components/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <HomeContent />
    </>
  )
}
