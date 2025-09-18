import React from 'react'
import FeaturedRecipes from '../../components/sections/FeaturedRecipes'
import Categories from '../../components/sections/Categories/Categories'

const Home = () => {
    return (
        <div>
            <FeaturedRecipes />
            <Categories />
        </div>
    )
}

export default Home