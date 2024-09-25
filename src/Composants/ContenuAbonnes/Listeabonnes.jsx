import React from 'react'
import CarteAbonnes from './CarteAbonnes'

const Listeabonnes = () => {
  return (
    <div>
      <div className='grid grid-cols-12 container mx-auto py-24'>
         <h1 className='col-span-12 titles text-4xl sm:text-5xl lg:text-6xl leading-loose text-center'>Liste des abonnés</h1>
      </div>
      <div className='col-span-12 text-xl font-semibold text-center'>
        <h2>Informations des abonnés :</h2>
      </div>
      <div className='pb-32'>
        <CarteAbonnes />
      </div>
        
    </div>
  )
}

export default Listeabonnes
