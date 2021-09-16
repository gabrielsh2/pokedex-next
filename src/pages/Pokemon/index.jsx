/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './style.module.css'
import axios from 'axios'

export function Pokemon() {
  const [pokemonData, setPokemonData] = useState({})
  const [pokemonImage, setPokemonImage] = useState('')
  const router = useRouter()
  const { name = '' } = router.query

  useEffect(() => {
    async function fetchData() {
      if (name) {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        )
        const id = '000'.substring(0, 3 - data.id.toString().length) + data.id

        setPokemonData(data)
        setPokemonImage(
          `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${id}.png`
        )
      }
    }

    fetchData()
  }, [name])

  return (
    <div className={styles['container']}>
      <main className={styles['main']}>
        <h1 className={styles['title']}>{pokemonData?.name}</h1>
        <p className={styles['description']}>
          Requisição das imagens feitas no Client Side
        </p>
        <p className={styles['description']}>
          A primeira imagem utiliza a tag <code>{'<img/>'}</code>, a segunda
          utiliza o componente <code>{'<Image/>'}</code> do Next
        </p>
        <img
          src={pokemonImage}
          alt={pokemonData?.name}
          className={styles['image']}
        />
        {pokemonImage && (
          <Image
            src={pokemonImage}
            alt={pokemonData?.name}
            width='500'
            height='500'
          />
        )}
      </main>
    </div>
  )
}
