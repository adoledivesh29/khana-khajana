import React from 'react'
import Carousel from '../common/Carousel'
import bakChickenWings from '../../assets/images/baked-chicken.png'

const FeaturedRecipes = () => {

    const recipes = [
        {
            title: 'Spicy delicious chicken wings',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: {
                src: bakChickenWings,
                alt: 'Plate of spicy chicken wings with red dipping sauce, tomatoes and basil',
            },
            cookTime: '30 Minutes',
            category: 'Chicken',
            author: {
                name: 'John Smith',
                avatar: 'https://i.pravatar.cc/48?img=5'
            },
            date: '15 March 2022',
        },
        {
            title: 'Spicy delicious chicken wings',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: {
                src: bakChickenWings,
                alt: 'Plate of spicy chicken wings with red dipping sauce, tomatoes and basil',
            },
            cookTime: '30 Minutes',
            category: 'Chicken',
            author: {
                name: 'John Smith',
                avatar: 'https://i.pravatar.cc/48?img=5'
            },
            date: '15 March 2022',
        },
        {
            title: 'Spicy delicious chicken wings',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: {
                src: bakChickenWings,
                alt: 'Plate of spicy chicken wings with red dipping sauce, tomatoes and basil',
            },
            cookTime: '30 Minutes',
            category: 'Chicken',
            author: {
                name: 'John Smith',
                avatar: 'https://i.pravatar.cc/48?img=5'
            },
            date: '15 March 2022',
        },
        {
            title: 'Spicy delicious chicken wings',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            image: {
                src: bakChickenWings,
                alt: 'Plate of spicy chicken wings with red dipping sauce, tomatoes and basil',
            },
            cookTime: '30 Minutes',
            category: 'Chicken',
            author: {
                name: 'John Smith',
                avatar: 'https://i.pravatar.cc/48?img=5'
            },
            date: '15 March 2022',
        }
    ]
    return (
        <div>
            <Carousel slides={recipes} />
        </div>
    )
}

export default FeaturedRecipes