import { useState } from 'react';
import { 
  UserPlus,
  CheckCircle,
  AlertCircle,
  Calendar,
  CreditCard,
  FileText,
  Users,
  MapPin,
  Phone,
  Mail,
  User,
  Home,
  GraduationCap,
  Building2,
  Download,
  Loader,
  School
} from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import CTASection from '../components/common/CTASection';

const Pendaftaran = () => {
  const [formData, setFormData] = useState({
    // Data Santri
    namaLengkap: '',
    jenisKelamin: '',
    tempatLahir: '',
    tanggalLahir: '',
    nik: '',
    anakKe: '',
    jumlahSaudara: '',
    
    // Kontak
    noHP: '',
    email: '',
    
    // Alamat
    alamat: '',
    rt: '',
    rw: '',
    kelurahan: '',
    kecamatan: '',
    kabupaten: '',
    provinsi: '',
    kodePos: '',
    
    // Data Orang Tua (Ayah)
    namaAyah: '',
    nikAyah: '',
    pekerjaanAyah: '',
    pendidikanAyah: '',
    penghasilanAyah: '',
    noHPAyah: '',
    
    // Data Orang Tua (Ibu)
    namaIbu: '',
    nikIbu: '',
    pekerjaanIbu: '',
    pendidikanIbu: '',
    penghasilanIbu: '',
    noHPIbu: '',
    
    // Pendidikan
    asalSekolah: '',
    alamatSekolah: '',
    npsn: '',
    
    // Program Pilihan
    programPilihan: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error saat user mulai mengetik
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validasi Data Santri
    if (!formData.namaLengkap.trim()) newErrors.namaLengkap = 'Nama lengkap wajib diisi';
    if (!formData.jenisKelamin) newErrors.jenisKelamin = 'Jenis kelamin wajib dipilih';
    if (!formData.tempatLahir.trim()) newErrors.tempatLahir = 'Tempat lahir wajib diisi';
    if (!formData.tanggalLahir) newErrors.tanggalLahir = 'Tanggal lahir wajib diisi';
    if (!formData.nik.trim()) newErrors.nik = 'NIK wajib diisi';
    else if (!/^\d{16}$/.test(formData.nik)) newErrors.nik = 'NIK harus 16 digit angka';

    // Validasi Kontak
    if (!formData.noHP.trim()) newErrors.noHP = 'Nomor HP wajib diisi';
    else if (!/^08\d{8,11}$/.test(formData.noHP)) newErrors.noHP = 'Format nomor HP tidak valid';
    if (!formData.email.trim()) newErrors.email = 'Email wajib diisi';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Format email tidak valid';

    // Validasi Alamat
    if (!formData.alamat.trim()) newErrors.alamat = 'Alamat lengkap wajib diisi';
    if (!formData.kecamatan.trim()) newErrors.kecamatan = 'Kecamatan wajib diisi';
    if (!formData.kabupaten.trim()) newErrors.kabupaten = 'Kabupaten wajib diisi';

    // Validasi Data Orang Tua
    if (!formData.namaAyah.trim()) newErrors.namaAyah = 'Nama ayah wajib diisi';
    if (!formData.namaIbu.trim()) newErrors.namaIbu = 'Nama ibu wajib diisi';
    if (!formData.noHPAyah.trim()) newErrors.noHPAyah = 'No HP ayah wajib diisi';

    // Validasi Pendidikan
    if (!formData.asalSekolah.trim()) newErrors.asalSekolah = 'Asal sekolah wajib diisi';

    // Validasi Program
    if (!formData.programPilihan) newErrors.programPilihan = 'Program pilihan wajib dipilih';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll ke error pertama
      const firstError = document.querySelector('.border-red-300');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    // Simulasi API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Di sini nanti integrate dengan backend
      console.log('Form Data:', formData);
      
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { number: 1, title: 'Isi Formulir', desc: 'Lengkapi data pendaftaran' },
    { number: 2, title: 'Upload Berkas', desc: 'Unggah dokumen persyaratan' },
    { number: 3, title: 'Bayar Pendaftaran', desc: 'Transfer uang pendaftaran' },
    { number: 4, title: 'Verifikasi', desc: 'Menunggu konfirmasi panitia' }
  ];

  const biaya = [
    { item: 'Uang Pendaftaran', nominal: 'Rp 250.000', note: 'Tidak dapat dikembalikan' },
    { item: 'Uang Pangkal', nominal: 'Rp 9.800.000', note: 'Pembayaran dapat dicicil' },
    { item: 'Iuran Taawun/Tahun', nominal: 'Rp 13.200.000', note: 'All in (SPP + Makan + Asrama)' },
    { item: 'Cicilan per Bulan', nominal: 'Rp 1.100.000', note: 'Jika memilih sistem cicilan' }
  ];

  const persyaratan = [
    'Fotocopy Kartu Keluarga (1 lembar)',
    'Fotocopy Akta Kelahiran (1 lembar)',
    'Fotocopy Ijazah/SKHUN (1 lembar)',
    'Fotocopy Raport 2 semester terakhir',
    'Pas Foto 3x4 (3 lembar)',
    'Surat Keterangan Sehat dari Dokter',
    'Surat Pernyataan bebas perilaku negatif',
    'Scan Pakta Integritas (format disediakan)'
  ];

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center p-4">
        <Card variant="shadow" className="max-w-2xl w-full text-center space-y-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-12 h-12 text-green-600" aria-hidden="true" />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Pendaftaran Berhasil! 🎉
            </h2>
            <p className="text-lg text-gray-600">
              Terima kasih telah mendaftar di Pesantren Ulul Albaab Sukabumi
            </p>
          </div>

          <Card variant="gradient" className="text-left">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Langkah Selanjutnya:</h3>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <span className="text-gray-700">Cek email Anda untuk informasi lebih lanjut</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <span className="text-gray-700">Upload berkas persyaratan melalui link yang dikirim via email</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <span className="text-gray-700">Lakukan pembayaran uang pendaftaran sebesar Rp 250.000</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <span className="text-gray-700">Tunggu konfirmasi dari panitia PPDB maksimal 2x24 jam</span>
              </li>
            </ol>
          </Card>

          <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-4">
            <p className="text-sm text-gray-700">
              <strong>Butuh bantuan?</strong> Hubungi CS kami di{' '}
              <a href="tel:081285300800" className="text-primary-600 font-semibold hover:underline">
                0812-85-300800
              </a>
            </p>
          </div>

          <Button variant="primary" size="lg" onClick={() => window.location.href = '/'} className="w-full">
            Kembali ke Beranda
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="accent" size="lg" className="mb-4 bg-white/20 backdrop-blur-sm text-white border-white/30">
            <UserPlus className="w-5 h-5" />
            PPDB 2026/2027
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Formulir Pendaftaran Online
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Lengkapi formulir di bawah ini untuk mendaftar sebagai santri baru
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center font-bold ${
                  index === 0 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step.number}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-xs text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Form */}
            <div className="lg:col-span-2">
              <Card variant="shadow">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Data Pendaftaran
                  </h2>
                  <p className="text-gray-600">
                    Pastikan semua data yang diisi benar dan sesuai dokumen resmi
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Data Santri */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 pb-2 border-b-2 border-primary-500">
                      <User className="w-5 h-5 text-primary-600" />
                      Data Calon Santri
                    </h3>
                    <div className="space-y-4">
                      <Input
                        label="Nama Lengkap"
                        name="namaLengkap"
                        placeholder="Nama lengkap sesuai Akta Kelahiran"
                        value={formData.namaLengkap}
                        onChange={handleChange}
                        error={errors.namaLengkap}
                        required
                        icon={User}
                      />
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Jenis Kelamin <span className="text-red-500">*</span>
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {['Laki-laki', 'Perempuan'].map((gender) => (
                              <label
                                key={gender}
                                className={`flex items-center justify-center gap-2 p-3 border-2 rounded-xl cursor-pointer transition-all ${
                                  formData.jenisKelamin === gender
                                    ? 'border-primary-500 bg-primary-50'
                                    : 'border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name="jenisKelamin"
                                  value={gender}
                                  checked={formData.jenisKelamin === gender}
                                  onChange={handleChange}
                                  className="w-4 h-4 text-primary-600"
                                />
                                <span className="font-medium">{gender}</span>
                              </label>
                            ))}
                          </div>
                          {errors.jenisKelamin && (
                            <p className="mt-2 text-sm text-red-600 flex items-start gap-2">
                              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              {errors.jenisKelamin}
                            </p>
                          )}
                        </div>

                        <Input
                          label="NIK"
                          name="nik"
                          placeholder="16 digit NIK"
                          value={formData.nik}
                          onChange={handleChange}
                          error={errors.nik}
                          required
                          icon={FileText}
                          maxLength={16}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          label="Tempat Lahir"
                          name="tempatLahir"
                          placeholder="Kota/Kabupaten"
                          value={formData.tempatLahir}
                          onChange={handleChange}
                          error={errors.tempatLahir}
                          required
                          icon={MapPin}
                        />
                        <Input
                          label="Tanggal Lahir"
                          name="tanggalLahir"
                          type="date"
                          value={formData.tanggalLahir}
                          onChange={handleChange}
                          error={errors.tanggalLahir}
                          required
                          icon={Calendar}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          label="Anak Ke"
                          name="anakKe"
                          type="number"
                          placeholder="Contoh: 1"
                          value={formData.anakKe}
                          onChange={handleChange}
                          icon={Users}
                        />
                        <Input
                          label="Jumlah Saudara"
                          name="jumlahSaudara"
                          type="number"
                          placeholder="Contoh: 3"
                          value={formData.jumlahSaudara}
                          onChange={handleChange}
                          icon={Users}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Kontak */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 pb-2 border-b-2 border-primary-500">
                      <Phone className="w-5 h-5 text-primary-600" />
                      Kontak
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        label="Nomor HP/WhatsApp"
                        name="noHP"
                        type="tel"
                        placeholder="08xxxxxxxxxx"
                        value={formData.noHP}
                        onChange={handleChange}
                        error={errors.noHP}
                        required
                        icon={Phone}
                      />
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        required
                        icon={Mail}
                      />
                    </div>
                  </div>

                  {/* Alamat */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 pb-2 border-b-2 border-primary-500">
                      <Home className="w-5 h-5 text-primary-600" />
                      Alamat Lengkap
                    </h3>
                    <div className="space-y-4">
                      <Input
                        label="Alamat Lengkap"
                        name="alamat"
                        placeholder="Jalan, No. Rumah, Desa/Kelurahan"
                        value={formData.alamat}
                        onChange={handleChange}
                        error={errors.alamat}
                        required
                        icon={Home}
                      />
                      
                      <div className="grid grid-cols-4 gap-4">
                        <Input
                          label="RT"
                          name="rt"
                          placeholder="000"
                          value={formData.rt}
                          onChange={handleChange}
                        />
                        <Input
                          label="RW"
                          name="rw"
                          placeholder="000"
                          value={formData.rw}
                          onChange={handleChange}
                        />
                        <div className="col-span-2">
                          <Input
                            label="Kode Pos"
                            name="kodePos"
                            placeholder="43xxx"
                            value={formData.kodePos}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          label="Kelurahan/Desa"
                          name="kelurahan"
                          placeholder="Nama Kelurahan/Desa"
                          value={formData.kelurahan}
                          onChange={handleChange}
                        />
                        <Input
                          label="Kecamatan"
                          name="kecamatan"
                          placeholder="Nama Kecamatan"
                          value={formData.kecamatan}
                          onChange={handleChange}
                          error={errors.kecamatan}
                          required
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          label="Kabupaten/Kota"
                          name="kabupaten"
                          placeholder="Nama Kabupaten/Kota"
                          value={formData.kabupaten}
                          onChange={handleChange}
                          error={errors.kabupaten}
                          required
                        />
                        <Input
                          label="Provinsi"
                          name="provinsi"
                          placeholder="Nama Provinsi"
                          value={formData.provinsi}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Data Orang Tua - Ayah */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 pb-2 border-b-2 border-primary-500">
                      <Users className="w-5 h-5 text-primary-600" />
                      Data Ayah
                    </h3>
                    <div className="space-y-4">
                      <Input
                        label="Nama Lengkap Ayah"
                        name="namaAyah"
                        placeholder="Nama lengkap ayah"
                        value={formData.namaAyah}
                        onChange={handleChange}
                        error={errors.namaAyah}
                        required
                        icon={User}
                      />
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          label="NIK Ayah"
                          name="nikAyah"
                          placeholder="16 digit NIK"
                          value={formData.nikAyah}
                          onChange={handleChange}
                          icon={FileText}
                          maxLength={16}
                        />
                        <Input
                          label="No HP Ayah"
                          name="noHPAyah"
                          type="tel"
                          placeholder="08xxxxxxxxxx"
                          value={formData.noHPAyah}
                          onChange={handleChange}
                          error={errors.noHPAyah}
                          required
                          icon={Phone}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          label="Pekerjaan Ayah"
                          name="pekerjaanAyah"
                          placeholder="Pekerjaan/Profesi"
                          value={formData.pekerjaanAyah}
                          onChange={handleChange}
                          icon={Building2}
                        />
                        <Input
                          label="Pendidikan Terakhir"
                          name="pendidikanAyah"
                          placeholder="SD/SMP/SMA/S1/S2/S3"
                          value={formData.pendidikanAyah}
                          onChange={handleChange}
                          icon={GraduationCap}
                        />
                      </div>

                      <Input
                        label="Penghasilan per Bulan"
                        name="penghasilanAyah"
                        placeholder="Contoh: Rp 5.000.000"
                        value={formData.penghasilanAyah}
                        onChange={handleChange}
                        icon={CreditCard}
                      />
                    </div>
                  </div>

                  {/* Data Orang Tua - Ibu */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 pb-2 border-b-2 border-primary-500">
                      <Users className="w-5 h-5 text-primary-600" />
                      Data Ibu
                    </h3>
                    <div className="space-y-4">
                      <Input
                        label="Nama Lengkap Ibu"
                        name="namaIbu"
                        placeholder="Nama lengkap ibu"
                        value={formData.namaIbu}
                        onChange={handleChange}
                        error={errors.namaIbu}
                        required
                        icon={User}
                      />
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          label="NIK Ibu"
                          name="nikIbu"
                          placeholder="16 digit NIK"
                          value={formData.nikIbu}
                          onChange={handleChange}
                          icon={FileText}
                          maxLength={16}
                        />
                        <Input
                          label="No HP Ibu"
                          name="noHPIbu"
                          type="tel"
                          placeholder="08xxxxxxxxxx"
                          value={formData.noHPIbu}
                          onChange={handleChange}
                          icon={Phone}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          label="Pekerjaan Ibu"
                          name="pekerjaanIbu"
                          placeholder="Pekerjaan/Profesi"
                          value={formData.pekerjaanIbu}
                          onChange={handleChange}
                          icon={Building2}
                        />
                        <Input
                          label="Pendidikan Terakhir"
                          name="pendidikanIbu"
                          placeholder="SD/SMP/SMA/S1/S2/S3"
                          value={formData.pendidikanIbu}
                          onChange={handleChange}
                          icon={GraduationCap}
                        />
                      </div>

                      <Input
                        label="Penghasilan per Bulan"
                        name="penghasilanIbu"
                        placeholder="Contoh: Rp 3.000.000 (Isi 0 jika tidak bekerja)"
                        value={formData.penghasilanIbu}
                        onChange={handleChange}
                        icon={CreditCard}
                      />
                    </div>
                  </div>

                  {/* Pendidikan */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 pb-2 border-b-2 border-primary-500">
                      <GraduationCap className="w-5 h-5 text-primary-600" />
                      Riwayat Pendidikan
                    </h3>
                    <div className="space-y-4">
                      <Input
                        label="Asal Sekolah"
                        name="asalSekolah"
                        placeholder="Nama sekolah asal"
                        value={formData.asalSekolah}
                        onChange={handleChange}
                        error={errors.asalSekolah}
                        required
                        icon={School}
                      />
                      <Input
                        label="Alamat Sekolah"
                        name="alamatSekolah"
                        placeholder="Alamat lengkap sekolah"
                        value={formData.alamatSekolah}
                        onChange={handleChange}
                        icon={MapPin}
                      />
                      <Input
                        label="NPSN (Nomor Pokok Sekolah Nasional)"
                        name="npsn"
                        placeholder="8 digit NPSN (jika ada)"
                        value={formData.npsn}
                        onChange={handleChange}
                        icon={FileText}
                      />
                    </div>
                  </div>

                  {/* Program Pilihan */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 pb-2 border-b-2 border-primary-500">
                      <GraduationCap className="w-5 h-5 text-primary-600" />
                      Program Pilihan
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Pilih Program Pendidikan <span className="text-red-500">*</span>
                        </label>
                        <div className="space-y-3">
                          {[
                            {
                              value: 'MTs',
                              title: 'MTs (Madrasah Tsanawiyah)',
                              desc: 'Program setara SMP dengan kurikulum Rabbani, Cendekia, dan Mandiri',
                              quota: { putra: 32, putri: 30 }
                            },
                            {
                              value: 'Idadiyah',
                              title: "I'dadiyah Lughawiy",
                              desc: 'Program intensif bahasa Arab setara SMA, durasi 1 tahun penuh',
                              quota: { putra: 32, putri: 30 }
                            }
                          ].map((program) => (
                            <label
                              key={program.value}
                              className={`flex items-start gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                                formData.programPilihan === program.value
                                  ? 'border-primary-500 bg-primary-50'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <input
                                type="radio"
                                name="programPilihan"
                                value={program.value}
                                checked={formData.programPilihan === program.value}
                                onChange={handleChange}
                                className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0"
                              />
                              <div className="flex-1">
                                <h4 className="font-bold text-gray-900 mb-1">{program.title}</h4>
                                <p className="text-sm text-gray-600 mb-2">{program.desc}</p>
                                <div className="flex items-center gap-3 text-xs">
                                  <Badge variant="primary" size="sm">
                                    Putra: {program.quota.putra} siswa
                                  </Badge>
                                  <Badge variant="accent" size="sm">
                                    Putri: {program.quota.putri} siswa
                                  </Badge>
                                </div>
                              </div>
                            </label>
                          ))}
                        </div>
                        {errors.programPilihan && (
                          <p className="mt-2 text-sm text-red-600 flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            {errors.programPilihan}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Pernyataan */}
                  <div className="pt-6 border-t-2 border-gray-200">
                    <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-4 mb-6">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-gray-700 space-y-2">
                          <p className="font-semibold">Perhatian:</p>
                          <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>Pastikan semua data yang diisi sudah benar dan sesuai dengan dokumen resmi</li>
                            <li>Setelah submit, Anda akan menerima email konfirmasi untuk upload berkas</li>
                            <li>Uang pendaftaran sebesar Rp 250.000 tidak dapat dikembalikan</li>
                            <li>Proses verifikasi maksimal 2x24 jam setelah pembayaran</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        className="w-5 h-5 text-primary-600 border-gray-300 rounded mt-0.5"
                      />
                      <span className="text-sm text-gray-700">
                        Saya menyatakan bahwa data yang saya isi adalah <strong>benar dan dapat dipertanggungjawabkan</strong>. Saya bersedia mengikuti seluruh ketentuan dan peraturan yang berlaku di Pesantren Ulul Albaab Sukabumi.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="flex-1"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      Cek Kembali
                    </Button>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="flex-1"
                      icon={isSubmitting ? Loader : UserPlus}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Memproses...' : 'Daftar Sekarang'}
                    </Button>
                  </div>
                </form>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Informasi Biaya */}
              <Card variant="gradient" className="sticky top-24">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b-2 border-white/20">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">Informasi Biaya</h3>
                      <p className="text-sm text-gray-600">PPDB 2026/2027</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {biaya.map((item, index) => (
                      <div key={index} className="bg-white/50 rounded-lg p-4">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <span className="text-sm font-semibold text-gray-700">{item.item}</span>
                          <span className="text-lg font-bold text-primary-600 whitespace-nowrap">{item.nominal}</span>
                        </div>
                        <p className="text-xs text-gray-600">{item.note}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-accent-50 border-2 border-accent-200 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-gray-700">
                        <p className="font-semibold mb-1">Fasilitas All-In:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>SPP Bulanan</li>
                          <li>Makan 3x sehari</li>
                          <li>Asrama & Laundry</li>
                          <li>Seragam & Buku</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Persyaratan */}
              <Card variant="shadow">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b-2 border-gray-200">
                    <FileText className="w-5 h-5 text-primary-600" />
                    <h3 className="font-bold text-lg text-gray-800">Persyaratan Berkas</h3>
                  </div>

                  <ul className="space-y-2">
                    {persyaratan.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-3">
                    <p className="text-xs text-gray-700">
                      <strong>Catatan:</strong> Berkas akan di-upload setelah mengisi formulir ini melalui link yang dikirim via email
                    </p>
                  </div>

                  <Button variant="outline" size="sm" className="w-full" icon={Download}>
                    Download Pakta Integritas
                  </Button>
                </div>
              </Card>

              {/* Contact Support */}
              <Card variant="default" className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
                <div className="space-y-4">
                  <h3 className="font-bold text-lg">Butuh Bantuan?</h3>
                  <p className="text-sm text-primary-100">
                    Tim kami siap membantu Anda dalam proses pendaftaran
                  </p>
                  
                  <div className="space-y-3">
                    <a 
                      href="https://wa.me/6281285300800?text=Halo,%20saya%20ingin%20bertanya%20tentang%20PPDB%202026/2027" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <div>
                        <p className="text-xs text-primary-100">CS Pusat</p>
                        <p className="font-semibold">0812-85-300800</p>
                      </div>
                    </a>
                    
                    <a 
                      href="tel:087836270966"
                      className="flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <div>
                        <p className="text-xs text-primary-100">Recruitment</p>
                        <p className="font-semibold">0878-3627-0966</p>
                      </div>
                    </a>

                    <a 
                      href="mailto:info@alandalus-ululalbaab.com"
                      className="flex items-center gap-3 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <div>
                        <p className="text-xs text-primary-100">Email</p>
                        <p className="font-semibold text-sm">info@alandalus-ululalbaab.com</p>
                      </div>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="primary" size="lg" className="mb-4">
              <AlertCircle className="w-4 h-4" />
              FAQ Pendaftaran
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Kapan periode pendaftaran PPDB 2026/2027?',
                a: 'Pendaftaran dibuka mulai 31 Agustus hingga 30 Oktober 2025. Kuota terbatas, jadi segera daftar!'
              },
              {
                q: 'Apakah bisa mendaftar secara offline?',
                a: 'Saat ini pendaftaran hanya dilakukan secara online melalui website ini. Namun Anda bisa datang langsung ke pesantren untuk konsultasi.'
              },
              {
                q: 'Bagaimana cara pembayaran uang pendaftaran?',
                a: 'Setelah mengisi formulir, Anda akan menerima email dengan informasi rekening untuk transfer uang pendaftaran sebesar Rp 250.000.'
              },
              {
                q: 'Apakah biaya bisa dicicil?',
                a: 'Ya, biaya pendidikan dapat dicicil. Uang pangkal Rp 9.800.000 dan iuran taawun Rp 13.200.000/tahun dapat dicicil per bulan sebesar Rp 1.100.000.'
              },
              {
                q: 'Kapan pengumuman hasil seleksi?',
                a: 'Pengumuman hasil seleksi akan diinformasikan maksimal 2x24 jam setelah pembayaran uang pendaftaran dan upload berkas lengkap.'
              },
              {
                q: 'Apa saja yang termasuk dalam iuran taawun?',
                a: 'Iuran taawun sudah all-in mencakup: SPP bulanan, makan 3x sehari, asrama, laundry, seragam, dan buku pelajaran.'
              }
            ].map((faq, index) => (
              <Card key={index} variant="default" hover={true}>
                <h4 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold">
                    ?
                  </span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 ml-8">{faq.a}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Masih ada pertanyaan lain?
            </p>
            <Button variant="primary" size="lg" icon={Phone}>
              Hubungi Customer Service
            </Button>
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

export default Pendaftaran;