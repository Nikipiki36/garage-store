import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk, faOdnoklassnikiSquare } from '@fortawesome/free-brands-svg-icons';

import logo from '../assets/images/logo.png';

function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-10">
      <div className="container mx-auto">
        <div className='flex justify-center items-center p-2 mb-5'>
          <img src={logo} className="invert" id="logo" style={{ height: "80px" }} />
        </div>
        <div className="flex justify-center items-center">
          <a href="#" className="text-lg font-bold mx-6 hover:text-gray-400">Запчасти</a>
          <a href="#" className="text-lg font-bold mx-6 hover:text-gray-400">О нас</a>
          <a href="#" className="text-lg font-bold mx-6 hover:text-gray-400">Контакты</a>
        </div>
        <div className="flex justify-center items-center mt-8">
          <a href="#" className="mx-2 hover:text-gray-400">
            <FontAwesomeIcon icon={faOdnoklassnikiSquare} size="2x" />
          </a>
          <a href="#" className="mx-2 hover:text-gray-400">
            <FontAwesomeIcon icon={faVk} size="2x" />
          </a>
          
        </div>
        <div className="text-center mt-8">
          &copy; 2023 Garage Store
        </div>
      </div>
    </footer>
  );
}

export default Footer;