import './bootstrap';
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

// --- Shared Components ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link to="/" className={`flex items-center font-extrabold text-2xl tracking-tight transition-colors ${scrolled ? 'text-blue-700' : 'text-blue-900 drop-shadow-sm'}`}>
              <span className="mr-2 text-3xl">🏫</span> SDN 103 Manado
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className={`font-semibold transition-colors hover:text-blue-500 ${location.pathname === '/' ? 'text-blue-600' : (scrolled ? 'text-gray-700' : 'text-blue-900')}`}>Beranda</Link>
              <Link to="/blog" className={`font-semibold transition-colors hover:text-blue-500 ${location.pathname === '/blog' ? 'text-blue-600' : (scrolled ? 'text-gray-700' : 'text-blue-900')}`}>Blog</Link>
            </div>
          </div>
          <div>
            <a href="/login" className={`px-6 py-2.5 rounded-full font-bold text-sm shadow-md transition-all duration-300 hover:-translate-y-0.5 ${scrolled ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg' : 'bg-white text-blue-700 hover:bg-blue-50 hover:shadow-lg'}`}>
              Admin Panel
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 text-center py-10 mt-auto border-t border-slate-800 relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center bg-slate-800/50 p-6 rounded-2xl">
        <div className="mb-4 md:mb-0 text-left">
          <h4 className="text-xl font-bold text-white mb-2">SD Negeri 103 Manado</h4>
          <p className="text-sm">Pendidikan Berkualitas untuk Generasi Cerdas.</p>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Hak Cipta Dilindungi.
        </div>
      </div>
    </div>
  </footer>
);

