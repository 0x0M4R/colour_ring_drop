import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { logo, trq_menu, close } from '../assets';
import LoginModal from './LoginModal';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-20 bg-white p-5 ${toggle ? 'h-screen overflow-hidden' : ''
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <div className='flex justify-end'>
          <Link to="/" className='flex items-center gap-2'>
            <img src={logo} alt="logo" className='object-contain' style={{ width: '160px', height: '140px' }} />
          </Link>
        </div>
        <ul className='list-none flex flex-row gap-20 mx-auto hidden sm:flex'>
          {navLinks.map((link) => (
            <li key={link.id} className='hover:text-secondary text-black text-xl font-medium cursor-pointer'>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <button
          className="bg-sky-700 hover:bg-sky-400 text-white font-bold py-2 px-4 rounded"
          onClick={handleModalOpen}
        >
          Login
        </button>
        <LoginModal isOpen={isOpen} onClose={handleModalClose} />
        <div className='sm:hidden flex justify-start'>
          <img
            src={trq_menu}
            alt="menu"
            className={`w-10 h-10 object-contain cursor-pointer transition duration-1000 ease-in-out ${toggle ? 'opacity-0 rotate-90' : 'opacity-100'
              }`}
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>
      {toggle && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-30"
          onClick={() => setToggle(false)}
        />
      )}
      <div
        className={`fixed top-0 left-0 w-3/5  max-w-[300px] min-w-[200px] h-screen bg-white p-6 transition duration-1000 ease-in-out ${toggle ? 'translate-x-0' : '-translate-x-full'
          } z-40`}
        style={{
          opacity: toggle ? 1 : 0,
          pointerEvents: toggle ? 'auto' : 'none',
        }}
      >
        <div className='flex justify-end mb-4'>
          <img
            src={close}
            alt="close"
            className={`w-[28px] h-[28px] object-contain cursor-pointer transition duration-1000 ${toggle ? 'opacity-100 rotate-90' : 'opacity-0'
              }`}
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <div className='flex justify-center mb-4'>
          <img src={logo} alt="logo" className='w-20 h-20 object-contain' style={{ width: '150px', height: '150px' }} />
        </div>
        <ul className='list-none flex flex-col gap-4'>
          {navLinks.map((nav) => (
            <li key={nav.id} className='font-regular cursor-pointer text-[16px] text-black hover:text-secondary active:text-tertiary border-b border-gray-200 py-2'>
              <Link to={`#${nav.id}`} onClick={() => setToggle(!toggle)}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
