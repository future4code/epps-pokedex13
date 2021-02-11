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

  const details = states.pokemonsDetails.map((pokemon) => {
    return (
      <p>{pokemon.id} </p>
      
    )
  })
  console.log(details)
  return (
    <div>
      {states.pokemonsNameList.length === 0 ? 
        <p>Carregando...</p> : 
          states.pokemonsNameList.map((pokemon) => {
            return (
              <div key={pokemon.name}>
                <SimpleCard pokemon={pokemon} />
              </div>
            )
          })
        }
    </div>
  )
}

export default Home