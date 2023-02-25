import Carousel, { CarouselItem } from "./Carousel/Carousel";
import { usRef } from 'react'

import Banner from './Banner/Banner'
import Statistics from './Statistics/Statistics'
import img1 from '../../images/sliderimg/slideimg1.jpg';
import img2 from '../../images/sliderimg/slideimg2.jpg';
import img3 from '../../images/sliderimg/slideimg3.jpg';
import img4 from '../../images/sliderimg/slideimg4.jpg';
import img5 from '../../images/sliderimg/slideimg5.jpg';


export default function Home(){
  return <div id="home">
  
   {/* <div className="slider">
   <Carousel>
        <CarouselItem >
        <img className="slider-img img-fluid" src={img1}></img>
        </CarouselItem>
        <CarouselItem>
        <img className="slider-img img-fluid" src={img2}></img>
        </CarouselItem>
        <CarouselItem>
        <img className="slider-img img-fluid" src={img3}></img>
        </CarouselItem>
      </Carousel>  
   </div> */}
   <Banner />
   <Statistics />

  </div>
}