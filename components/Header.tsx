
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TalentaLogo } from './Icons';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    return (
        <Link to={to} className={`px-3 py-2 text-sm font-medium ${isActive ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors`}>
            {children}
        </Link>
    );
};

const Header: React.FC = () => {
  return (
    <header className="bg-brand-dark py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
            <TalentaLogo className="h-8 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center">
            <NavLink to="/">Beranda</NavLink>
            <NavLink to="/koleksi">Koleksi</NavLink>
            <NavLink to="/galeri">Galeri</NavLink>
            <NavLink to="/layanan">Layanan</NavLink>
            <NavLink to="/komunitas">Komunitas</NavLink>
        </nav>
        <div className="flex items-center gap-2">
            <Link to="/login" className="px-5 py-2 text-sm font-semibold text-white hover:bg-gray-800 rounded-md transition-colors">
                Masuk
            </Link>
            <Link to="/register" className="px-5 py-2 text-sm font-semibold text-brand-dark bg-brand-yellow hover:bg-yellow-300 rounded-md transition-colors">
                Daftar
            </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
