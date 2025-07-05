import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Kualitas Terjamin',
      description: 'Kami berkomitmen menggunakan bahan berkualitas tinggi dan proses produksi yang teliti untuk hasil terbaik.'
    },
    {
      icon: Users,
      title: 'Tim Profesional',
      description: 'Didukung oleh tim berpengalaman dengan keahlian tinggi dalam bidang fashion dan konveksi.'
    },
    {
      icon: Target,
      title: 'Tepat Waktu',
      description: 'Kami memahami pentingnya deadline dan selalu berkomitmen untuk menyelesaikan pesanan tepat waktu.'
    },
    {
      icon: Heart,
      title: 'Pelayanan Prima',
      description: 'Kepuasan pelanggan adalah prioritas utama kami dengan layanan yang ramah dan responsif.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-light mb-6 animate-fade-in">
              Tentang Pelangi Mitra Konveksi
            </h1>
            <p className="text-xl text-light/90 max-w-3xl mx-auto animate-slide-up">
              Perjalanan kami dimulai dari passion untuk menghadirkan produk fashion berkualitas 
              yang memadukan tradisi dengan inovasi modern.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Cerita Kami
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>
                  Pelangi Mitra Konveksi adalah perusahaan yang bergerak di bidang produk dan jasa pakaian, atau yang dikenal juga sebagai konveksi atau mikro garmen. Berlokasi strategis di Jababeka II, tepatnya di Jalan Antilop 2 Blok F1 No. 50 Cikarang Baru, Bekasi, Jawa Barat, Indonesia, perusahaan ini siap melayani berbagai kebutuhan konveksi.
                </p>
                <p>
                  Dengan pengalaman yang dimulai sejak tahun 2005, Pelangi Mitra Konveksi telah mengumpulkan banyak pelajaran berharga dalam industri ini. Pengalaman tersebut menjadi fondasi kuat untuk terus meningkatkan profesionalisme usaha, mencakup perbaikan manajemen, pengembangan sumber daya manusia, peningkatan kualitas produk, serta efisiensi produktivitas.
                </p>
                <p>
                  Dedikasi terhadap peningkatan berkelanjutan ini bertujuan utama untuk mencapai kepuasan mitra dan konsumen. Pelangi Mitra Konveksi berkomitmen untuk selalu menjaga ketepatan waktu dalam setiap pengerjaan, memastikan bahwa setiap pesanan diselesaikan dengan standar kualitas tinggi sesuai harapan pelanggan.
                </p>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src="/public/images/picture12.jpg" 
                alt="Tim Maju Jaya Konveksi"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Prinsip yang memandu setiap langkah kami dalam memberikan layanan terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 animate-fade-in">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="py-20 bg-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in">
              <h3 className="text-2xl font-bold text-primary mb-4">Visi Kami</h3>
              <p className="text-secondary leading-relaxed">
                Menjadi Home Industry jasa konveksi/garmen skala nasional dan international.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md animate-slide-up">
              <h3 className="text-2xl font-bold text-primary mb-4">Misi Kami</h3>
              <ul className="text-secondary space-y-2">
                <li>•	Menyediakan produk dan jasa konveksi dengan kualitas produk yang berorientasi pada peningkatan citra, estetika dan customer brand konsumen.</li>
                <li>•	Menjalin rantai nilai hubungan (Value Chain) antar stake holder yang berkesinambungan.</li>
                <li>•	Membangun jaringan melalui mitra produk bermerek dan sistem kemitraan pemasaran berbasis internet.</li>
                <li>•	Menjalin kemitraan, kesejahteraan bersama dan hubungan kerja harmonis berdasarkan prinsif-prinsif manajemen profesional dan semangat kebersamaan yang saling menguntungkan antar stake holder.</li>
                <li>•	Melakukan peningkatan kualitas SDM pekerja melalui berbagai pendekatan edukasi yang sesuai dengan kebutuhan profesional pekerja.  </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Tim Profesional Kami
          </h2>
          <p className="text-lg text-secondary mb-12 max-w-2xl mx-auto">
            Didukung oleh tim berpengalaman dengan keahlian tinggi dalam berbagai aspek 
            produksi dan layanan konveksi.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { count: '50+', label: 'Karyawan Berpengalaman' },
              { count: '20+', label: 'Tahun Pengalaman' },
              { count: '500+', label: 'Klien Puas' },
              { count: '24/7', label: 'Dukungan Pelanggan' }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in">
                <div className="text-3xl font-bold text-accent mb-2">{stat.count}</div>
                <div className="text-secondary font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;