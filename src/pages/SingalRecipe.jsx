import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const SingalRecipe = () => {
  const [productRecipe, setproductRecipe] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios(`https://dummyjson.com/recipes/${id}`)
      .then(responce => {
        console.log(responce.data);
        setproductRecipe(responce.data)
      }).catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <section className="text-gray-600 body-font">
        <div
          className="container mx-auto flex px-5 py-14 items-center justify-center flex-col"
          bis_skin_checked={1}
        >
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={productRecipe.image}
          />
          <div className="text-center lg:w-2/3 w-full" bis_skin_checked={1}>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {productRecipe.name}
            </h1>
            <h1 className='text-4xl font-bold text-black'>instructions</h1>
            <p className="mb-8 mt-3 leading-relaxed text-black">
              {productRecipe.instructions}
            </p>
            <div className="flex justify-center gap-3" bis_skin_checked={1}>
              <Button variant='contained' color='warning'>
                <Link to="/">
                  Go Back
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default SingalRecipe
