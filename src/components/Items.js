import React,{useState} from 'react'
import FruitCard from './FruitCard';

const Items = () => {
    const [fruits,setFruits] = useState([
        {
          id: 1,
          image: '1',
          name: 'Green Grapes',
          price: 100
        },
        {
          id: 2,
          image: '2',
          name: 'Pomegranate',
          price: 200
        },
        {
          id: 3,
          image: '3',
          name: 'Black Grapes',
          price: 250
        },
        {
          id: 4,
          image: '4',
          name: 'Grape Fruit',
          price: 300
        },
        {
          id: 5,
          image: '5',
          name: 'Berry',
          price: 250
        },
        {
          id: 6,
          image: '6',
          name: 'lemon',
          price: 150
        }
      ])
  return (
    <section className='w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 my-10 py-10'>
        {
            fruits.map((fruit) => {
                return <FruitCard key={fruit.id} fruit={fruit} />
            })
        }
    </section>
  )
}

export default Items