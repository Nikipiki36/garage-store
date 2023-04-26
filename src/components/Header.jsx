import React from 'react';
import logo from '../assets/images/logo.png';

function Header() {
  return (
    <header className="bg-zinc-800 text-zinc-100">
      <div className="container-fluid mx-auto flex items-center justify-between px-8 py-2">
        <div className='grid grid-rows-1 grid-flow-col gap-4'>
          <img src={logo} alt="Logo" id='logo' style={{ height: "50px" }} className="invert m-2 col-span-1" />
          <h1 className="col-span-1 m-auto text-center text-xl">Garage <br/>Store</h1>
        </div>
        
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-500">Запчасти</a></li>
            <li><a href="#" className="hover:text-gray-500">Аксессуары</a></li>
            <li><a href="#" className="hover:text-gray-500">О нас</a></li>
            <li><a href="#" className="hover:text-gray-500">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
