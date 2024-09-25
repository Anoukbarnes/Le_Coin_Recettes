import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ajouterAbonne } from '../Store/abonnesSlice'

const FormulaireAbonnes = () => {

  const infosAbonne = useSelector((state)=>state.abonnes.informationsAbonne)
  const dispatch = useDispatch();

  const [abonnes, setAbonnes] = useState({
    nom: "",
    email: ""
  });

  const [erreurs, setErreurs] = useState({
    nom: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'nom') {
      setAbonnes({ ...abonnes, [name]: capitalizeWords(value) });
    } else {
      setAbonnes({ ...abonnes, [name]: value });
    }
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valider()) {
      console.log("Formulaire soumis", abonnes);
      dispatch(ajouterAbonne(abonnes))
    }
  }

  const valider  = () => {
    
    let erreurs = {};

    if (abonnes.nom.trim() === "") {
      erreurs.nom = "Veuillez entrer un nom" ;
    } else if (abonnes.nom.length <2) {
      erreurs.nom = "Plus d'un caractères requis" ;
    }
    
    if (abonnes.email.trim() === "") {
      erreurs.email = "Veuillez entrer une adressse courriel"
    }  else if (!checkEmail(abonnes.email)) {
      erreurs.email = "Veuillez entrer un courriel sous la forme de: exemple@mail.com"
    } else if (verifieEmail(abonnes.email) == true) {
      erreurs.email = "Cette adresse email existe déjà."
    }

    setErreurs(erreurs);
    return Object.keys(erreurs).length === 0;

  }
  
// Vérifie que le email est valide
  function checkEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

//Vérifie que le email est unique

  const verifieEmail = (email) => {
    let existe = infosAbonne.find((abonne) => abonne.email === abonnes.email);
    return existe == undefined ? false : true;
  }

  function capitalizeWords(string) {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  return (
    <div className='text-white'>
        <p>S'abonner aux nouvelles de Coin Recettes</p>
        <form className="mt-6 w-full" onSubmit={handleSubmit} noValidate>
            <div className="rounded-md border-yellow-100 border-2 bg-white p-2 focus-within:ring my-4">
              <label htmlFor="Nom" className="sr-only"> Prénom et Nom </label>
              <input
              type="text"
              name="nom"
              placeholder="Prénom et Nom"
              value={abonnes.nom}
              onChange={handleChange}
              className="w-full border-none focus:border-transparent focus:ring-transparent text-purple-950 sm:text-sm"
              />
              {erreurs.nom && <span className='text-red-600 text-sm'>{erreurs.nom}</span>}
            </div>
            
            <div className="rounded-md border-yellow-100 border-2 bg-white p-2 focus-within:ring my-4">
              <label htmlFor="UserEmail" className="sr-only"> Email </label>
              <input
              type="email"
              name="email"
              placeholder="exemple@mail.com"
              className="w-full border-none text-purple-950 focus:border-transparent focus:ring-transparent sm:text-sm"
              value={abonnes.email}
              onChange={handleChange}
              />
              {erreurs.email && <span className='text-red-600 text-sm'>{erreurs.email}</span>}
            </div>

            <button
              className="col-span-12 mt-4 w-full rounded bg-yellow px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:text-red-400 hover:scale-105 transition duration-250 hover:bg-orange-200 sm:mt-0 sm:w-auto sm:shrink-0"
            >
              S'abonner
            </button>
      </form>
    </div>
  )
}

export default FormulaireAbonnes
