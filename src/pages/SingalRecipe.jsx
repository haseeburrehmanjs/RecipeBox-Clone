import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'

const SingalRecipe = () => {

  const {id} = useParams()

  useEffect(()=>{
    axios(`https://dummyjson.com/recipes/${id.data}`)
    .then(responce => {
      console.log(responce);
    }).catch(err => {
      console.log(err);
      
    })
  },[])
  
  return (
    <div>
      Racepi page
    </div>
  )
}

export default SingalRecipe
