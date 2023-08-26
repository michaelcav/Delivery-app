import { CategoryType, FeaturedType, DishType, RestaurantType } from '../types/interfaces'

// import PizzaIcon from '../assets/images/pizzaIcon.png';
// import Burguer from '../assets/icons/burguer.png';
// import Pizza from '../assets/icons/Pizza.png'
// import Galeto from '../assets/icons/Galeto.png'
// import FrutosDoMar from '../assets/icons/FrutosDoMar.png'
// import Snack from '../assets/icons/Snack.png'
// import Cafe from '../assets/icons/Cafe.png'
// import Sorvete from '../assets/icons/Sorvete.png'
// import Sobremesa from '../assets/icons/Sobremesas.png'
// import Drinks from '../assets/icons/Drinks.png'


export const categories: CategoryType[] = [
    {
        id: 1,
        name: 'Hambúrguer',
        image: require('../assets/icons/burguer.png')
    },
    {
        id: 2,
        name: 'Pizza',
        image: require('../assets/icons/Pizza.png')
    },
    {
        id: 3,
        name: 'Carne',
        image: require('../assets/icons/Galeto.png')
    },
    {
        id: 4,
        name: 'Snacks',
        image: require('../assets/icons/Snack.png')
    },
    {
        id: 5,
        name: 'Sobremesa',
        image: require('../assets/icons/Sobremesas.png')
    },
    {
        id: 6,
        name: 'Drinks',
        image: require('../assets/icons/Drinks.png')
    },

]


export const featured: FeaturedType = {
    id: 1,
    title: 'Hot and Spicy',
    description: 'soft and tender fried chicken',
    restaurants: [
        {
            id: 1,
            name: 'Papa Johns',
            image: require('../assets/images/pizza.png'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image: require('../assets/images/pizzaDish.png')
                },
                {
                    id: 2,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image: require('../assets/images/pizzaDish.png')
                },
                {
                    id: 3,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image: require('../assets/images/pizzaDish.png')
                },
            ]

        },
        {
            id: 2,
            name: 'Papa Johns',
            image: require('../assets/images/pizza.png'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image: require('../assets/images/pizzaDish.png')
                },
                {
                    id: 2,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image: require('../assets/images/pizzaDish.png')
                },
                {
                    id: 3,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image: require('../assets/images/pizzaDish.png')
                },
            ]

        },
        {
            id: 3,
            name: 'Papa Johns',
            image: require('../assets/images/pizza.png'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                    id: 1,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image: require('../assets/images/pizzaDish.png')
                },
                {
                    id: 2,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image: require('../assets/images/pizzaDish.png')
                },
                {
                    id: 3,
                    name: 'pizza',
                    description: 'cheezy garlic pizza',
                    price: 10,
                    image: require('../assets/images/pizzaDish.png')
                },
            ]

        }
    ]
}