// --- Pages ---
const Home = ({ pages }) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 flex-grow flex items-center">
        <div className="absolute top-0 left-1/2 -ml-[40rem] w-[80rem] h-[80rem] bg-gradient-to-tr from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl -z-10 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100/80 text-blue-800 font-semibold text-sm border border-blue-200/50 backdrop-blur-sm shadow-sm">
            🎓 Pendaftaran Peserta Didik Baru Telah Dibuka
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Membangun Karakter, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Mencetak Prestasi</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            SD Negeri 103 Manado berkomitmen menghadirkan pendidikan inklusif, inovatif, dan berpusat pada nilai-nilai moral. Bergabunglah bersama kami untuk masa depan yang lebih cerah.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/page/profil-sekolah" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/30 font-bold transition-all duration-300 hover:-translate-y-1">
              Jelajahi Profil Kami
            </Link>
            <a href="#features" className="bg-white text-slate-700 px-8 py-3.5 rounded-full shadow-md border border-slate-200 hover:border-blue-300 hover:text-blue-600 font-bold transition-all duration-300 hover:-translate-y-1">
              Keunggulan Sekolah
            </a>
          </div>
        </div>
      </div>

      {/* Pages as Cards Section */}
      {pages && pages.length > 0 && (
        <div id="blog-section" className="py-24 bg-slate-50 relative border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Informasi & Artikel</h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6"></div>
              <p className="text-slate-600 max-w-2xl mx-auto">Kumpulan halaman informasi, berita, dan kegiatan SD Negeri 103 Manado.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pages.slice(0, 3).map(page => (
                <Link key={page.id} to={`/page/${page.slug}`} className="group bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-2">
                  <div className="h-48 bg-gradient-to-br from-emerald-100 to-teal-50 flex items-center justify-center p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-300"></div>
                    <span className="text-6xl drop-shadow-md group-hover:scale-110 transition-transform duration-300">📰</span>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors">{page.title}</h3>
                    <p className="text-slate-500 line-clamp-3 leading-relaxed mb-6 flex-grow text-sm">
                      {page.content.replace(/<[^>]+>/g, '') || "Baca selengkapnya mengenai halaman ini..."}
                    </p>
                    <div className="text-emerald-600 font-bold text-sm tracking-wide uppercase flex items-center">
                      Mulai Membaca <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {pages.length > 3 && (
              <div className="text-center mt-12">
                <Link to="/blog" className="inline-flex items-center px-6 py-3 border border-slate-300 hover:border-emerald-500 hover:text-emerald-600 text-slate-700 rounded-full font-bold transition-all duration-300 bg-white hover:shadow-md">
                  Lihat Semua Artikel
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Features Section */}
      <div id="features" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Mengapa Memilih Kami?</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="group bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-200 hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300 shadow-sm group-hover:shadow-blue-500/30">
                <span className="text-2xl group-hover:text-white transition-colors duration-300">🌟</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Pendidikan Karakter</h3>
              <p className="text-slate-600 leading-relaxed">Fokus utama kami adalah menanamkan integritas, etika, dan nilai-nilai moral yang kokoh sejak dini.</p>
            </div>
            {/* Feature 2 */}
            <div className="group bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-200 hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-600 transition-all duration-300 shadow-sm group-hover:shadow-indigo-500/30">
                <span className="text-2xl group-hover:text-white transition-colors duration-300">🏫</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Fasilitas Modern</h3>
              <p className="text-slate-600 leading-relaxed">Didukung lingkungan belajar interaktif, perpustakaan memadai, dan fasilitas olahraga yang bersih.</p>
            </div>
            {/* Feature 3 */}
            <div className="group bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-cyan-200 hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-600 transition-all duration-300 shadow-sm group-hover:shadow-cyan-500/30">
                <span className="text-2xl group-hover:text-white transition-colors duration-300">👩‍🏫</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Tenaga Pendidik Ahli</h3>
              <p className="text-slate-600 leading-relaxed">Guru-guru profesional, berpengalaman, dan penuh dedikasi untuk mengoptimalkan potensi setiap siswa.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogIndex = ({ pages }) => {
  return (
    <div className="flex-grow bg-slate-50 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Kumpulan Halaman & Artikel</h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Jelajahi semua informasi resmi, berita, dan profil dari SDN 103 Manado.</p>
        </div>

        {pages.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100">
            <span className="text-6xl mb-4 block">📭</span>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Belum Ada Halaman</h3>
            <p className="text-slate-500">Halaman atau artikel akan muncul di sini setelah ditambahkan oleh admin.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pages.map((page, idx) => (
              <Link key={page.id} to={`/page/${page.slug}`} className="group bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-2">
                <div className={`h-48 flex items-center justify-center p-6 relative overflow-hidden ${idx % 3 === 0 ? 'bg-gradient-to-br from-emerald-100 to-teal-50' : idx % 3 === 1 ? 'bg-gradient-to-br from-blue-100 to-indigo-50' : 'bg-gradient-to-br from-purple-100 to-pink-50'}`}>
                  <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  <span className="text-6xl drop-shadow-md group-hover:scale-110 transition-transform duration-300">
                    {idx % 3 === 0 ? '📰' : idx % 3 === 1 ? '💡' : '📌'}
                  </span>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-emerald-700 transition-colors">{page.title}</h3>
                  <p className="text-slate-500 line-clamp-3 leading-relaxed mb-6 flex-grow text-sm">
                    {page.content.replace(/<[^>]+>/g, '') || "Baca selengkapnya mengenai halaman ini..."}
                  </p>
                  <div className="text-emerald-600 font-bold text-sm tracking-wide uppercase flex items-center">
                    Buka Halaman <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const DynamicPage = () => {
  const { slug } = useParams();
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios.get(`/api/pages/${slug}`)
      .then(res => {
        setPageData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return (
    <div className="flex-grow flex items-center justify-center min-h-screen bg-slate-50">
      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
  );

  if (error) return (
    <div className="flex-grow flex flex-col items-center justify-center min-h-screen bg-slate-50 px-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-lg border border-slate-100">
        <span className="text-6xl mb-4 block">🔍</span>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Halaman Tidak Ditemukan</h2>
        <p className="text-slate-600 mb-6">Maaf, halaman yang Anda cari mungkin telah dihapus atau URL salah.</p>
        <Link to="/" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors">
          &larr; Kembali ke Beranda
        </Link>
      </div>
    </div>
  );

  return (
    <div className="flex-grow bg-slate-50 pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 shadow-xl shadow-slate-200/50 rounded-3xl border border-slate-100 transition-all hover:border-blue-100 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500"></div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8 border-b border-slate-100 pb-6">{pageData.title}</h1>
        <div className="prose prose-lg prose-blue max-w-none text-slate-600 prose-headings:text-slate-800 prose-a:text-blue-600 hover:prose-a:text-blue-500 marker:text-blue-500 prose-li:my-1"
          dangerouslySetInnerHTML={{ __html: pageData.content }} />
      </div>
    </div>
  );
};

// --- App Container ---
const App = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    // Fetch pages for navigation menu and blog index
    axios.get('/api/pages')
      .then(res => setPages(res.data))
      .catch(err => console.error("Error fetching pages:", err));
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans selection:bg-blue-200 selection:text-blue-900">
        <Navbar />
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home pages={pages} />} />
            <Route path="/blog" element={<BlogIndex pages={pages} />} />
            <Route path="/page/:slug" element={<DynamicPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

const el = document.getElementById('app');
if (el) {
  createRoot(el).render(<App />);
}
