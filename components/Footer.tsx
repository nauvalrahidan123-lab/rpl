
import React from 'react';
import { Link } from 'react-router-dom';
import { TalentaLogo, TwitterIcon, WhatsappIcon, InstagramIcon, LocationIcon, PhoneIcon, EmailIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo & Socials */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
                <TalentaLogo className="h-8 w-auto" />
            </Link>
            <p className="text-sm">Sanggar seni dan penyewaan kostum tradisional Indonesia terpercaya di Makassar-Gowa.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white"><TwitterIcon /></a>
              <a href="#" className="hover:text-white"><WhatsappIcon /></a>
              <a href="#" className="hover:text-white"><InstagramIcon /></a>
            </div>
          </div>

          {/* Column 2: Tautan Cepat */}
          <div>
            <h3 className="font-bold text-white mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Beranda</a></li>
              <li><a href="#" className="hover:text-white">Koleksi Kostum</a></li>
              <li><a href="#" className="hover:text-white">Galeri Inspirasi</a></li>
              <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-white">Layanan</a></li>
            </ul>
          </div>

          {/* Column 3: Layanan */}
          <div>
            <h3 className="font-bold text-white mb-4">Layanan</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Penyewaan Kostum</a></li>
              <li><a href="#" className="hover:text-white">Custom Tailoring</a></li>
              <li><a href="#" className="hover:text-white">Konsultasi Budaya</a></li>
              <li><a href="#" className="hover:text-white">Event Planning</a></li>
              <li><a href="#" className="hover:text-white">Pusat Bantuan</a></li>
            </ul>
          </div>

          {/* Column 4: Kontak */}
          <div>
            <h3 className="font-bold text-white mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <LocationIcon className="mt-1 flex-shrink-0" />
                <span>CitraLand Celebes, Jl. Tun Abdul Razak, Ruko C-08, Gowa, Sulawesi Selatan</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <span>+62 857-9171-4148</span>
              </li>
              <li className="flex items-center gap-3">
                <EmailIcon />
                <span>info@talentaarts.id</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2025 Talenta Arts Studio. Semua hak dilindungi.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-white">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
