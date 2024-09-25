import React from 'react';
import FormulaireAbonnes from './ContenuAbonnes/FormulaireAbonnes';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill-wave"></path>
        </svg>
      </div>
      <footer className="bg-purple relative pt-36 lg:pb-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 container mx-autolg:grid">
            <div className="border-b border-gray-100 lg:col-span-6 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16 col-span-12 mx-auto">
              <div className="mt-8 space-y-4 lg:mt-0">
                <span className="hidden h-1 w-10 rounded bg-white lg:block"></span>
                <div className='titles'>
                  <h2 className="text-2xl text-white">S'abonner à Le coin Recettes</h2>
                </div>
                <FormulaireAbonnes />
              </div>
            </div>
            <div className="py-8 lg:py-20 lg:pe-16 col-span-12 lg:col-span-6 mx-auto">
              <div className="mt-8">
                <div className="flex justify-center titles text-white lg:justify-start">
                  <p className='text-xl'> Le Coin Recettes</p> 
                </div>
                <div className='col-span-12'>
                  <p className="mt-6 max-w-md text-center leading-relaxed text-white lg:text-left">
                    Des recettes pour tous les jours et tous les goûts.
                  </p>
                </div>
              </div>
              <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-start pt-16 lg:gap-12 col-span-6 text-white">
                <li>
                  <a className=" transition hover:text-red-400" href="/"> Accueil </a>
                </li>
                <li>
                  <a className=" transition hover:text-red-400" href="/#categories"> Nos Catégories </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;