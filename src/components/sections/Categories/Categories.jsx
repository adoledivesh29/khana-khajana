import React from 'react'
import CategoryCard from './CategoryCard'
import breakfast from '../../../assets/images/categories/breakfast.png'
import vegan from '../../../assets/images/categories/vegan.png'
import meat from '../../../assets/images/categories/meat.png'
import dessert from '../../../assets/images/categories/dessert.png'
import lunch from '../../../assets/images/categories/lunch.png'
import chocolate from '../../../assets/images/categories/chocolate.png'


const categories = [
    {
        name: 'Breakfast',
        image: breakfast,
    },
    {
        name: 'Vegan',
        image: vegan,
    },
    {
        name: 'Meat',
        image: meat,
    },
    {
        name: 'Desserts',
        image: dessert,
    },
    {
        name: 'Lunch',
        image: lunch,
    },
    {
        name: 'Chocolate',
        image: chocolate,
    }
]

const Categories = () => {
    return (
        <div className="categories-container">
            <div className="header">
                <h1>Categories</h1>
                <button> View All Categories</button>
            </div>
            <div className="categories-list">
                {categories.map((category) => (
                    <CategoryCard category={category} key={category.name} />
                ))}

            </div>
        </div>
    )
}

export default Categories   