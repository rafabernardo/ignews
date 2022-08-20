import Head from 'next/head'
import { GetStaticProps } from 'next'
import * as prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

import { getPrismicClient } from '../../services/prismic'
import styles from './styles.module.scss'

type Post = {
  slug: string
  title: string
  excerpt: string
  updatedAt: string
}
interface PostProps {
  posts: Post[]
}

const Posts = ({ posts }: PostProps) => {
  return (
    <>
      <Head>
        <title>Posts | ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.content}>
          {posts.map((post) => (
            <a key={post.slug}>
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              {post.excerpt && <p>{post.excerpt}</p>}
            </a>
          ))}
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

  const posts = response.results.map((post) => ({
    slug: post.uid,
    title: RichText.asText(post.data.title),
    excerpt: post.data.content.find((content) => content.type === 'paragraph')?.text ?? '',
    updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }))
  return {
    props: {
      posts,
    },
  }
}
