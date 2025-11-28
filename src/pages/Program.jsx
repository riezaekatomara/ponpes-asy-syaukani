import { 
  GraduationCap,
  BookOpen,
  Users,
  Clock,
  Award,
  CheckCircle,
  Calendar,
  Target,
  BookOpenCheck,
  Globe,
  Heart,
  Sparkles,
  School,
  Languages,
  Brain,
  Trophy,
  Lightbulb
} from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import CTASection from '../components/common/CTASection';

const Program = () => {
  
  const programs = [
    {
      id: 'mts',
      title: 'MTs (Madrasah Tsanawiyah)',
      subtitle: 'Setara SMP - Jenjang Pendidikan Menengah Pertama',
      icon: BookOpen,
      color: 'from-primary-500 to-primary-700',
      badge: 'Rabbani & Cendekia',
      quota: {
        putra: 32,
        putri: 30
      },
      description: 'Program pendidikan menengah pertama dengan kurikulum terpadu yang memadukan pendidikan agama Islam (Rabbani) dan akademik umum (Cendekia). Fokus pada pembentukan karakter Islami, tahfidz Al-Qur\'an, dan penguasaan ilmu pengetahuan umum.',
      highlights: [
        'Tahfidz Al-Qur\'an target 3-5 juz',
        'Kajian Kitab Kuning klasik',
        'Kurikulum Nasional (Kemendikbud)',
        'Bahasa Arab & Inggris aktif',
        'Praktik ibadah yaumiyah',
        'Pembinaan akhlakul karimah'
      ],
      curriculum: [
        { category: 'Pendidikan Agama', items: ['Al-Qur\'an & Tahfidz', 'Hadits', 'Fiqih', 'Aqidah Akhlak', 'Sejarah Islam'] },
        { category: 'Akademik Umum', items: ['Matematika', 'IPA (Fisika, Biologi, Kimia)', 'IPS (Geografi, Sejarah, Ekonomi)', 'Bahasa Indonesia', 'Bahasa Inggris'] },
        { category: 'Bahasa', items: ['Bahasa Arab', 'Bahasa Inggris', 'Conversation Practice', 'Grammar & Writing'] },
        { category: 'Keterampilan', items: ['Komputer & IT', 'Public Speaking', 'Leadership', 'Life Skills'] }
      ],
      schedule: [
        { time: '04.00 - 05.00', activity: 'Qiyamul Lail & Tahajjud' },
        { time: '05.00 - 06.00', activity: 'Shalat Subuh & Tilawah Al-Qur\'an' },
        { time: '06.00 - 07.00', activity: 'Murajaah Hafalan & Sarapan' },
        { time: '07.00 - 12.00', activity: 'Kegiatan Belajar Mengajar' },
        { time: '12.00 - 13.00', activity: 'Shalat Dzuhur & Makan Siang' },
        { time: '13.00 - 15.00', activity: 'Kegiatan Belajar Mengajar' },
        { time: '15.00 - 16.00', activity: 'Shalat Ashar & Istirahat' },
        { time: '16.00 - 17.30', activity: 'Ekstrakurikuler & Olahraga' },
        { time: '17.30 - 18.30', activity: 'Persiapan Maghrib & Makan Malam' },
        { time: '18.30 - 19.30', activity: 'Shalat Maghrib & Kajian Kitab' },
        { time: '19.30 - 21.00', activity: 'Shalat Isya & Belajar Mandiri' },
        { time: '21.00 - 04.00', activity: 'Istirahat Malam' }
      ],
      extracurricular: [
        { name: 'Pramuka', icon: Award },
        { name: 'Kaligrafi', icon: Heart },
        { name: 'Hadroh', icon: Users },
        { name: 'Olahraga', icon: Trophy },
        { name: 'Jurnalistik', icon: BookOpenCheck },
        { name: 'Sains Club', icon: Brain }
      ]
    },
    {
      id: 'idadiyah',
      title: 'I\'dadiyah Lughawiy',
      subtitle: 'Setara SMA - Program Intensif Bahasa Arab',
      icon: Languages,
      color: 'from-accent-400 to-accent-600',
      badge: 'Intensive Arabic',
      quota: {
        putra: 32,
        putri: 30
      },
      description: 'Program pendidikan setara SMA dengan fokus utama pada penguasaan bahasa Arab intensif dan studi Islam mendalam. Dirancang untuk santri yang ingin melanjutkan studi ke universitas Islam di Timur Tengah atau universitas Islam ternama lainnya.',
      highlights: [
        'Bahasa Arab intensif 4 kemahiran',
        'Studi Islam komprehensif',
        'Persiapan kuliah ke Timur Tengah',
        'Kajian kitab klasik & kontemporer',
        'Tahfidz Al-Qur\'an lanjutan',
        'Character building & leadership'
      ],
      curriculum: [
        { category: 'Bahasa Arab', items: ['Nahwu & Sharaf', 'Balaghah', 'Muthala\'ah', 'Ta\'bir (Insya)', 'Muhadatsah', 'Istima\''] },
        { category: 'Studi Islam', items: ['Tafsir Al-Qur\'an', 'Ulumul Hadits', 'Fiqih & Ushul Fiqih', 'Aqidah & Filsafat Islam', 'Sejarah Peradaban Islam'] },
        { category: 'Akademik', items: ['Matematika Dasar', 'Ilmu Pengetahuan Alam', 'Ilmu Pengetahuan Sosial', 'Bahasa Inggris', 'Komputer & IT'] },
        { category: 'Pengembangan Diri', items: ['Public Speaking', 'Research Methods', 'Academic Writing', 'Critical Thinking'] }
      ],
      schedule: [
        { time: '04.00 - 05.00', activity: 'Qiyamul Lail & Tahajjud' },
        { time: '05.00 - 06.00', activity: 'Shalat Subuh & Tilawah Al-Qur\'an' },
        { time: '06.00 - 07.00', activity: 'Murajaah Hafalan & Sarapan' },
        { time: '07.00 - 12.00', activity: 'Intensive Arabic Class' },
        { time: '12.00 - 13.00', activity: 'Shalat Dzuhur & Makan Siang' },
        { time: '13.00 - 15.00', activity: 'Islamic Studies & Academic' },
        { time: '15.00 - 16.00', activity: 'Shalat Ashar & Istirahat' },
        { time: '16.00 - 17.30', activity: 'Language Practice & Club' },
        { time: '17.30 - 18.30', activity: 'Persiapan Maghrib & Makan Malam' },
        { time: '18.30 - 19.30', activity: 'Shalat Maghrib & Kajian Kitab' },
        { time: '19.30 - 21.00', activity: 'Shalat Isya & Belajar Mandiri' },
        { time: '21.00 - 04.00', activity: 'Istirahat Malam' }
      ],
      extracurricular: [
        { name: 'Arabic Club', icon: Languages },
        { name: 'Debat Arab', icon: Users },
        { name: 'Karya Tulis', icon: BookOpenCheck },
        { name: 'Drama Arab', icon: Heart },
        { name: 'Tilawah', icon: Award },
        { name: 'Research', icon: Lightbulb }
      ]
    }
  ];

  const benefits = [
    {
      icon: BookOpenCheck,
      title: 'Kurikulum Terintegrasi',
      description: 'Perpaduan sempurna antara ilmu agama, akademik, dan life skills'
    },
    {
      icon: Users,
      title: 'Pengajar Berkualitas',
      description: 'Ustadz/Ustadzah berpengalaman dan berkompeten di bidangnya'
    },
    {
      icon: Globe,
      title: 'Jaringan Internasional',
      description: 'Kerjasama dengan universitas Islam di 3 benua'
    },
    {
      icon: Award,
      title: 'Akreditasi A',
      description: 'Terakreditasi A (BAN-SM) dengan standar nasional'
    }
  ];

  const whyChoose = [
    'Kurikulum terpadu Rabbani, Cendekia, dan Mandiri yang terbukti efektif',
    'Sistem pembelajaran aktif dengan metode modern dan tradisional',
    'Pembinaan karakter Islami dalam kehidupan sehari-hari',
    'Lingkungan belajar yang kondusif dan Islami',
    'Fasilitas lengkap dan modern',
    'Biaya pendidikan terjangkau dengan sistem cicilan',
    'Lokasi strategis dengan akses mudah',
    'Alumni yang sukses di berbagai bidang'
  ];

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700">
        {/* Pattern Background */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} 
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <Badge variant="primary" size="lg" className="mb-6 bg-white/20 backdrop-blur-sm text-gray-900 border-white/30">
            <BookOpen className="w-5 h-5" />
            Program Pendidikan
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Program Unggulan Kami
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto mb-8">
            Dua jenjang pendidikan berkualitas dengan kurikulum terpadu dan fokus berbeda
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Card variant="glass" className="text-center bg-white/90">
              <GraduationCap className="w-12 h-12 text-primary-600 mx-auto mb-3" aria-hidden="true" />
              <h3 className="font-bold text-xl text-gray-900 mb-1">MTs</h3>
              <p className="text-sm text-gray-700">Setara SMP</p>
              <div className="flex gap-2 justify-center mt-3">
                <Badge variant="primary" size="sm">Putra: 32</Badge>
                <Badge variant="accent" size="sm">Putri: 30</Badge>
              </div>
            </Card>
            <Card variant="glass" className="text-center bg-white/90">
              <Languages className="w-12 h-12 text-accent-600 mx-auto mb-3" aria-hidden="true" />
              <h3 className="font-bold text-xl text-gray-900 mb-1">I'dadiyah</h3>
              <p className="text-sm text-gray-700">Setara SMA</p>
              <div className="flex gap-2 justify-center mt-3">
                <Badge variant="primary" size="sm">Putra: 32</Badge>
                <Badge variant="accent" size="sm">Putri: 30</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="primary" size="lg" className="mb-4">
              <Sparkles className="w-5 h-5" />
              Keunggulan Program
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Program Kami?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai keunggulan yang menjadikan program kami pilihan terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} variant="default" hover={true} className="text-center group">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-primary-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Detail */}
      {programs.map((program, programIndex) => (
        <section 
          key={program.id} 
          id={program.id}
          className={programIndex % 2 === 0 ? 'py-20 bg-gradient-to-br from-gray-50 to-primary-50' : 'py-20 bg-white'}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Program Header */}
            <div className="text-center mb-16">
              <div className={`w-20 h-20 bg-gradient-to-br ${program.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <program.icon className="w-10 h-10 text-white" aria-hidden="true" />
              </div>
              <Badge variant="accent" size="lg" className="mb-4">{program.badge}</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                {program.title}
              </h2>
              <p className="text-xl text-gray-600 mb-6">{program.subtitle}</p>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                {program.description}
              </p>
            </div>

            {/* Highlights */}
            <Card variant="gradient" className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-primary-600" aria-hidden="true" />
                Highlight Program
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {program.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Curriculum */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Struktur Kurikulum
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {program.curriculum.map((curr, index) => (
                  <Card key={index} variant="shadow" hover={true}>
                    <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                      <BookOpenCheck className="w-5 h-5 text-primary-600" aria-hidden="true" />
                      {curr.category}
                    </h4>
                    <ul className="space-y-2">
                      {curr.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-primary-500 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </div>

            {/* Daily Schedule */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-2">
                <Clock className="w-8 h-8 text-primary-600" aria-hidden="true" />
                Jadwal Kegiatan Harian
              </h3>
              <Card variant="default">
                <div className="space-y-3">
                  {program.schedule.map((schedule, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-primary-50 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <Badge variant="primary" size="sm" className="font-mono">
                          {schedule.time}
                        </Badge>
                      </div>
                      <span className="text-gray-700">{schedule.activity}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Extracurricular */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Kegiatan Ekstrakurikuler
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {program.extracurricular.map((extra, index) => (
                  <Card key={index} variant="default" hover={true} className="text-center group">
                    <extra.icon className="w-8 h-8 text-primary-600 mx-auto mb-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
                    <p className="font-semibold text-sm text-gray-900">{extra.name}</p>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </section>
      ))}

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" size="lg" className="mb-4">
              <Award className="w-5 h-5" />
              Alasan Memilih Kami
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              8 Alasan Bergabung
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai keunggulan yang membuat kami berbeda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whyChoose.map((reason, index) => (
              <Card key={index} variant="default" hover={true}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg">{reason}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Daftar Sekarang!"
        description="Kuota terbatas! Daftarkan putra-putri Anda segera untuk PPDB 2026/2027"
        secondaryButtonText="Lihat Profil"
        secondaryButtonLink="/profil"
      />

    </div>
  );
};

export default Program;