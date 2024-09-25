import React from 'react';
import { useOutletContext } from 'react-router-dom';
import ListeCategories from '../Composants/ContenuRecettes/ListeCategories';
import CarouselPage from './Carousel/CarouselPage';
import '../index.css'


const Accueil = () => {
  const { categories } = useOutletContext();

  return (
    <>
      <div className='bg-beige pb-24'>
        <div className='container mx-auto lg:py-10 px-6'>
          <div className='flex flex-col items-center  lg:flex-row lg:justify-between lg:items-center xl:justify-center mx-auto'>
            <div className='w-full sm:w-10/12  lg:w-6/12 xl:w-5/12'>
              <CarouselPage />
            </div>
            <div className='w-full md:w-8/12 lg:w-6/12'>
              <h1 className='titles text-5xl xl:text-8xl text-center mt-8'>Le Coin Recettes</h1>
              <div className='flex justify-center mt-8 hover:scale-105 transition duration-250'>
                <a href="#categories" className='buttons uppercase'>Découvrir nos catégories</a>
              </div>
            </div>
          </div>
          
    </div>
    </div>
    
      
      <div className='bg-orange'>
      <div className="custom-shape-divider-bottom-1726084549">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
      </div>
        <div className='container mx-auto lg:pt-10 pb-32 px-6'>
          <h2 id='categories' className='titles text-4xl sm:text-5xl xl:text-8xl text-center pt-40 pb-16 mx-auto text-white'>Nos catégories de recettes</h2>
          <div className='grid grid-cols-12 gap-2 lg:gap-10 mx-auto'>
            {categories.map((categorie) => (
              <div key={categorie.idCategory} className='rounded-xl col-span-10 col-start-1 sm:col-start-2 md:col-span-8 md:col-start-3 md:my-6 lg:col-span-4 xl:col-span-3 bg-slate-50 hover:scale-105 transition duration-250'>
                <ListeCategories categorie={categorie} />
              </div>
            ))}
          </div>
        </div>
       
      </div>
    
    
    </>
  );
};

export default Accueil;