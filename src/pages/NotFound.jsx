import { Link } from 'react-router-dom';
import { 
  Home, 
  Search, 
  ArrowLeft,
  BookOpen,
  Phone,
  FileQuestion
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const NotFound = () => {
  const quickLinks = [
    {
      title: 'Beranda',
      description: 'Kembali ke halaman utama',
      icon: Home,
      link: '/',
      color: 'primary'
    },
    {
      title: 'Program',
      description: 'Lihat program pendidikan',
      icon: BookOpen,
      link: '/program',
      color: 'accent'
    },
    {
      title: 'Pendaftaran',
      description: 'Daftar PPDB 2026/2027',
      icon: FileQuestion,
      link: '/pendaftaran',
      color: 'secondary'
    },
    {
      title: 'Kontak',
      description: 'Hubungi kami',
      icon: Phone,
      link: '/kontak',
      color: 'primary'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230066ff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        
        {/* Main 404 Content */}
        <div className="text-center mb-16">
          {/* Large 404 Text */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-accent-400 to-secondary-500 leading-none">
              404
            </h1>
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center animate-bounce">
              <Search className="w-16 h-16 text-primary-500" aria-hidden="true" />
            </div>
          </div>

          {/* Text Content */}
          <div className="max-w-2xl mx-auto space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Halaman Tidak Ditemukan
            </h2>
            <p className="text-xl text-gray-600">
              Maaf, halaman yang Anda cari tidak dapat ditemukan atau mungkin telah dipindahkan.
            </p>
          </div>

          {/* Primary Actions */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Link to="/">
              <Button variant="primary" size="lg" icon={Home}>
                Kembali ke Beranda
              </Button>
            </Link>
            <Link to="/kontak">
              <Button variant="outline" size="lg" icon={Phone}>
                Hubungi Kami
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Atau Kunjungi Halaman Lainnya
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link key={index} to={link.link} className="group">
                <Card variant="shadow" hover={true} className="h-full text-center">
                  <div className={`w-16 h-16 bg-${link.color}-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <link.icon className={`w-8 h-8 text-${link.color}-500`} aria-hidden="true" />
                  </div>
                  <h4 className="font-bold text-lg text-gray-800 mb-2">
                    {link.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {link.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Back Button Alternative */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Atau Kembali ke Halaman Sebelumnya
          </button>
        </div>

        {/* Help Text */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <Card variant="default" className="bg-primary-50 border-primary-200">
            <p className="text-gray-700 mb-4">
              <strong>Butuh bantuan?</strong> Jika Anda yakin halaman ini seharusnya ada, silakan hubungi kami.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/6281285300800?text=Assalamualaikum,%20saya%20menemukan%20error%20404%20di%20website"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="sm">
                  <Phone className="w-4 h-4" />
                  WhatsApp CS
                </Button>
              </a>
              <a href="mailto:info@alandalus-ululalbaab.com?subject=Error%20404%20Website">
                <Button variant="outline" size="sm">
                  Email Kami
                </Button>
              </a>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default NotFound;