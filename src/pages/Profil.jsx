import { 
  School, 
  Target, 
  Eye, 
  Heart,
  BookOpen,
  Users,
  Award,
  Building2,
  Utensils,
  Bed,
  Library,
  Wifi,
  Bus,
  Globe,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import CTASection from '../components/common/CTASection';
import { Link } from 'react-router-dom';

const Profil = () => {
  
  const facilities = [
    {
      icon: Building2,
      name: 'Asrama Nyaman',
      description: 'Asrama putra dan putri terpisah dengan fasilitas lengkap',
      color: 'text-primary-500'
    },
    {
      icon: BookOpen,
      name: 'Ruang Kelas Modern',
      description: 'Kelas ber-AC dengan LCD proyektor dan whiteboard',
      color: 'text-accent-500'
    },
    {
      icon: Library,
      name: 'Perpustakaan',
      description: 'Koleksi buku Islam dan umum yang lengkap',
      color: 'text-secondary-500'
    },
    {
      icon: Utensils,
      name: 'Kantin & Dapur',
      description: 'Makan 3x sehari dengan menu sehat dan bergizi',
      color: 'text-primary-500'
    },
    {
      icon: Wifi,
      name: 'Internet & WiFi',
      description: 'Akses internet berkecepatan tinggi untuk pembelajaran',
      color: 'text-accent-500'
    },
    {
      icon: Bus,
      name: 'Transportasi',
      description: 'Akses mudah ke berbagai fasilitas umum',
      color: 'text-secondary-500'
    },
    {
      icon: Heart,
      name: 'Fasilitas Kesehatan',
      description: 'Puskesmas Cicantayan 8 menit, RS terdekat 15 menit',
      color: 'text-primary-500'
    },
    {
      icon: Award,
      name: 'Fasilitas Olahraga',
      description: 'Lapangan basket, futsal, dan area olahraga lainnya',
      color: 'text-accent-500'
    }
  ];

  const achievements = [
    {
      title: 'Terakreditasi A (BAN-SM)',
      description: 'Akreditasi dari Badan Akreditasi Nasional Sekolah/Madrasah',
      year: '2024',
      icon: Award,
      color: 'bg-accent-100 text-accent-600'
    },
    {
      title: 'Kerjasama Internasional',
      description: 'Bekerjasama dengan universitas Islam di 3 benua',
      year: '2023',
      icon: Globe,
      color: 'bg-primary-100 text-primary-600'
    },
    {
      title: 'Kurikulum Terpadu',
      description: 'Sistem Rabbani, Cendekia, dan Mandiri yang efektif',
      year: '2022',
      icon: BookOpen,
      color: 'bg-secondary-100 text-secondary-600'
    }
  ];

  const curriculum = [
    {
      title: 'Rabbani',
      description: 'Fokus pada pembentukan karakter Islami, tahfidz Al-Qur\'an, dan pemahaman agama yang mendalam',
      features: ['Tahfidz Al-Qur\'an', 'Kajian Kitab Kuning', 'Akhlakul Karimah', 'Ibadah Yaumiyah'],
      icon: BookOpen,
      color: 'from-primary-500 to-primary-700'
    },
    {
      title: 'Cendekia',
      description: 'Pengembangan ilmu pengetahuan umum sesuai kurikulum nasional dengan standar internasional',
      features: ['Matematika', 'IPA & IPS', 'Bahasa Indonesia', 'Literasi Digital'],
      icon: Users,
      color: 'from-accent-400 to-accent-600'
    },
    {
      title: 'Mandiri',
      description: 'Pembentukan kemandirian, life skills, dan kesiapan menghadapi tantangan masa depan',
      features: ['Leadership', 'Public Speaking', 'Kewirausahaan', 'Problem Solving'],
      icon: Sparkles,
      color: 'from-secondary-500 to-secondary-700'
    }
  ];

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} aria-hidden="true"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <Badge variant="accent" size="lg" className="mb-6 bg-white/20 backdrop-blur-sm text-white border-white/30">
            <School className="w-5 h-5" />
            Profil Pesantren
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Pesantren Ulul Albaab Sukabumi
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-8">
            Lembaga Pendidikan Islam Modern dengan Kurikulum Terpadu Rabbani, Cendekia, dan Mandiri
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="accent" size="md" className="bg-white/10 backdrop-blur-sm text-white border-white/20">
              Terakreditasi A
            </Badge>
            <Badge variant="accent" size="md" className="bg-white/10 backdrop-blur-sm text-white border-white/20">
              Managed By Al-Andalus
            </Badge>
            <Badge variant="accent" size="md" className="bg-white/10 backdrop-blur-sm text-white border-white/20">
              Kerjasama 3 Benua
            </Badge>
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Visi */}
            <Card variant="gradient" hover={true} className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl" aria-hidden="true"></div>
              
              <div className="relative space-y-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <Eye className="w-8 h-8 text-primary-600" aria-hidden="true" />
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Visi</h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Menjadi lembaga pendidikan Islam terkemuka yang menghasilkan generasi Qur'ani yang berakhlak mulia, berilmu luas, dan bermanfaat bagi umat.
                  </p>
                </div>
                
                <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                  <CheckCircle className="w-5 h-5 text-primary-500" aria-hidden="true" />
                  <span className="text-sm font-medium text-gray-600">Managed By Al-Andalus Management</span>
                </div>
              </div>
            </Card>

            {/* Misi */}
            <Card variant="shadow" hover={true}>
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Misi</h2>
                  <ul className="space-y-3">
                    {[
                      'Menyelenggarakan pendidikan Islam terpadu yang berkualitas',
                      'Membentuk generasi Qur\'ani yang hafal dan memahami Al-Qur\'an',
                      'Mengembangkan potensi akademik dan non-akademik santri',
                      'Membangun karakter Islami yang kuat dan berakhlak mulia',
                      'Mempersiapkan santri yang mandiri dan siap menghadapi masa depan'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="primary" size="lg" className="mb-4">
              <BookOpen className="w-5 h-5" />
              Kurikulum Terpadu
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sistem Rabbani, Cendekia, dan Mandiri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrasi pendidikan agama, akademik, dan life skills yang komprehensif
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {curriculum.map((item, index) => (
              <Card key={index} variant="default" hover={true} className="group">
                <div className={`h-48 bg-gradient-to-br ${item.color} rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                  <item.icon className="w-16 h-16 text-white" aria-hidden="true" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                
                <div className="space-y-2">
                  {item.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary-500" aria-hidden="true" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" size="lg" className="mb-4">
              <Building2 className="w-5 h-5" />
              Fasilitas Lengkap
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sarana & Prasarana
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fasilitas modern yang mendukung pembelajaran optimal
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} variant="default" hover={true} className="text-center group">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <facility.icon className={`w-7 h-7 ${facility.color}`} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{facility.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{facility.description}</p>
              </Card>
            ))}
          </div>

          {/* Location Info */}
          <div className="mt-16 text-center">
            <Card variant="gradient" className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lokasi Strategis</h3>
              <p className="text-gray-700 mb-6">
                Jl. K.H. Mama Oyon, Kp. Cihaur RT.04 RW.04, Cicantayan, Sukabumi, Jawa Barat
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Akses Transportasi:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Terminal Kota Sukabumi: 30 menit</li>
                    <li>• Exit Tol Parungkuda (Bocimi): 50 menit</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">Fasilitas Kesehatan:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Puskesmas Cicantayan: 8 menit</li>
                    <li>• RS Betha Medika: 15 menit</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="accent" size="lg" className="mb-4">
              <Award className="w-5 h-5" />
              Prestasi Kami
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pencapaian & Penghargaan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai prestasi yang telah diraih pesantren
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} variant="shadow" hover={true} className="text-center">
                <div className={`w-16 h-16 ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <achievement.icon className="w-8 h-8" aria-hidden="true" />
                </div>
                <Badge variant="neutral" size="sm" className="mb-3">{achievement.year}</Badge>
                <h3 className="font-bold text-xl text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
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

export default Profil;