import Head from 'next/head'
import Link from 'next/link'
import styles from './style.module.css'

const DESCRIPTION_BY_ROUTE = {
  HOME: (
    <>
      <p className={styles['description']}>
        Requisição da lista feita no Server Side utilizando a função do Next{' '}
        <code>getServerSideProps()</code>
      </p>
      <p className={styles['description']}>
        <Link href={'/pokemon/'}>
          Exemplo da listagem gerando a página de forma estática
        </Link>
      </p>
    </>
  ),
  POKEMON: (
    <>
      <p className={styles['description']}>
        Página criada fazendo a requisição para lista em Build Time
        disponibilizando a página de forma estática.
      </p>
      <p className={styles['description']}>
        A cada 10 segundos uma nova página é gerada e o índice da
        lista de pokémon é atualizado.
      </p>
      <p className={styles['description']}>
        Feature feita utilizando a função do Next{' '}
        <code>getStaticProps()</code>
      </p>
      <p className={styles['description']}>
        <Link href={'/'}>
          Exemplo da listagem utilizando requisição no Server Side
        </Link>
      </p>
    </>
  ),
}

export function Home({ pokemonList, description }) {
  return (
    <div className={styles['container']}>
      <Head>
        <title>Pokedex - Next</title>
      </Head>

      <main className={styles['main']}>
        <h1 className={styles['title']}>
          Bem vindo a Pokedex no <strong>Next.js!</strong>
        </h1>

        <p className={styles['description']}>Lista de Pokémons</p>
        {DESCRIPTION_BY_ROUTE[description]}

        <div className={styles['grid']}>
          {pokemonList.map(({ name }) => (
            <Link key={name} href={`/pokemon/${name}`}>
              <a className={styles['card']}>
                <h2>
                  {name}
                  &rarr;
                </h2>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
