import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../img/logo.png'

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    <nav className='bg-orange navbar p-6'>
      <div className="hidden lg:flex items-center justify-evenly">
        <div className="flex-1">
          <NavLink
            to="/" 
            end
            className={({ isActive }) => 
              isActive ? 'inline-block underline mr-4' : 'inline-block lg:mt-0 white mr-4'
            } 
          >
            Accueil
          </NavLink>
          <NavLink
            to="/#categories" 
            end
            className={({ isActive }) => 
              isActive ? 'inline-block underline mr-4' : 'inline-block lg:mt-0 white mr-4'
            }
          >
            Nos Catégories
          </NavLink>
        </div>

        <div className="flex-1 flex justify-center">
          <NavLink to="/" end>
            <div className='flex flex-col items-center'>
              <img src={logo} alt="Logo" />
              <h1 className='logo'>Le coin Recettes</h1>
            </div>
          </NavLink>
        </div>
        
        <div className='flex-1 flex justify-end navbar'>
          <NavLink
            to="/liste-abonnes" 
            end
            className={({ isActive }) => 
              isActive ? 'inline-block underline' : 'inline-block lg:mt-0 white'
            }
          >
            Liste des abonnés
          </NavLink>
        </div>
      </div>

      {/* Menu Hamburger mobile */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between">
          <button 
            onClick={toggleMenu} 
            className="focus:outline-none"
          >
            <i 
              className={`fa-solid ${visible ? 'fa-times' : 'fa-bars'} fa-xl`}
            ></i>
          </button>
        </div>

        {visible && (
          <div className="mt-4">
            <div className="flex flex-col">
              <NavLink
                to="/" 
                end
                className={({ isActive }) => 
                  isActive ? 'block underline mb-2' : 'block white mb-2'
                } 
              >
                Accueil
              </NavLink>
              <NavLink
                to="/#categories" 
                end
                className={({ isActive }) => 
                  isActive ? 'block underline mb-2' : 'block white mb-2'
                }
              >
                Nos Catégories
              </NavLink>
              <NavLink
                to="/liste-abonnes" 
                end
                className={({ isActive }) => 
                  isActive ? 'block underline mb-2' : 'block white mb-2'
                }
              >
                Liste des abonnés
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar;