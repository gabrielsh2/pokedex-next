import axios from 'axios'
import { Home } from '../../src/pages'

let offset = 0

export async function getStaticProps() {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`
  )
  offset += 20

  return {
    props: {
      pokemonList: data.results,
      description: 'POKEMON',
    },
    revalidate: 10,
  }
}

export default Home
