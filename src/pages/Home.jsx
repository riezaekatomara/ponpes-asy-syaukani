import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  Award,
  School,
  BookOpenCheck,
  Heart,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  MapPin,
  Phone,
  Globe,
  Instagram
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import CTASection from '../components/common/CTASection'

const Home = () => {
  
  const features = [
    {
      icon: BookOpenCheck,
      title: 'Kurikulum Terpadu',
      description: 'Sistem pembelajaran Rabbani, Cendekia, dan Mandiri yang mengintegrasikan ilmu agama dan umum',
      bgColor: 'bg-primary-100',
      iconColor: 'text-primary-500'
    },
    {
      icon: Award,
      title: 'Terakreditasi A',
      description: 'Telah terakreditasi A (BAN SM) dengan standar pendidikan berkualitas tinggi',
      bgColor: 'bg-accent-100',
      iconColor: 'text-accent-500'
    },
    {
      icon: Globe,
      title: 'Kerjasama Internasional',
      description: 'Bekerjasama dengan universitas Islam terkemuka di 3 benua (Asia, Afrika, Eropa)',
      bgColor: 'bg-secondary-100',
      iconColor: 'text-secondary-500'
    },
    {
      icon: School,
      title: 'Pembinaan Karakter',
      description: 'Pembiasaan akhlakul karimah dalam kehidupan sehari-hari',
      bgColor: 'bg-primary-100',
      iconColor: 'text-primary-500'
    }
  ];

  const programs = [
    {
      title: 'MTs (Madrasah Tsanawiyah)',
      description: 'Program pendidikan setara SMP dengan kurikulum pesantren terpadu',
      image: 'bg-gradient-to-br from-primary-500 to-primary-700',
      quota: {
        putra: 32,
        putri: 30
      },
      highlights: ['Tahfidz Al-Qur\'an', 'Kajian Kitab Kuning', 'Bahasa Arab & Inggris']
    },
    {
      title: 'I\'dadiyah Lughawiy',
      description: 'Program intensif bahasa Arab setara SMA dengan pembelajaran mendalam',
      image: 'bg-gradient-to-br from-accent-400 to-accent-600',
      quota: {
        putra: 32,
        putri: 30
      },
      highlights: ['Intensive Arabic', 'Islamic Studies', 'Character Building']
    }
  ];

  const stats = [
    { number: '2026/2027', label: 'Tahun Ajaran', icon: GraduationCap },
    { number: '124', label: 'Kuota Santri', icon: Users },
    { number: 'A', label: 'Akreditasi BAN-SM', icon: Award },
    { number: '3', label: 'Benua Kerjasama', icon: Globe }
  ];

  const testimonials = [
    {
      name: 'Bapak Ahmad Hidayat',
      role: 'Wali Santri MTs',
      text: 'Alhamdulillah, anak saya berkembang sangat baik di Ulul Albaab. Kurikulumnya bagus, ustadz-ustadzahnya profesional, dan fasilitasnya lengkap.',
      rating: 5
    },
    {
      name: 'Ibu Siti Nurhaliza',
      role: 'Wali Santri I\'dadiyah',
      text: 'Sangat puas dengan sistem pendidikan di sini. Selain ilmu agama yang kuat, anak juga dibekali kemampuan bahasa Arab yang sangat baik.',
      rating: 5
    },
    {
      name: 'Muhammad Rizki',
      role: 'Santri Aktif',
      text: 'Lingkungan yang kondusif untuk belajar. Ustadz-ustadzah sangat perhatian dan metode pembelajarannya mudah dipahami.',
      rating: 5
    }
  ];

  const whyChooseUs = [
    'Kurikulum terpadu Rabbani, Cendekia, dan Mandiri yang terbukti efektif',
    'Terakreditasi A (BAN SM) dengan standar nasional',
    'Kerjasama dengan universitas Islam di 3 benua (Asia, Afrika, Eropa)',
    'Pengajar berkualitas dan berpengalaman',
    'Fasilitas lengkap dan lokasi strategis',
    'Biaya pendidikan terjangkau dengan sistem cicilan'
  ];

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230066ff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
              <Badge variant="primary" size="md">
                <School className="w-4 h-4" />
                PPDB 2026/2027 Dibuka!
              </Badge>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Pesantren
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-400">
                    Ulul Albaab Sukabumi
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Membentuk generasi Qur'ani yang berakhlak mulia, berilmu luas, dan bermanfaat bagi umat dengan kurikulum terpadu Rabbani, Cendekia, dan Mandiri
                </p>
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Badge variant="secondary" size="sm">Managed By Al-Andalus</Badge>
                  <Badge variant="accent" size="sm">Terakreditasi A</Badge>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/pendaftaran">
                  <Button variant="primary" size="lg" icon={ArrowRight}>
                    Daftar PPDB 2026/2027
                  </Button>
                </Link>
                <Link to="/profil">
                  <Button variant="outline" size="lg">
                    Pelajari Lebih Lanjut
                  </Button>
                </Link>
              </div>

              {/* Quick Info */}
              <div className="flex flex-col gap-3 pt-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Jl. K.H. Mama Oyon, Kp. Cihaur RT.04 RW.04, Cicantayan, Sukabumi, Jawa Barat 43155</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary-500" />
                  <a href="tel:081285300800" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                    0812-85-300800
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary-500" />
                  <a 
                    href="https://www.alandalus-ululalbaab.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-primary-600 hover:underline"
                  >
                    alandalus-ululalbaab.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Info Card */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main Card */}
                <Card variant="gradient" className="p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <School className="w-8 h-8 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">PPDB 2026/2027</h3>
                      <p className="text-gray-600">Pendaftaran Dibuka!</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/50 rounded-lg p-4 space-y-2">
                      <p className="text-sm text-gray-600 font-medium">Periode Pendaftaran:</p>
                      <p className="text-lg font-bold text-gray-800">31 Agustus - 30 Oktober 2025</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-500" />
                        <span className="text-gray-700">Pendaftaran Online 24/7</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-500" />
                        <span className="text-gray-700">Biaya Dapat Dicicil</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-500" />
                        <span className="text-gray-700">Kuota Terbatas</span>
                      </div>
                    </div>
                  </div>

                  <Link to="/pendaftaran">
                    <Button variant="primary" className="w-full" icon={ArrowRight}>
                      Mulai Pendaftaran
                    </Button>
                  </Link>
                </Card>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-400/20 rounded-full blur-3xl" aria-hidden="true"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom CSS for fadeIn animation */}
        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <stat.icon className="w-10 h-10 text-accent-400 mx-auto mb-3" aria-hidden="true" />
                <h3 className="text-4xl md:text-5xl font-bold text-white">{stat.number}</h3>
                <p className="text-primary-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="primary" size="lg" className="mb-4">
              <Heart className="w-4 h-4" />
              Keunggulan Kami
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Pesantren Ulul Albaab?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sistem pendidikan terpadu dengan kurikulum Rabbani, Cendekia, dan Mandiri
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                variant="default"
                className="group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="accent" size="lg" className="mb-4">
              <BookOpen className="w-4 h-4" />
              Program Unggulan
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Program Pendidikan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dua program pendidikan berkualitas dengan kuota terbatas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {programs.map((program, index) => (
              <Card key={index} variant="shadow" hover={true} className="overflow-hidden group">
                <div className={`h-48 ${program.image} rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                  <GraduationCap className="w-16 h-16 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-2xl text-gray-800 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                
                <div className="space-y-3 mb-4">
                  {program.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary-500" aria-hidden="true" />
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-xs text-gray-500">Kuota Putra</p>
                    <Badge variant="primary" size="sm">{program.quota.putra} Siswa</Badge>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Kuota Putri</p>
                    <Badge variant="accent" size="sm">{program.quota.putri} Siswa</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/program">
              <Button variant="primary" size="lg" icon={ArrowRight}>
                Lihat Detail Program
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left - Vision Card */}
            <div className="relative">
              <Card variant="gradient" className="p-12">
                <div className="space-y-8">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                    <Target className="w-10 h-10 text-primary-500" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      Visi Kami
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Menjadi lembaga pendidikan Islam terkemuka yang menghasilkan generasi Qur'ani, berakhlak mulia, berilmu luas, dan bermanfaat bagi umat
                    </p>
                  </div>
                  
                  <div className="bg-white/50 rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Managed By:</p>
                    <p className="text-xl font-bold text-primary-600">Al-Andalus Management</p>
                  </div>
                </div>
              </Card>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-500/20 rounded-full blur-3xl" aria-hidden="true"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary-400/20 rounded-full blur-3xl" aria-hidden="true"></div>
            </div>

            {/* Right - List */}
            <div className="space-y-8">
              <div>
                <Badge variant="secondary" size="lg" className="mb-4">
                  <Award className="w-4 h-4" />
                  Mengapa Kami?
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Alasan Memilih Pesantren Ulul Albaab
                </h2>
                <p className="text-xl text-gray-600">
                  Berbagai keunggulan yang menjadikan kami pilihan terbaik untuk pendidikan putra-putri Anda
                </p>
              </div>

              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary-50 transition-colors">
                    <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" aria-hidden="true" />
                    <span className="text-gray-700 text-lg">{reason}</span>
                  </div>
                ))}
              </div>

              <Link to="/profil">
                <Button variant="primary" size="lg" icon={ArrowRight}>
                  Pelajari Lebih Lanjut
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="accent" size="lg" className="mb-4">
              <Star className="w-4 h-4" />
              Testimoni
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Apa Kata Mereka?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pengalaman nyata dari santri dan wali santri kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="shadow" className="space-y-4">
                <div className="flex gap-1" role="img" aria-label={`Rating ${testimonial.rating} dari 5 bintang`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-500 text-accent-500" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
              title="Bergabunglah Bersama Kami"
              description="Daftarkan putra-putri Anda di Pesantren Ulul Albaab Sukabumi untuk masa depan yang lebih cerah"
              secondaryButtonText="Lihat Program"
              secondaryButtonLink="/program"
            />

    </div>
  );
};

export default Home;