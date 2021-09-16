import axios from 'axios'
import { Home } from '../src/pages'

export async function getServerSideProps() {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/')

  return {
    props: {
      pokemonList: data.results,
      description: 'HOME',
    },
  }
}

export default Home
