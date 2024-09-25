import React from 'react'
import { Link } from 'react-router-dom'

const Recettes = ({recette}) => {

  return (
    <Link to={`/details-recette/${recette.idMeal}`}>
        <div className='flex flex-col h-full card'>
          <img className='w-full rounded-t-xl' src={recette.strMealThumb} />
          <div className='flex-grow titles-cards bg-orange-100 px-5 rounded-b-xl pb-14 md:pb-10 lg:pb-8'>
            <h3 className='pt-10 pb-2 text-center text-xl'>{recette.strMeal}</h3>
          </div>
        </div>
    </Link>
  )
}

export default Recettes
