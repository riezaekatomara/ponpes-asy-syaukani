import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Instagram,
  Youtube,
  Globe,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Facebook
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Input from '../components/ui/Input';

const Kontak = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    phone: '',
    subjek: '',
    pesan: ''
  });

  const [formStatus, setFormStatus] = useState({
    type: '', // 'success' | 'error' | ''
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    // Validasi sederhana
    if (!formData.nama || !formData.email || !formData.phone || !formData.pesan) {
      setFormStatus({
        type: 'error',
        message: 'Mohon lengkapi semua field yang wajib diisi'
      });
      setIsSubmitting(false);
      return;
    }

    // Simulasi submit (replace dengan API call sesungguhnya)
    try {
      // TODO: Integrate with backend API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus({
        type: 'success',
        message: 'Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.'
      });
      
      // Reset form
      setFormData({
        nama: '',
        email: '',
        phone: '',
        subjek: '',
        pesan: ''
      });
    } catch {
      setFormStatus({
        type: 'error',
        message: 'Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi kami via WhatsApp.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat Pesantren',
      details: [
        'Jl. K.H. Mama Oyon, Kp. Cihaur RT.04 RW.04',
        'Desa Cicantayan, Kec. Cicantayan',
        'Kab. Sukabumi, Jawa Barat 43155'
      ],
      action: {
        label: 'Buka Google Maps',
        link: 'https://maps.google.com/?q=Pesantren+Ulul+Albaab+Sukabumi',
        external: true
      }
    },
    {
      icon: Phone,
      title: 'Nomor Telepon',
      details: [
        'CS Pusat: 0812-85-300800',
        'Recruitment: 0878-3627-0966'
      ],
      action: {
        label: 'Hubungi via WhatsApp',
        link: 'https://wa.me/6281285300800',
        external: true
      }
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@alandalus-ululalbaab.com',
        'ppdb@alandalus-ululalbaab.com'
      ],
      action: {
        label: 'Kirim Email',
        link: 'mailto:info@alandalus-ululalbaab.com',
        external: true
      }
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      details: [
        'Senin - Jumat: 08:00 - 16:00 WIB',
        'Sabtu: 08:00 - 14:00 WIB',
        'Minggu & Libur: Tutup'
      ],
      action: null
    }
  ];

  const socialMedia = [
    {
      name: 'Website',
      icon: Globe,
      link: 'https://www.alandalus-ululalbaab.com',
      color: 'text-primary-500',
      bgColor: 'bg-primary-100',
      username: 'alandalus-ululalbaab.com'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      link: 'https://www.instagram.com/alandalusululalbaab',
      color: 'text-pink-500',
      bgColor: 'bg-pink-100',
      username: '@alandalusululalbaab'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      link: 'https://www.youtube.com/@UlulAlbaabSukabumi',
      color: 'text-red-500',
      bgColor: 'bg-red-100',
      username: '@UlulAlbaabSukabumi'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      link: 'https://www.facebook.com/alandalusululalbaab',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      username: 'Pesantren Ulul Albaab'
    }
  ];

  const quickAccess = [
    {
      title: 'Informasi PPDB',
      description: 'Tanya seputar pendaftaran santri baru',
      icon: MessageCircle,
      link: 'https://wa.me/6281285300800?text=Assalamualaikum,%20saya%20ingin%20bertanya%20tentang%20PPDB',
      color: 'primary'
    },
    {
      title: 'Konsultasi Program',
      description: 'Diskusi program MTs dan I\'dadiyah',
      icon: Phone,
      link: 'https://wa.me/6281285300800?text=Assalamualaikum,%20saya%20ingin%20konsultasi%20tentang%20program%20pendidikan',
      color: 'accent'
    },
    {
      title: 'Info Beasiswa',
      description: 'Informasi beasiswa dan keringanan',
      icon: Mail,
      link: 'https://wa.me/6281285300800?text=Assalamualaikum,%20saya%20ingin%20bertanya%20tentang%20beasiswa',
      color: 'secondary'
    }
  ];

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230066ff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} aria-hidden="true"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="primary" size="lg" className="mb-6">
            <MessageCircle className="w-4 h-4" />
            Hubungi Kami
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Kontak
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-400">
              Pesantren Ulul Albaab
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Silakan hubungi kami untuk informasi lebih lanjut tentang pendaftaran, program, atau pertanyaan lainnya
          </p>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {quickAccess.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card variant="shadow" hover={true} className="h-full">
                  <div className={`w-14 h-14 bg-${item.color}-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-7 h-7 text-${item.color}-500`} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Kirim Pesan
              </h2>
              <p className="text-gray-600 mb-8">
                Isi formulir di bawah ini dan tim kami akan menghubungi Anda dalam 1x24 jam
              </p>

              <Card variant="shadow">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    label="Nama Lengkap"
                    name="nama"
                    type="text"
                    placeholder="Masukkan nama lengkap"
                    value={formData.nama}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    label="Nomor WhatsApp"
                    name="phone"
                    type="tel"
                    placeholder="08xxxxxxxxxx"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    label="Subjek (Opsional)"
                    name="subjek"
                    type="text"
                    placeholder="Judul pesan"
                    value={formData.subjek}
                    onChange={handleChange}
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="pesan"
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Tulis pesan Anda di sini..."
                      value={formData.pesan}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  {/* Form Status Message */}
                  {formStatus.message && (
                    <div className={`p-4 rounded-lg flex items-start gap-3 ${
                      formStatus.type === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      {formStatus.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      )}
                      <p className="text-sm">{formStatus.message}</p>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    icon={Send}
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    Atau hubungi kami langsung via{' '}
                    <a 
                      href="https://wa.me/6281285300800" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline font-medium"
                    >
                      WhatsApp
                    </a>
                  </p>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Informasi Kontak
              </h2>

              {contactInfo.map((info, index) => (
                <Card key={index} variant="default" className="hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-500" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-800 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 leading-relaxed">
                          {detail}
                        </p>
                      ))}
                      {info.action && (
                        <a
                          href={info.action.link}
                          target={info.action.external ? "_blank" : undefined}
                          rel={info.action.external ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium mt-3 group"
                        >
                          {info.action.label}
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ikuti Kami di Media Sosial
            </h2>
            <p className="text-xl text-gray-600">
              Dapatkan update terbaru tentang kegiatan dan informasi pesantren
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card variant="default" hover={true} className="text-center h-full">
                  <div className={`w-16 h-16 ${social.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <social.icon className={`w-8 h-8 ${social.color}`} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">
                    {social.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {social.username}
                  </p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" size="lg" className="mb-4">
              <MapPin className="w-4 h-4" />
              Lokasi Kami
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Temukan Kami di Peta
            </h2>
            <p className="text-xl text-gray-600">
              Jl. K.H. Mama Oyon, Cicantayan, Sukabumi, Jawa Barat
            </p>
          </div>

          <Card variant="shadow" className="overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456789!2d106.9876543!3d-6.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCicantayan%2C%20Sukabumi!5e0!3m2!1sid!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Pesantren Ulul Albaab Sukabumi"
              ></iframe>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-primary-500 to-primary-600">
              <div className="flex items-center justify-between text-white">
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    Pesantren Ulul Albaab Sukabumi
                  </h3>
                  <p className="text-primary-100 text-sm">
                    Jl. K.H. Mama Oyon, Kp. Cihaur RT.04 RW.04, Cicantayan
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Pesantren+Ulul+Albaab+Sukabumi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="bg-white text-primary-600 border-white hover:bg-primary-50">
                    Buka di Maps
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="py-16 bg-gradient-to-br from-secondary-500 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="w-16 h-16 text-white mx-auto mb-6" aria-hidden="true" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Butuh Bantuan Segera?
          </h2>
          <p className="text-xl text-secondary-100 mb-8">
            Hubungi Customer Service kami via WhatsApp untuk respon cepat
          </p>
          <a
            href="https://wa.me/6281285300800?text=Assalamualaikum,%20saya%20ingin%20bertanya%20tentang%20Pesantren%20Ulul%20Albaab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-secondary-600 border-white hover:bg-secondary-50 inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Chat WhatsApp Sekarang
            </Button>
          </a>
        </div>
      </section>

    </div>
  );
};

export default Kontak;