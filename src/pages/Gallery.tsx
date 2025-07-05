import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'Semua', count: 24 },
    { id: 'uniforms', name: 'Seragam', count: 8 },
    { id: 'casual', name: 'Casual', count: 6 },
    { id: 'merchandise', name: 'Merchandise', count: 5 },
    { id: 'custom', name: 'Custom', count: 5 }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'uniforms',
      title: 'Seragam Sekolah SMK',
      image: 'https://images.pexels.com/photos/6065210/pexels-photo-6065210.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Seragam sekolah dengan kualitas premium dan desain modern'
    },
    {
      id: 2,
      category: 'uniforms',
      title: 'Seragam Kantor Corporate',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Seragam kantor dengan tampilan profesional dan nyaman'
    },
    {
      id: 3,
      category: 'casual',
      title: 'Kaos Polo Custom',
      image: 'https://images.pexels.com/photos/7679683/pexels-photo-7679683.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Kaos polo dengan desain custom dan bahan berkualitas'
    },
    {
      id: 4,
      category: 'merchandise',
      title: 'T-Shirt Promosi',
      image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Kaos promosi dengan sablon berkualitas tinggi'
    },
    {
      id: 5,
      category: 'custom',
      title: 'Jaket Team Building',
      image: 'https://images.pexels.com/photos/7679685/pexels-photo-7679685.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Jaket custom untuk acara team building perusahaan'
    },
    {
      id: 6,
      category: 'uniforms',
      title: 'Baju Kerja Industri',
      image: 'https://images.pexels.com/photos/7679717/pexels-photo-7679717.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Pakaian kerja untuk industri dengan standar keamanan tinggi'
    },
    {
      id: 7,
      category: 'casual',
      title: 'Kemeja Casual',
      image: 'https://images.pexels.com/photos/7679714/pexels-photo-7679714.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Kemeja casual dengan desain trendy dan nyaman dipakai'
    },
    {
      id: 8,
      category: 'merchandise',
      title: 'Hoodie Branded',
      image: 'https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Hoodie dengan logo perusahaan dan kualitas premium'
    },
    {
      id: 9,
      category: 'custom',
      title: 'Dress Custom',
      image: 'https://images.pexels.com/photos/7679697/pexels-photo-7679697.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Dress dengan desain khusus sesuai permintaan klien'
    },
    {
      id: 10,
      category: 'uniforms',
      title: 'Seragam Medis',
      image: 'https://images.pexels.com/photos/6749818/pexels-photo-6749818.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Seragam medis dengan bahan anti-bakteri dan nyaman'
    },
    {
      id: 11,
      category: 'casual',
      title: 'Kaos Couple',
      image: 'https://images.pexels.com/photos/7679701/pexels-photo-7679701.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Kaos couple dengan desain unik dan romantis'
    },
    {
      id: 12,
      category: 'merchandise',
      title: 'Tote Bag Custom',
      image: 'https://images.pexels.com/photos/7679719/pexels-photo-7679719.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Tote bag dengan sablon custom untuk souvenir'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-6 animate-fade-in">
            Galeri Karya Kami
          </h1>
          <p className="text-xl text-light/90 max-w-3xl mx-auto animate-slide-up">
            Kumpulan hasil produksi berkualitas tinggi yang telah kami kerjakan 
            untuk berbagai klien dari seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-accent text-primary shadow-lg transform scale-105'
                    : 'bg-light text-secondary hover:bg-accent/20 hover:text-primary'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group cursor-pointer animate-fade-in"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-light/90">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Pencapaian Kami
            </h2>
            <p className="text-lg text-secondary">
              Angka yang membuktikan kualitas dan kepercayaan klien
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Klien Puas' },
              { number: '10K+', label: 'Produk Selesai' },
              { number: '15+', label: 'Tahun Pengalaman' },
              { number: '24/7', label: 'Layanan Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-secondary font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-6">
            Ingin Karya Anda Tampil di Sini?
          </h2>
          <p className="text-xl text-light/90 mb-8">
            Mari wujudkan proyek fashion impian Anda bersama tim profesional kami
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
          >
            Mulai Proyek Anda
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;