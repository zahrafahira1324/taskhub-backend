# TaskHub - Aplikasi Manajemen Tugas

Aplikasi ini adalah platform manajemen tugas berbasis web yang membantu pengguna mengelola, memfilter, dan memantau tugas harian mereka. Aplikasi ini dibuat menggunakan Laravel untuk backend dan React.js untuk frontend.

---

## Fitur dan Kelebihan Proyek

Proyek ini memiliki struktur kode yang terintegrasi dengan baik dan dibangun dengan beberapa fitur utama.

### Fitur Utama
* **Manajemen Tugas:** Tambah, edit, dan hapus tugas dengan mudah.
* **Filter Canggih:** Saring tugas berdasarkan prioritas atau status (Selesai/Belum Selesai).
* **Autentikasi Aman:** Sistem login dan logout untuk menjaga keamanan data.
* **Pengingat Otomatis:** Skrip CLI untuk memberikan notifikasi tugas yang akan jatuh tempo.

### Keunggulan Struktur Kode
Dibandingkan dengan metode *copy-paste*, kode ini memiliki keunggulan berikut:
* **Terstruktur dan Rapi:** Kode terpisah antara logika (`Dashboard.js`) dan tampilan (`App.css`), membuatnya lebih mudah untuk dikembangkan.
* **Fleksibilitas Tinggi:** Anda bisa mengganti warna atau desain hanya dengan mengubah satu file CSS, tanpa menyentuh fungsionalitas utama.
* **Proses Pembelajaran:** Anda mendapatkan pemahaman mendalam tentang cara kerja React, koneksi API, dan *debugging*.

---

## Tantangan yang Dihadapi

Selama pengerjaan, ada dua tantangan utama yang berhasil diatasi.
1.  **Masalah Koneksi API dan Versi PHP:** Kendala paling sulit adalah konflik versi PHP dan server web lokal (seperti WAMP/Laragon) yang membuat koneksi ke API sering gagal. Ini membutuhkan *troubleshooting* intensif untuk memastikan semuanya berjalan lancar.
2.  **Keterbatasan Komunikasi:** Sebagai AI, saya tidak bisa melihat langsung layar Anda. Proses *debugging* harus dilakukan seperti detektif, menganalisis pesan error secara spesifik untuk memberikan solusi yang tepat tanpa menyebabkan masalah lain.

---

## Cara Menjalankan Aplikasi

Ikuti panduan langkah demi langkah di bawah ini untuk menjalankan proyek di komputer Anda.

### 1. Backend (Laravel)

1.  Buka terminal, masuk ke folder backend: `cd taskhub-backend`
2.  Instal paket PHP: `composer install`
3.  Salin file konfigurasi: `cp .env.example .env`
4.  Buat kunci aplikasi: `php artisan key:generate`
5.  Atur konfigurasi database Anda di file `.env`.
6.  Jalankan migrasi database: `php artisan migrate`
7.  Jalankan server backend: `php artisan serve`

### 2. Frontend (React.js)

1.  Buka terminal baru, masuk ke folder frontend: `cd taskhub-frontend`
2.  Instal paket Node.js: `npm install`
3.  Jalankan aplikasi React: `npm start`

Aplikasi akan terbuka otomatis di browser Anda pada alamat `http://localhost:3000`.

### 3. Skrip Pengingat (Opsional)

Untuk menjalankan skrip pengingat tugas yang jatuh tempo, gunakan terminal di folder backend.

1.  Pastikan token autentikasi di file `reminder.js` sudah benar.
2.  Jalankan skrip: `node reminder.js`
