import './App.css';

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';


import 'swiper/css';
import 'swiper/css/navigation';

import Slide1 from './assets/images/slide1.jpg'
import Slide2 from './assets/images/slide2.jpeg'

import Header from './components/Header'
import Footer from './components/Footer'
import ProductsList from './components/ProductsList'

SwiperCore.use([Autoplay]);
function App() {
  return (
    <div>
      <Header />
      <Swiper autoplay={{
                  delay: 5000,
                  disableOnInteraction: false
                }} 
              className="mySwiper" style={{ height: "600px" }}>
        <SwiperSlide>
          <img src={Slide1}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2}></img>
        </SwiperSlide>
      </Swiper>
      <ProductsList />
      <Footer />
    </div>
  );
}

export default App;
