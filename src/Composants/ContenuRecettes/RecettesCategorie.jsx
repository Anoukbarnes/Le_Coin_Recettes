import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Recettes from './Recettes';

const RecettesCategorie = () => {

    const [recettes, setRecettes] = useState([]);

    const navigate = useNavigate()
    const { strCategory } = useParams();

    const handleClickCategories = () => {
      navigate("/#categories")
  }

    useEffect(() => {
      console.log("Début du fetch");
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`)
      .then((response) => {
          console.log("Réponse reçue:", response);
          return response.json();
      })
      .then((data) => {
          console.log("Données reçues:", data);
          if (data.meals) {
              console.log("Nombre de recettes:", data.meals.length);
              setRecettes(data.meals);
          } else {
              console.log("Pas de recettes trouvées dans les données");
              setRecettes([]);
          }
      })
        .catch((error) => {
          console.log(error);
        });
    }, []);

 
  return (
    <div className='container mx-auto py-10'>
      <div className='flex justify-center text-sm mx-4 lg:justify-end lg:mr-6 mb-10'>
          <button onClick={handleClickCategories} className='buttons'>
              Retour à la liste des catégories
          </button> 
      </div>
      <div className='text-4xl sm:text-5xl lg:text-5xl text-center pt-20 lg:pt-10 pb-16 titles'>
        <h2>Recettes pour la catégorie</h2>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl text-yellow py-20'>{strCategory}</h1>
      </div>
      <div className='grid grid-cols-12 lg:gap-16 gap-5 px-10'>
           {recettes.map((recette) => (
           <div key={recette.idMeal} className='col-span-12 sm:col-span-6 lg:col-span-4 2xl:col-span-3 rounded-xl hover:scale-105 transition duration-250'>
              <Recettes recette={recette} />
          </div>
          ))}
      </div>
    </div>
    
  )
}

export default RecettesCategorie
