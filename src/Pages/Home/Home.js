import React from 'react'
import Explore from '../Explore'
import Product from '../Product'
import About from './About'
import Banner from './Banner'
import Review from './Review'

const Home = () => {
    return (
        <>
            <Banner />
            <Explore quantity={6}/>
            <Review />
            <About />
            
        </>
    )
}

export default Home
