import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

import { Grid } from '@material-ui/core'
import SimpleCard from '../../components/card/SimpleCard'
import GlobalState from '../../global/GlobalState'
import GlobalStateContext from '../../contexts/GlobalStateContext'

const Home = () => {
  const { states, setters, requests } = useContext(GlobalStateContext)

  useEffect(() => {
    requests.getPokemons()
  }, [])

  const list = states.pokemonsNameList && 
    states.pokemonsNameList.map((pokemon) => {
      return (
        <Grid item xs={12} sm={6} md={4}>
          <SimpleCard 
            key={pokemon.url}
            name={pokemon.name}
            url={pokemon.url}
          />
        </Grid>
      )
    })

    console.log(states.pokemonsNameList)

  return (
    <div>
      {/* {states.pokemonsNameList.length === 0 ? 
        <p>Carregando...</p> : 
          {list}
      } */}
      <h1>Home Page</h1>
      <Grid container spacing={3}>
        {list}
      </Grid>
    </div>
  )
}

export default Home