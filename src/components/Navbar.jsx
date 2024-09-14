import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='bg-orange-500 p-5 shadow-lg text-white'>
        <div className='mx-[5px] flex justify-between items-center'>
          <Typography variant='h5' fontWeight={500}>RecipeBox</Typography>
          <ul id='list' className='flex gap-2'>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='about'>ABOUT</Link></li>
            <li><Link to='contact'>CONTACT</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
