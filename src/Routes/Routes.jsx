import { createBrowserRouter } from "react-router-dom";
import Racine from "../Racine";
import Accueil from '../Composants/Accueil'
import Erreur from "../Composants/Erreur";
import DetailsRecette from "../Composants/ContenuRecettes/DetailsRecette";
import RecettesCategorie from "../Composants/ContenuRecettes/RecettesCategorie";
import ListeAbonnes from "../Composants/ContenuAbonnes/Listeabonnes";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Racine />,
        children: [
          {
            path: "/",
            element: <Accueil />,
          },
          {
            path: "/recettes-categorie/:strCategory",
            element: <RecettesCategorie />,
          },
          {
            path: "/details-recette/:idMeal",
            element: <DetailsRecette />,
          },
          {
            path: "/liste-abonnes",
            element: <ListeAbonnes />,
          },
        ],
    },
    {
        path: "*",
        element: <Erreur />,
    },
]);

export default Routes;

