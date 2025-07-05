import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Award, Users, Clock, ArrowRight } from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: Award, label: '20+ Tahun Pengalaman', value: '20+' },
    { icon: Users, label: 'Klien Puas', value: '500+' },
    { icon: Clock, label: 'Pesanan Selesai', value: '10K+' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold text-light mb-6 leading-tight">
              Konveksi Berkualitas<br />
              <span className="text-accent">Terpercaya</span>
            </h1>
            <p className="text-xl md:text-2xl text-light/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Wujudkan impian fashion Anda dengan layanan konveksi profesional. 
              Dari seragam hingga fashion custom, kami siap membantu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Hubungi Kami</span>
              </Link>
              <Link
                to="/services"
                className="border-2 border-light text-light px-8 py-4 rounded-lg font-semibold hover:bg-light hover:text-primary transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Lihat Layanan</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-light rounded-full flex justify-center">
            <div className="w-1 h-3 bg-light rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-secondary font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Layanan Unggulan Kami
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Dari desain hingga produksi, kami menyediakan solusi lengkap untuk kebutuhan Pesanan Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Seragam Sekolah & Kantor',
                description: 'Produksi seragam berkualitas dengan bahan terbaik dan jahitan rapi',
                image: '/public/images/picture7.jpg'
              },
              {
                title: 'Sablon & Bordir',
                description: 'Layanan sablon dan bordir custom dengan berbagai teknik dan warna',
                image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                title: 'Fashion Custom',
                description: 'Realisasikan desain fashion impian Anda dengan bantuan tim ahli kami',
                image: 'https://images.pexels.com/photos/7679683/pexels-photo-7679683.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-light/90 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 bg-primary text-light px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-all duration-300 transform hover:scale-105"
            >
              <span>Lihat Semua Layanan</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-6">
            Siap Wujudkan Proyek Fashion Anda?
          </h2>
          <p className="text-xl text-light/90 mb-8">
            Konsultasi gratis dengan tim ahli kami untuk mendapatkan solusi terbaik
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Phone className="h-5 w-5" />
            <span>Mulai Konsultasi</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;