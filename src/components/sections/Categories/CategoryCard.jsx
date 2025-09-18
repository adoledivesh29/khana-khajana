import React from 'react'

const CategoryCard = ({ category }) => {
    return (
        <div className="category-card">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
        </div>
    )
}

export default CategoryCard