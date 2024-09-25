import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../img/carousel-1.jpg';
import image2 from '../../img/carousel-2.jpg';
import image3 from '../../img/carousel-3.jpg';
import image4 from '../../img/carousel-4.jpg';
import image5 from '../../img/carousel-5.jpg';
import image6 from '../../img/carousel-6.jpg';

const CarouselPage = () => {
  return (
    <Carousel className='pt-20'>
      <div>
        <img src={image1} alt="Carousel 1" />
       </div>
       <div>
         <img src={image2} alt="Carousel 2"/>
       </div>
      <div>
        <img src={image3} alt="Carousel 3"/>
     </div>
     <div>
         <img src={image4} alt="Carousel 4"/>
      </div>
      <div>
        <img src={image5} alt="Carousel 5"/>
      </div>
      <div>
        <img src={image6} alt="Carousel 6"/>
      </div>
   </Carousel>
  );
};
export default CarouselPage
