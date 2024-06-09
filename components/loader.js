// components/Loader.js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000); // Set the duration here (in milliseconds)
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 transition-opacity   ${showLoader ? 'opacity-100' : 'opacity-0'}`}>
      <div className="p-8 shadow-lg rounded-full">
        <Image src={logo} alt="Loader" width={100} height={100} className='rounded-3xl'/>
      </div>
    </div>
  );
};

export default Loader;
