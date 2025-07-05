import React from 'react';
import { Scissors, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">Pelangi Mitra Konveksi</span>
            </div>
            <p className="text-light/80 mb-4 leading-relaxed">
              Pengalaman menekuni bidang usaha konveksi sejak tahun 2005 telah memberikan banyak pelajaran berharga untuk senantiasa meningkatkan profesionalisme usaha dalam hal peningkatan manajemen usaha, sumber daya manusia, kualitas, produktifitas, ketepatan waktu dalam rangka mewujudkan kepuasan mitra/konsumen. 
            </p>
            <div className="flex items-center space-x-2 text-accent">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Senin - Sabtu: 08.00 - 17.00 WIB</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Navigasi</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-light/80 hover:text-accent transition-colors">Beranda</a></li>
              <li><a href="/about" className="text-light/80 hover:text-accent transition-colors">Tentang Kami</a></li>
              <li><a href="/services" className="text-light/80 hover:text-accent transition-colors">Layanan</a></li>
              <li><a href="/gallery" className="text-light/80 hover:text-accent transition-colors">Galeri</a></li>
              <li><a href="/contact" className="text-light/80 hover:text-accent transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                <span className="text-light/80 text-sm">
                  jalan antilop 2 blok F1 no 50 cikarang baru<br />
                  Bekasi, Jawa Barat, Indonesia.
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-light/80 text-sm">+62 857 1912 888</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-light/80 text-sm">pelangimitra@yahoo.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary mt-8 pt-8 text-center">
          <p className="text-light/60 text-sm">
            © 2025 Pelangi Mitra. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;