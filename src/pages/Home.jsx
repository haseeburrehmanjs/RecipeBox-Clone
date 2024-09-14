import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Button } from '@mui/material'
import Hero from '../components/Hero'
import axios from 'axios'
import RecipeReviewCard from '../components/RecipeCard'

const Home = () => {
    const [AllRecipe, setAllRecipe] = useState([])

    useEffect(() => {
        axios('https://dummyjson.com/recipes')
            .then(responce => {
                console.log(responce.data.recipes);
                setAllRecipe(responce.data.recipes)
            }).catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <>
            <Hero />
            <Header />
            <div className='container mx-auto'>
                {AllRecipe.length > 0 ? <div className='flex justify-center flex-wrap gap-20 mt-20'>{AllRecipe.map((item,index) => {
                    return <RecipeReviewCard key={item.id} item={item}/>
                })}</div> : <h1>Loading...</h1>}
            </div>
        </>
    )
}

export default Home
