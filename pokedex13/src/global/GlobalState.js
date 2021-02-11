import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {baseURL} from '../parameters/baseURL'
import GlobalStateContext from '../contexts/GlobalStateContext'

const GlobalState = (props) => {
  const [pokemonsNameList, setPokemonsNameList] = useState([])
  // const [pokemonsDetails, setPokemonsDetails] = useState([])
  const [myPokemons, setMyPokemons] = useState([])
  const [url, setUrl] = useState('')

  useEffect(() =>  {
    getPokemons()
  }, [])

  // useEffect(() => {
  //   const newList = [] 
  //   pokemonsNameList.forEach((pokemon) => {
  //     axios.get(pokemon.url)
  //     .then((res) => {
  //       newList.push(res.data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  //   })
  //   setPokemonsDetails(newList)
  // }, [pokemonsNameList])


  const getPokemons = () => {
    axios.get(`${baseURL}`)
      .then((res) => {
        setPokemonsNameList(res.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const addPokemon = (item) => {
    console.log("my Pokemons", myPokemons)
    const index = states.pokemonsNameList.findIndex((i) => i.name === item.name)
    const newList = [...states.myPokemons]

    if (index !== -1) {
      newList.push(states.pokemonsNameList[index])
      console.log(states.pokemonsNameList[index])
      alert('Pokémon adicionado com sucesso!')
    } else {
      alert('Pokémon já adicionado à pokedex!')
    } 

    setters.setMyPokemons (newList)
    console.log("newList", newList)

  }

  const removePokemon = (item) => {
    
  }

  const states = {pokemonsNameList, myPokemons, url}
  const setters = {setPokemonsNameList, setMyPokemons, setUrl}
  const requests = {getPokemons, addPokemon}
  const data = {states, setters, requests}

  return(
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  )

}

export default GlobalState
