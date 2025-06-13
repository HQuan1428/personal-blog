import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white border-t border-[#22232e] py-4 w-full">
      <div className="flex flex-wrap items-center justify-left gap-5 text-lg">
        <span>© 2023</span>
        <a href="#" className="hover:text-indigo-300 transition-colors" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="#" className="hover:text-indigo-300 transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="#" className="hover:text-indigo-300 transition-colors">Email</a>
        <a href="#" className="hover:text-indigo-300 transition-colors">RSS feed</a>
        <a href="#" className="hover:text-indigo-300 transition-colors" target="_blank" rel="noopener noreferrer">Add to Feedly</a>
      </div>
    </footer>
  );
};

export default Footer;
