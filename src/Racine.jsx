import React from 'react'
import './index.css'
import NavBar from './Composants/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Composants/Footer'
import { useState, useEffect } from 'react'


const Racine = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); 

    return (
      <>
      <NavBar />
      <Outlet context={{ categories, setCategories }} />
      <Footer />
      </>
    )
  }
  
export default Racine