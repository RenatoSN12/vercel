import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => (
    <footer className='bg-gray-900 mt-8 py-6 text-center text-sm'>
      <p>HAVE GOOD WEB DESIGN TODAY</p>
      <p>Transform your ideas into reality with stunning web design.</p>
      <div className='flex justify-center space-x-4 mt-4'>
      <a
          href="https://www.linkedin.com/in/erick-lucas-528a5a172/" // Substitua pelo link do LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition-colors"
        >
        <FaLinkedinIn />
        </a>
        <a
          href="https://www.instagram.com/__erick.lucas/" // Substitua pelo link do LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition-colors"
        >
        <FaInstagram />
        </a>
      </div>
      <p className='text-gray-400 mt-4'>&copy; 2025. Todos os direitos reservados.</p>
    </footer>
);

export default Footer;