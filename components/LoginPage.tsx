
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EmailIcon, LockIcon, GoogleIcon, FacebookIcon, EyeIcon, EyeOffIcon, StarIcon, CheckCircleIcon, ShieldCheckIcon, UserGroupIcon } from './Icons';

const InfoCard: React.FC<{icon: React.ReactNode; title: string; description: string;}> = ({ icon, title, description }) => (
    <div className="flex items-start gap-4">
        <div className="bg-yellow-900 bg-opacity-50 p-2 rounded-full text-brand-yellow">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-white">{title}</h4>
            <p className="text-sm text-gray-400">{description}</p>
        </div>
    </div>
);


const LoginPage: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center p-4">
      <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Side */}
                <div className="hidden lg:flex flex-col gap-8">
                    <h1 className="text-5xl font-black text-white uppercase leading-tight">
                       Bergabung Dengan <span className="text-brand-yellow">Komunitas</span>
                    </h1>
                    <p className="text-gray-300">Akses koleksi kostum tradisional Indonesia terlengkap dan bergabunglah dengan komunitas seniman dan budayawan.</p>
                    <div className="grid grid-cols-2 gap-6">
                        <InfoCard icon={<ShieldCheckIcon/>} title="Kostum Autentik" description="50+ koleksi asli"/>
                        <InfoCard icon={<UserGroupIcon/>} title="Komunitas Aktif" description="1000+ anggota"/>
                        <InfoCard icon={<CheckCircleIcon/>} title="Terpercaya" description="Rating 4.9/5"/>
                        <InfoCard icon={<StarIcon className="text-brand-yellow"/>} title="Kualitas Premium" description="Berpengalaman"/>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="w-full max-w-md mx-auto">
                    <div className="bg-brand-gray p-8 rounded-lg shadow-lg">
                        <div className="flex mb-6">
                            <Link to="/login" className="flex-1 py-2 text-center text-brand-yellow font-semibold border-b-2 border-brand-yellow">Masuk</Link>
                            <Link to="/register" className="flex-1 py-2 text-center text-gray-400 font-semibold border-b-2 border-gray-700 hover:text-white">Daftar</Link>
                        </div>
                        
                        <h2 className="text-xl font-bold text-white mb-2">Selamat Datang Kembali</h2>
                        <p className="text-gray-400 mb-6">Masuk ke akun Anda untuk melanjutkan</p>
                        
                        <form className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-300">Email</label>
                                <div className="relative mt-1">
                                    <input type="email" placeholder="Masukkan email Anda" className="w-full bg-gray-700 text-white rounded-md pl-10 pr-4 py-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-yellow" />
                                    <EmailIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-300">Password</label>
                                <div className="relative mt-1">
                                    <input type={passwordVisible ? "text" : "password"} placeholder="Masukkan password Anda" className="w-full bg-gray-700 text-white rounded-md pl-10 pr-10 py-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-yellow" />
                                    <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <button type="button" onClick={() => setPasswordVisible(!passwordVisible)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                                        {passwordVisible ? <EyeOffIcon /> : <EyeIcon />}
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <label className="flex items-center gap-2 text-gray-400">
                                    <input type="checkbox" className="rounded bg-gray-700 border-gray-600 text-brand-yellow focus:ring-brand-yellow" />
                                    Ingat saya
                                </label>
                                <a href="#" className="text-brand-yellow hover:underline">Lupa password?</a>
                            </div>
                            <button type="submit" className="w-full bg-brand-yellow text-brand-dark font-bold py-3 rounded-md hover:bg-yellow-300 transition-colors">
                                Masuk
                            </button>
                             <button type="button" className="w-full bg-gray-700 text-white font-bold py-3 rounded-md hover:bg-gray-600 transition-colors">
                                SANGGAR TALENTA ART STUDIO
                            </button>
                        </form>
                        
                        <div className="my-6 flex items-center">
                            <hr className="flex-grow border-gray-600" />
                            <span className="mx-4 text-sm text-gray-400">Atau masuk dengan</span>
                            <hr className="flex-grow border-gray-600" />
                        </div>
                        
                        <div className="flex gap-4">
                            <button className="flex-1 bg-gray-700 text-white font-semibold py-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-600 transition-colors">
                                <GoogleIcon /> Google
                            </button>
                            <button className="flex-1 bg-gray-700 text-white font-semibold py-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-600 transition-colors">
                                <FacebookIcon /> Facebook
                            </button>
                        </div>
                    </div>
                </div>
          </div>
      </div>
    </div>
  );
};

export default LoginPage;
