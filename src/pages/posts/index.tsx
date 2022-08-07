import Head from 'next/head'
import { GetStaticProps } from 'next'
import * as prismic from '@prismicio/client'

import { getPrismicClient } from '../../services/prismic'
import styles from './styles.module.scss'

const Posts = () => {
  return (
    <>
      <Head>
        <title>Posts | ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.content}>
          <a>
            <time>12 de marco de 2021</time>
            <strong>Teste</strong>
            <p>Lorem lorem lorem </p>
          </a>
          <a>
            <time>12 de marco de 2021</time>
            <strong>Teste</strong>
            <p>Lorem lorem lorem </p>
          </a>
          <a>
            <time>12 de marco de 2021</time>
            <strong>Teste</strong>
            <p>Lorem lorem lorem </p>
          </a>
          <a>
            <time>12 de marco de 2021</time>
            <strong>Teste</strong>
            <p>Lorem lorem lorem </p>
          </a>
        </div>
      </main>
    </>
  )
}

export default Posts

export const getStaticProps: GetStaticProps = async () => {
  const prismicClient = getPrismicClient()

  const response = await prismicClient.get({
    predicates: [prismic.predicate.at('document.type', 'publication')],
    fetchLinks: ['publication.title', 'publication.content'],
    pageSize: 100,
    lang: 'pt-br',
  })

  console.log(JSON.stringify(response, null, 2))

  return {
    props: {},
  }
}
