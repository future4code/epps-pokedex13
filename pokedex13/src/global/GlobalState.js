import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {baseURL} from '../parameters/baseURL'
import GlobalStateContext from '../contexts/GlobalStateContext'
import { Link } from 'react-router-dom'

const GlobalState = (props) => {
  const [pokemonsNameList, setPokemonsNameList] = useState([])
  // const [pokemonsDetails, setPokemonsDetails] = useState([])
  const [myPokemons, setMyPokemons] = useState([])
  const [url, setUrl] = useState('')

  useEffect(() =>  {
    getPokemons()
  }, [])

  const getPokemons = () => {
    axios.get(`${baseURL}`)
      .then((res) => {
        setPokemonsNameList(res.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const removePokemon = (itemRemove) => {
    if (window.confirm('Deseja remover este Pokémon?')) {
    const index = states.myPokemons.findIndex((i) => i.name === itemRemove.name)
    let newList = [... states.myPokemons]
    if (newList[index].amount === 1) {
      newList.splice(index, 1)
    } else {
      newList[index].amount -= 1
    }
    setters.setMyPokemons(newList)
  }
}

  const addPokemon = (item) => {
    const index = states.myPokemons.findIndex((i) => i.name === item.name)
    let newList = [...states.myPokemons]

    if (index === -1) {
      newList.push({... item, amount: 1})
      console.log(states.myPokemons[index])
      alert('Pokémon adicionado com sucesso!')
    } else {
      alert('Pokémon já adicionado à pokedex!')
    } 

    setters.setMyPokemons (newList)
  }

  const goToDetails = (pokemon) => {
    // <Link to='/details' />
  }

  const states = {pokemonsNameList, myPokemons, url}
  const setters = {setPokemonsNameList, setMyPokemons, setUrl}
  const requests = {getPokemons, addPokemon, removePokemon}
  const data = {states, setters, requests}

  return(
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  )

}

export default GlobalState
