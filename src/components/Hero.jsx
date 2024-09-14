import { Button } from '@mui/material'
import React from 'react'

const Hero = () => {
    return (
        <>
            <div className=' relative text-center text-white overflow-hidden bg-black'>
                <img id='hero-img' className='h-[100vh] w-[100%]' src="https://firebasestorage.googleapis.com/v0/b/image-to-url-converter-9483c.appspot.com/o/haseeburrehmanjs%40gmail.com%20%2B%201726284330401?alt=media&token=c6755713-d158-4a74-bb13-c21eefcef2a0" alt="" />
                <div className='absolute top-[30%] left-[50%] translate-x-[-50%] translate-y=[-50%]'>
                    <h1 id='hero-text' className='text-white text-5xl drop-shadow-lg font-bold'>Store, organize, and <br /> shop your favorite recipes <br />for free.</h1>
                    <Button onClick={() => alert('this function is coming soon')} sx={{ marginTop: 3 }} variant="contained" color="warning">Join Free</Button>
                </div>
            </div>
        </>
    )
}

export default Hero
