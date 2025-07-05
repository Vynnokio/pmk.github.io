import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, User, Building } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Terima kasih! Pesan Anda telah dikirim. Tim kami akan segera menghubungi Anda.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      details: ['+62 857 1912 888', '+62 857 7697 9706'],
      color: 'text-green-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['pelangimitra@yahoo.com'],
      color: 'text-blue-500'
    },
    {
      icon: MapPin,
      title: 'Alamat',
      details: ['Jln. Antilop 2 blok F1 no 50 cikarang baru, jababeka II', 'Bekasi, Jawa Barat 40123'],
      color: 'text-red-500'
    },
    {
      icon: Clock,
      title: 'Jam Kerja',
      details: ['Senin - Sabtu: 08.00 - 17.00', 'Minggu: Tutup'],
      color: 'text-purple-500'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-light mb-6 animate-fade-in">
            Hubungi Kami
          </h1>
          <p className="text-xl text-light/90 max-w-3xl mx-auto animate-slide-up">
            Siap membantu mewujudkan proyek fashion Anda. Tim ahli kami siap memberikan 
            konsultasi dan solusi terbaik untuk kebutuhan konveksi Anda.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center animate-fade-in">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4`}>
                  <info.icon className={`h-8 w-8 ${info.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-secondary">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Kirim Pesan
              </h2>
              <p className="text-secondary mb-8">
                Isi form di bawah ini dan tim kami akan menghubungi Anda dalam waktu 24 jam.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      <User className="inline h-4 w-4 mr-1" />
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      <Mail className="inline h-4 w-4 mr-1" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      <Building className="inline h-4 w-4 mr-1" />
                      Perusahaan/Institusi
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                      placeholder="Nama perusahaan (opsional)"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      <Phone className="inline h-4 w-4 mr-1" />
                      Nomor Telepon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                      placeholder="08xx xxxx xxxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Jenis Layanan *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                  >
                    <option value="">Pilih jenis layanan</option>
                    <option value="seragam-sekolah">Seragam Sekolah</option>
                    <option value="seragam-kantor">Seragam Kantor</option>
                    <option value="sablon-bordir">Sablon & Bordir</option>
                    <option value="fashion-custom">Fashion Custom</option>
                    <option value="merchandise">Merchandise</option>
                    <option value="konsultasi">Konsultasi Desain</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    <MessageCircle className="inline h-4 w-4 mr-1" />
                    Pesan *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none"
                    placeholder="Ceritakan detail kebutuhan Anda, jumlah pesanan, timeline, dan informasi lain yang diperlukan..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-accent text-primary hover:bg-accent/90 transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Kirim Pesan</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Lokasi Kami
              </h2>
              <div className="bg-gray-200 h-64 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Peta Lokasi</p>
                  <p className="text-sm">Jln. Antilop 2 blok F1 no 50 cikarang baru, jababeka II.</p>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Informasi Kunjungan
                </h3>
                <div className="space-y-3 text-secondary">
                  <p className="flex items-center">
                    <Clock className="h-5 w-5 mr-3 text-accent" />
                    <span>Kunjungan dengan appointment terlebih dahulu</span>
                  </p>
                  <p className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-accent" />
                    <span>Hubungi kami untuk jadwal kunjungan</span>
                  </p>
                  <p className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3 text-accent" />
                    <span>Parkir tersedia di area workshop</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Pertanyaan Sering Diajukan
            </h2>
            <p className="text-secondary">
              Jawaban untuk pertanyaan yang sering diajukan klien kami
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Berapa minimum order untuk produksi?',
                answer: 'Minimum order bervariasi tergantung jenis produk. Untuk seragam minimal 20 pcs, merchandise minimal 50 pcs. Silakan konsultasi untuk detail lebih lanjut.'
              },
              {
                question: 'Berapa lama waktu produksi?',
                answer: 'Waktu produksi normal 7-14 hari kerja tergantung kompleksitas dan jumlah pesanan. Tersedia juga layanan express 3-7 hari dengan biaya tambahan.'
              },
              {
                question: 'Apakah bisa melihat sample terlebih dahulu?',
                answer: 'Ya, kami menyediakan layanan pembuatan sample dengan biaya yang akan dipotong dari total pesanan jika Anda melanjutkan order.'
              },
              {
                question: 'Bagaimana sistem pembayaran?',
                answer: 'Pembayaran dapat dilakukan dengan DP 50% saat konfirmasi order dan pelunasan saat barang selesai. Kami menerima transfer bank dan pembayaran tunai.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-primary mb-3">{faq.question}</h3>
                <p className="text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;