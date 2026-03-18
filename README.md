# Website SD Negeri 103 Manado

Sistem informasi sekolah berbasis web modern yang dibangun menggunakan perpaduan **Laravel** (Backend & Admin Panel) dan **ReactJS** (Frontend Publik).

## Teknologi Utama

- **Backend Framework:** Laravel 11.x
- **Frontend Framework:** ReactJS (dibuild menggunakan Vite)
- **Styling UI:** Tailwind CSS (dengan efek modern dan responsif)
- **Authentication:** Laravel Breeze & Sanctum
- **Database:** MySQL

---

## 🚀 Fitur - Fitur Utama

### 1. Halaman Publik (Frontend - ReactJS)
Tampilan interaktif dan premium untuk diakses oleh murid, orang tua, maupun masyarakat luas.

- **Beranda (Home Page) Dinamis:**
  - Hero section menarik dengan animasi *pulse* dan gradasi warna.
  - Daftar keunggulan sekolah di seksi "Mengapa Memilih Kami".
  - Menampilkan cuplikan artikel/halaman (*Card View*) terbaru langsung di *landing page*.
- **Blog / Indeks Artikel:** Halaman mandiri yang mengumpulkan semua berita, informasi, dan *custom page* sebagai *grid card*.
- **Halaman Dinamis Berdasarkan URL (Slug):** Dapat mengakses konten halaman yang dibuat dari *Admin Panel* melalui URL spesifik.
- **Navigasi Cerdas:** *Navbar* yang membaca posisi *scroll* untuk mengganti warna (transparan ke padat). Berisi menu navigasi otomatis menyesuaikan halaman yang tersedia.

### 2. Panel Admin (Backend - Laravel Blade)
Halaman kontrol khusus administrator untuk mengatur konten website tanpa perlu pemrograman tambahan.

- **Autentikasi Aman:** Dilengkapi halaman *Login* berlapis pelindung *CSRF*.
- **Dashboard Ringkas:** Rangkuman statistik jumlah pengguna dan halaman dengan tampilan rapi.
- **Manajemen Pengguna (User CRUD):**
  - Melihat daftar administrator/user.
  - Menambah, mengubah, dan menghapus hak akses *user*.
- **Manajemen Halaman/Artikel (Page CRUD):**
  - Manajemen konten lengkap (Tambah, Edit, Hapus halaman web).
  - **Sistem Auto-Slug:** Otomatis menghasilkan URL ramah SEO (misal: "Visi Misi" menjadi `/page/visi-misi`) dari judul yang diketik tanpa perlu repot mengetik manual.
  - Toggle *Is Active* untuk menampilkan atau menyembunyikan tulisan di halaman publik.

---

## 🛠 Panduan Instalasi & Penggunaan Lokal

Ikuti langkah-langkah di bawah untuk menjalankan website ini di perangkat lokal (*development environment*).

### Prasyarat
- PHP 8.2 atau lebih baru
- Node.js & NPM
- Composer
- Server MySQL (Misal: XAMPP, Laragon, MySQL Server)

### Langkah Pemasangan

1. **Siapkan repositori dan masuk ke folder proyek:**
   ```bash
   cd sdn-103-manado
   ```

2. **Instal seluruh *dependencies* Backend & Frontend:**
   ```bash
   composer install
   npm install
   ```

3. **Pengaturan *Environment* (*.env*):**
   Ubah salinan file `.env.example` menjadi `.env`. Buka file `.env` dan atur koneksi basis data Anda ke MySQL:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=sdn_103_manado
   DB_USERNAME=root
   DB_PASSWORD=
   ```
   *(Catatan: Buat database dengan nama `sdn_103_manado` atau sesuai nama yang Anda atur di MySQL klien).*

4. **Konfigurasi Kunci Aplikasi:**
   ```bash
   php artisan key:generate
   ```

5. **Migrasi Tabel Basis Data & Reset Storage:**
   Langkah ini otomatis membuat tabel *users* dan *pages* di sistem.
   ```bash
   php artisan migrate
   ```

### Menjalankan Server
Website ini memerlukan servis PHP dan Vite agar berjalan 100%. Buka 2 tab *terminal* dan jalankan perintah ini secara bersamaan:

**Terminal 1 (Backend - Laravel):**
```bash
php artisan serve
```

**Terminal 2 (Frontend - React/Vite):**
```bash
npm run dev
```

Buka URL yang diberikan oleh `php artisan serve` di *browser* (biasanya `http://localhost:8000`).

---

## Hak Cipta
&copy; SD Negeri 103 Manado. Seluruh komponen proyek dirancang secara komprehensif.
# Test-Case-SDN-103-Manado
