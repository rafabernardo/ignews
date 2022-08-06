import Head from 'next/head'
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
