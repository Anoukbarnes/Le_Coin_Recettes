import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { supprimerAbonne } from '../Store/abonnesSlice';

const CarteAbonnes = () => {

  const infosAbonne = useSelector((state)=>state.abonnes.informationsAbonne)
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(supprimerAbonne(index));
  };

  return (
    
    <div className='grid grid-cols-12 lg:gap-16 gap-5 px-10 container mx-auto py-20'>
      {infosAbonne.map((information, index) => (
        <div
          key={index}
          className='bg-slate-200 text-center rounded-lg lg:col-span-4 sm:col-span-6 col-span-12 card py-10'
          >
          <div className='pt-4'>
            <p className='text-md font-bold  py-2'>Nom:</p>
            <p>{information.nom}</p>
          </div>
          <div className='pt-4 pb-8'>
            <p className='text-md py-2'>Courriel:</p>
            <p>{information.email}</p>
          </div>
          <button
            className='mt-8 mb-4 p-2 buttons hover:scale-105 transition duration-250'
            onClick={() => handleDelete(index)}
          >
            Supprimer
          </button>
        </div>
      ))}
</div>


  )
}

export default CarteAbonnes
