import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Grid } from '@material-ui/core'
import SimpleCard from '../../components/card/SimpleCard'

import { baseURL } from '../../parameters/baseURL'

const Home = () => {
  const [pokemonsList, setPokemonsList] = useState([])

  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = () => {
    axios.get(`${baseURL}`)
      .then((res) => {
        setPokemonsList(res.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const list = pokemonsList.map((pokemon) => {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <SimpleCard
          pokemon={pokemon}
        />
      </Grid>
    )
  })

  return (
    <div>
      <h1>Home Page</h1>
      <Grid container spacing={3}>
        {list}
      </Grid>
    </div>
  )
}

export default Home