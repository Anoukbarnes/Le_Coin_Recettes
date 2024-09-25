import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InstructionsRecette from './InstructionsRecette';

const DetailsRecette = () => {

    const { idMeal } = useParams();

    const [recetteDetails, setRecetteDetails] = useState([]);


    useEffect(() => {
        console.log("Début du fetch");
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
        .then((response) => {
            console.log("Réponse reçue:", response);
            return response.json();
        })
        .then((data) => {
            console.log("Données reçues:", data);
            if (data.meals) {
                console.log("Nombre de recettes:", data.meals.length);
                setRecetteDetails(data.meals);
            } else {
                console.log("Pas de recettes trouvées dans les données");
                setRecetteDetails([]);
            }
        })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    
    return (
        <div>
            <div>
            {recetteDetails.map((detail) => (
                <InstructionsRecette key={detail.idMeal} detail={detail} />
            ))}
            </div>
        </div>
    );
    }

export default DetailsRecette
