import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {baseURL} from '../parameters/baseURL'
import GlobalStateContext from '../contexts/GlobalStateContext'

const GlobalState = (props) => {
  const [pokemonsNameList, setPokemonsNameList] = useState([])
  const [pokemonsDetails, setPokemonsDetails] = useState([])

  useEffect(() =>  {
    getPokemons()
  }, [])

  useEffect(() =>{
    const newList = [] 
    pokemonsNameList.forEach((pokemon) => {
      axios.get(pokemon.url)
      .then((res) => {
        newList.push(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
    })
    setPokemonsDetails(newList)
  }, [pokemonsNameList])


  const getPokemons = () => {
    axios.get(`${baseURL}`)
      .then((res) => {
        setPokemonsNameList(res.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }


  const states = {pokemonsNameList, pokemonsDetails}
  const setters = {setPokemonsNameList, setPokemonsDetails}
  const requests = {getPokemons}
  const data = {states, setters, requests}

  return(
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  )

}

export default GlobalState
