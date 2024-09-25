import React from 'react'
import { useNavigate } from 'react-router-dom'

const InstructionsRecette = ( {detail}) => {

    const navigate = useNavigate()

    const handleClickListeCategories = () => {
        navigate(`/recettes-categorie/${detail.strCategory}/`)
    }

    const handleClickCategories = () => {
        navigate("/#categories")
    }

    const ingredientsMesures = Array.from({ length: 20 }, (_,i) => i + 1);

  return (
    <div className='grid grid-cols-12 container mx-auto'>
        <div className='col-span-12 text-center max-w-screen-2xl pt-20 pb-6'>
             <h1 className='titles text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>{detail.strMeal}</h1>
        </div>
        <div className='col-span-12 py-6 flex flex-col lg:flex-row lg:justify-between lg:items-center'>
            <div className='w-full px-6 lg:w-9/12 lg:pt-20'>
                <img className='rounded-2xl' src={detail.strMealThumb}></img>
            </div>
            <div className='lg:w-6/12 flex flex-col items-center lg:justify-center mx-auto'>
                <div>
                    <h2 className='py-6 titles-cards'>Ingrédients: </h2>
                </div>
                <div>
                    <ul className='pt-1 text-normal md:text-xl'>
                    {ingredientsMesures.map(index => {
                        const ingredient = `strIngredient${index}`;
                        const mesure = `strMeasure${index}`;

                        if (detail[ingredient] && detail[ingredient].trim()) {
                        return (
                            <li key={ingredient} className='my-2'>
                                <input type="checkbox" id={ingredient} className='mr-6' />
                                <label htmlFor={ingredient}>
                                {detail[mesure]} {detail[ingredient]}
                            </label>
                            </li>
                        );
                        }
                        return null;
                    })}
                    </ul>
                </div>
            </div>
        </div>
             
        <div className='col-span-12 lg:col-start-2 lg:col-span-10 pt-10 mx-auto'>
            <div className='col-span-12'>
                <h3 className='titles-cards text-center py-6'>Instructions: </h3>
            </div>
            <div className='p-10'>
            {detail.strInstructions .split('.').map((sentence, index) => (
                <p key={index} className='text-center md:text-justify md:text-lg leading-relaxed pb-4'>
                    {sentence.trim()}.
                </p>
                ))
            }
            </div>
        </div>

        <div className='col-span-12 pb-32 grid grid-cols-12 gap-4'>
            <div className='col-span-10 col-start-2 sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-2 lg:col-start-3 lg:col-span-4 xl:col-start-4'>
                <button onClick={handleClickListeCategories} className='buttons'>
                    Retour à la catégorie {detail.strCategory}
                </button>
            </div>
            <div className='col-span-10 col-start-2 sm:col-span-6 md:col-span-6 sm:col-start-7 lg:col-start-7 lg:col-span-4 xl:col-start-8'>
                <button onClick={handleClickCategories} className='buttons'>
                    Retour à la liste des catégories
                </button> 
            </div>
        </div>
</div>


  )
}

export default InstructionsRecette
