import React from 'react'
import { Link } from 'react-router-dom'

const ListeCategories = ({categorie}) => {
  
  return (
    <Link to={`/recettes-categorie/${categorie.strCategory}`}>
      <div className='card w-full mt-auto shadow-lg'>
        <div className='px-5 py-10 flex flex-col items-center'>
            <img src={categorie.strCategoryThumb} />
        </div>
        <div className='pb-6 px-5 bg-yellow'>
           <h2 className='mt-auto text-xl text-center pt-16 pb-4 titles-cards'>{categorie.strCategory}</h2>
        </div>
      </div>
    </Link>
  )
}

export default ListeCategories