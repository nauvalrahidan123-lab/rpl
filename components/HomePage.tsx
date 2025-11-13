
import React from 'react';
import { PlayIcon, StarIcon, ArrowRightIcon } from './Icons';

const HomePage: React.FC = () => {
    return (
        <div className="bg-brand-dark">
            {/* Hero Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl md:text-6xl font-black text-white uppercase leading-tight">
                            Sanggar Seni <span className="text-brand-yellow">Talenta Project</span>
                        </h1>
                        <p className="mt-4 text-gray-300 max-w-xl mx-auto lg:mx-0">
                            Temukan koleksi kostum tradisional dan modifikasi terlengkap di Makassar-Gowa. Jelajahi Sanggar Seni Talenta, kami hadirkan keindahan.
                        </p>
                        <div className="mt-8 flex justify-center lg:justify-start gap-4">
                            <button className="bg-brand-yellow text-brand-dark font-bold py-3 px-6 rounded-md flex items-center gap-2 hover:bg-yellow-300 transition-colors">
                                Lihat Koleksi <ArrowRightIcon />
                            </button>
                            <button className="bg-gray-800 text-white font-bold py-3 px-6 rounded-md flex items-center gap-2 hover:bg-gray-700 transition-colors">
                                <PlayIcon /> Tonton Video
                            </button>
                        </div>
                        <div className="mt-12 grid grid-cols-3 gap-4 text-center">
                            <div>
                                <p className="text-3xl font-bold text-brand-yellow">50+</p>
                                <p className="text-sm text-gray-400">Kostum Tersedia</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-brand-yellow">10</p>
                                <p className="text-sm text-gray-400">Kabupaten/Kota</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-brand-yellow">1000+</p>
                                <p className="text-sm text-gray-400">Penari Anak</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://picsum.photos/id/1027/600/700" alt="Traditional Costume" className="rounded-lg w-full h-auto object-cover" />
                        <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            Tersedia Hari Ini
                        </div>
                         <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white p-4 rounded-lg">
                            <p className="text-sm text-gray-300">Mulai dari</p>
                            <p className="text-2xl font-bold text-brand-yellow">Rp 50.000</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Koleksi Unggulan */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-black text-white">KOLEKSI UNGGULAN</h2>
                    <p className="mt-2 text-gray-400 max-w-2xl mx-auto">Kostum pilihan terbaik dari berbagai daerah di Indonesia, dipilih khusus untuk Anda.</p>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[{img: "https://picsum.photos/id/1043/400/500", title: "Kostum Wedding Bugis", price: "50.000"}, {img: "https://picsum.photos/id/1044/400/500", title: "Kostum Tiga Etnis", price: "60.000"}, {img: "https://picsum.photos/id/1045/400/500", title: "Kostum Jas Tutup", price: "90.000"}, {img: "https://picsum.photos/id/1047/400/500", title: "Kostum Tari Kreasi", price: "80.000"}].map((item, index) => (
                            <div key={index} className="group overflow-hidden rounded-lg">
                                <img src={item.img} alt={item.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"/>
                                <div className="p-4 bg-brand-gray text-left">
                                    <h3 className="font-bold text-white">{item.title}</h3>
                                    <div className="flex justify-between items-center mt-2">
                                        <p className="text-sm text-gray-400">Mulai dari</p>
                                        <p className="font-bold text-brand-yellow">Rp {item.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="mt-12 bg-gray-800 text-white font-bold py-3 px-8 rounded-md hover:bg-gray-700 transition-colors">
                        Lihat Semua Koleksi
                    </button>
                </div>
            </section>

            {/* Cerita Komunitas */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-black text-white">CERITA KOMUNITAS</h2>
                    <p className="mt-2 text-gray-400 max-w-2xl mx-auto">Dengarkan pengalaman nyata dari komunitas seniman dan penyewa kostum kami.</p>
                    <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-brand-gray p-8 rounded-lg text-left space-y-4">
                            <div className="flex items-center gap-4">
                                <img src="https://picsum.photos/id/338/50/50" alt="Maya Sari" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h4 className="font-bold text-white">Maya Sari</h4>
                                    <p className="text-sm text-gray-400">Penari Profesional</p>
                                </div>
                            </div>
                            <p className="text-gray-300">"Talenta Arts Studio benar-benar memahami kebutuhan penari. Kostum yang saya sewa tidak hanya indah, tetapi juga nyaman digunakan untuk pertunjukan 2 jam penuh."</p>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => <StarIcon key={i} className="text-brand-yellow" />)}
                                <span className="ml-2 text-sm text-gray-400">5.0</span>
                            </div>
                        </div>
                         <div className="bg-brand-gray p-8 rounded-lg text-left space-y-4">
                            <div className="flex items-center gap-4">
                                <img src="https://picsum.photos/id/342/50/50" alt="Tari Fatimah" className="w-12 h-12 rounded-full" />
                                <div>
                                    <h4 className="font-bold text-white">Tari Fatimah</h4>
                                    <p className="text-sm text-gray-400">Guru Sekolah</p>
                                </div>
                            </div>
                            <p className="text-gray-300">"Untuk acara budaya sekolah, kami membutuhkan 50 kostum berbeda, tim Talenta sangat membantu dengan konsultasi gratis dan paket khusus untuk kami."</p>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => <StarIcon key={i} className="text-brand-yellow" />)}
                                <span className="ml-2 text-sm text-gray-400">5.0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Bergabung Dengan Komunitas */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                   <div className="bg-brand-olive rounded-lg p-12 text-center max-w-4xl mx-auto">
                        <h2 className="text-4xl font-black text-brand-yellow">BERGABUNG DENGAN KOMUNITAS</h2>
                        <p className="mt-2 text-gray-300 max-w-2xl mx-auto">Dapatkan update terbaru tentang koleksi kostum, acara budaya, dan penawaran spesial dari kami.</p>
                        <form className="mt-8 max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
                            <input type="email" placeholder="Masukkan email Anda" className="flex-grow bg-gray-700 text-white placeholder-gray-400 rounded-md px-4 py-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-yellow" />
                            <button type="submit" className="bg-brand-yellow text-brand-dark font-bold py-3 px-8 rounded-md hover:bg-yellow-300 transition-colors">Registrasi</button>
                        </form>
                         <div className="mt-4 text-center">
                            <label className="flex items-center justify-center gap-2 text-sm text-gray-400">
                                <input type="checkbox" className="rounded bg-gray-700 border-gray-600 text-brand-yellow focus:ring-brand-yellow" />
                                Gratis trial kostum untuk pengguna baru
                            </label>
                        </div>
                   </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
