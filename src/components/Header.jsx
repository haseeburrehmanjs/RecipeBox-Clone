import { Box } from '@mui/material'
import React from 'react'

const Header = () => {
    return (
        <>
            <div className='container mx-auto flex flex-wrap items-center justify-center gap-[100px] mt-[60px]'>
                <div>
                    <h1 className='text-4xl'>Save recipes from <br /> anywhere.</h1>
                    <p className='mt-8 text-[20px]'>RecipeBox keeps just the recipe to let you focus <br />  on cooking. For the best experience, and the<br />  ability to save from mobile apps, use our iOS and<br />  Android apps.</p>
                    <div className='flex items-center mt-5'>
                        <img className='w-[150px]' src="https://www.recipebox.com/img/download-on-the-app-store-badge.svg" alt="" />
                        <img className='w-[180px]' src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="" />
                    </div>
                </div>
                <div>
                    <img className='h-[500px]' src="https://www.recipebox.com/assets/img/app-recipes-screenshots.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Header