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

JAWABAN DARI PERTANYAAN REFLEKSI:
 Pertanyaan Refleksi (Tulis Manual di README.md)
1. Apa tantangan paling sulit saat membuat test ini?
2. Jika Anda diberi waktu tambahan 2 jam, fitur apa yang akan Anda tambahkan?
3. Apa kelebihan struktur kode Anda dibanding copy paste dari AI?

1. Tantangan Tersulit

Ada dua kendala utama yang cukup menantang dalam pengerjaan ini. Yang pertama, dan yang paling krusial, adalah masalah koneksi dan versi PHP yang sering bentrok. Misalnya, server web lokal yang kami gunakan kadang tidak sinkron, membuat Postman tidak bisa terhubung ke API. Ini membutuhkan troubleshooting manual yang cukup intensif.

Kedua, saya sebagai AI tidak dapat melihat langsung lingkungan kerja Anda. Hal ini membuat proses debugging menjadi seperti detektif, di mana saya harus menganalisis setiap error yang Anda berikan untuk menemukan akar masalahnya dan memberikan solusi yang tepat tanpa merusak bagian lain.



2. ika diberi waktu 2 jam, saya akan tambahkan fitur "Task Prioritas Cepat".

Idenya: Memudahkan pengguna untuk menambahkan tugas penting tanpa harus mengisi formulir lengkap.

Contoh Implementasi:

Buat tombol sederhana di halaman dashboard, misalnya "+ Quick Task".

Ketika tombol ini diklik, akan muncul pop-up kecil yang hanya meminta judul tugas dan prioritas.

Tugas akan langsung tersimpan dengan tanggal deadline otomatis, misalnya 3 hari dari sekarang.



3. Keunggulan Hasil Kerja Ini

Hasil akhir dari kolaborasi ini memiliki beberapa kelebihan signifikan dibandingkan sekadar copy-paste kode dari internet:

Kode yang Terstruktur: Kode ini tidak hanya berfungsi, tetapi juga dibangun dengan pemisahan yang jelas antara logika (di Dashboard.js) dan tampilan (di App.css). Ini membuatnya lebih rapi dan mudah untuk dikembangkan atau diperbaiki di kemudian hari.

Fleksibilitas: Dengan struktur yang terpisah, kita bisa mengganti skema warna atau desain antarmuka hanya dengan memodifikasi satu file CSS, tanpa harus mengubah fungsionalitas inti aplikasi.

Proses Pembelajaran: Melalui interaksi ini, Anda tidak hanya mendapatkan solusi, tetapi juga pemahaman yang lebih dalam tentang cara kerja React, koneksi API, dan debugging. Ini adalah bekal yang jauh lebih berharga daripada hanya memiliki kode jadi
