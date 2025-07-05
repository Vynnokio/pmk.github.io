import React from 'react';
import { Shirt, Palette, Scissors, Users, Clock, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shirt,
      title: 'Seragam Sekolah & Kantor',
      description: 'Produksi seragam berkualitas untuk institusi pendidikan dan perusahaan',
      features: ['Bahan berkualitas tinggi', 'Desain custom', 'Ukuran lengkap', 'Garansi kualitas'],
      image: 'https://images.pexels.com/photos/6065210/pexels-photo-6065210.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Palette,
      title: 'Sablon & Bordir',
      description: 'Layanan sablon dan bordir dengan berbagai teknik dan pilihan warna',
      features: ['Sablon screen printing', 'Digital printing', 'Bordir komputer', 'Finishing berkualitas'],
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Scissors,
      title: 'Fashion Custom',
      description: 'Realisasi desain fashion sesuai konsep dan kebutuhan spesifik Anda',
      features: ['Konsultasi desain', 'Prototype/sample', 'Produksi massal', 'Quality control'],
      image: 'https://images.pexels.com/photos/7679683/pexels-photo-7679683.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Users,
      title: 'Merchandise Perusahaan',
      description: 'Produksi merchandise branded untuk keperluan promosi dan corporate gift',
      features: ['Kaos promosi', 'Polo shirt', 'Jaket branded', 'Aksesoris custom'],
      image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Clock,
      title: 'Produksi Cepat',
      description: 'Layanan express untuk kebutuhan mendesak dengan kualitas tetap terjaga',
      features: ['Proses 3-7 hari', 'Prioritas produksi', 'Update progres', 'Garansi tepat waktu'],
      image: 'https://images.pexels.com/photos/7679685/pexels-photo-7679685.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Award,
      title: 'Konsultasi Desain',
      description: 'Layanan konsultasi dan pengembangan desain dari konsep hingga produksi',
      features: ['Analisis kebutuhan', 'Sketsa desain', 'Pemilihan bahan', 'Estimasi biaya'],
      image: 'https://images.pexels.com/photos/7679717/pexels-photo-7679717.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Konsultasi',
      description: 'Diskusi kebutuhan dan konsep desain dengan tim ahli kami'
    },
    {
      step: '02',
      title: 'Desain & Sample',
      description: 'Pembuatan desain detail dan sample produk untuk persetujuan'
    },
    {
      step: '03',
      title: 'Produksi',
      description: 'Proses produksi dengan quality control ketat di setiap tahapan'
    },
    {
      step: '04',
      title: 'Pengiriman',
      description: 'Pengemasan dan pengiriman produk sesuai jadwal yang disepakati'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-6 animate-fade-in">
            Layanan Kami
          </h1>
          <p className="text-xl text-light/90 max-w-3xl mx-auto animate-slide-up">
            Solusi lengkap untuk semua kebutuhan konveksi Anda dengan kualitas terjamin 
            dan pelayanan profesional.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group animate-fade-in">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 p-3 rounded-full">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-secondary mb-4">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-secondary">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Proses Kerja Kami
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Tahapan sistematis yang memastikan hasil berkualitas dan kepuasan pelanggan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center relative animate-fade-in">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent text-primary font-bold text-2xl rounded-full mb-4 relative z-10">
                  {step.step}
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-accent/30 transform translate-x-1/2"></div>
                )}
                <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Mengapa Memilih Kami?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Kualitas Terjamin',
                description: 'Menggunakan bahan berkualitas tinggi dan proses produksi yang teliti dengan quality control ketat.',
                icon: '🏆'
              },
              {
                title: 'Harga Kompetitif',
                description: 'Memberikan harga terbaik tanpa mengorbankan kualitas produk dan layanan.',
                icon: '💰'
              },
              {
                title: 'Tepat Waktu',
                description: 'Komitmen menyelesaikan pesanan sesuai deadline yang telah disepakati.',
                icon: '⏰'
              },
              {
                title: 'Tim Berpengalaman',
                description: 'Didukung oleh tim profesional dengan pengalaman lebih dari 15 tahun.',
                icon: '👥'
              },
              {
                title: 'Teknologi Modern',
                description: 'Menggunakan mesin dan teknologi terkini untuk hasil produksi optimal.',
                icon: '⚙️'
              },
              {
                title: 'Layanan 24/7',
                description: 'Customer service yang siap membantu Anda kapan saja dibutuhkan.',
                icon: '📞'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">{benefit.title}</h3>
                <p className="text-secondary">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-6">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-xl text-light/90 mb-8">
            Konsultasi gratis untuk mendapatkan solusi terbaik sesuai kebutuhan Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
            >
              Mulai Konsultasi
            </a>
            <a
              href="/gallery"
              className="border-2 border-light text-light px-8 py-4 rounded-lg font-semibold hover:bg-light hover:text-primary transition-all duration-300"
            >
              Lihat Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;