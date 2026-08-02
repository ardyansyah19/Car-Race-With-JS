README - SIMULASI BALAP MOBIL P5.JS
=========================================

1. DESKRIPSI
------------
Proyek ini merupakan simulasi visual balap 4 mobil menggunakan p5.js.
Setiap mobil bergerak dari garis START menuju FINISH pada lintasan
dengan panjang 10 km.

Simulasi menggunakan kecepatan berbeda untuk setiap mobil sehingga
pergerakan dan urutan finish mengikuti perbandingan kecepatan yang
telah ditentukan.

2. SPESIFIKASI BALAPAN
----------------------
Panjang lintasan : 10 km

Mobil A : 10 km/jam
Mobil B : 90 km/jam
Mobil C : 80 km/jam
Mobil D : 70 km/jam

Perkiraan waktu tempuh:
- Mobil A : 60 menit
- Mobil B : 6 menit 40 detik
- Mobil C : 7 menit 30 detik
- Mobil D : sekitar 8 menit 34 detik

Urutan finish secara teori:
1. Mobil B
2. Mobil C
3. Mobil D
4. Mobil A

3. STRUKTUR FILE
----------------
Pastikan file pada p5.js Web Editor tersusun seperti berikut:

Sketch Files
|
|-- carA.png
|-- carB.png
|-- carC.png
|-- carD.png
|-- jalan.jpg
|
|-- index.html
|-- sketch.js
|-- style.css
|-- README.txt

4. FUNGSI FILE
--------------
index.html
Digunakan sebagai struktur utama halaman dan memuat p5.js,
stylesheet, tombol kontrol, serta sketch.js.

sketch.js
Berisi seluruh logika simulasi balap, termasuk:
- Memuat gambar jalan dan mobil
- Mengatur posisi mobil
- Mengatur kecepatan mobil
- Menghitung jarak tempuh
- Mengatur pergerakan mobil
- Menghitung waktu balapan
- Menentukan mobil yang telah finish
- Tombol mulai dan reset
- Kontrol keyboard

style.css
Digunakan untuk mengatur tampilan halaman, tombol, panel informasi,
dan tampilan responsif.

carA.png
Gambar Mobil A.

carB.png
Gambar Mobil B.

carC.png
Gambar Mobil C.

carD.png
Gambar Mobil D.

jalan.jpg
Gambar/background lintasan balap.

5. CARA MENJALANKAN
-------------------
1. Buka p5.js Web Editor.
2. Buat atau buka project.
3. Masukkan seluruh file sesuai struktur pada bagian 3.
4. Pastikan nama file gambar sama persis dengan yang digunakan
   pada sketch.js.
5. Klik tombol Play (segitiga) pada p5.js Web Editor.
6. Klik tombol "MULAI BALAP".
7. Balapan akan dimulai dari posisi START.
8. Klik "RESET" untuk mengembalikan seluruh mobil ke posisi awal.

Kontrol keyboard:
- SPACE : Memulai balapan
- R     : Reset balapan

6. TEKNOLOGI
------------
Proyek dibuat menggunakan:
- HTML5
- CSS3
- JavaScript
- p5.js

7. PERGERAKAN MOBIL
-------------------
Pergerakan mobil menggunakan deltaTime pada p5.js.

Penggunaan deltaTime membuat perhitungan perpindahan mobil
berdasarkan waktu nyata antar-frame, sehingga animasi lebih stabil
dan tidak terlalu bergantung pada jumlah frame per detik (FPS).

Konversi kecepatan:
km/jam -> km/detik

Rumus:
kecepatan per detik = kecepatan km/jam / 3600

Jarak yang ditempuh setiap frame dihitung berdasarkan:
jarak = kecepatan per detik x deltaTime

Progress mobil kemudian dihitung berdasarkan:
progress = jarak tempuh / panjang lintasan

8. CATATAN
----------
Kecepatan yang digunakan merupakan kecepatan sebenarnya sesuai
spesifikasi simulasi.

Karena panjang lintasan adalah 10 km, waktu balapan cukup lama,
terutama untuk Mobil A yang hanya memiliki kecepatan 10 km/jam.

Jika proyek digunakan untuk demonstrasi atau presentasi, simulasi
dapat dikembangkan dengan faktor percepatan waktu tanpa mengubah
perbandingan kecepatan antar-mobil.

9. TROUBLESHOOTING
------------------
Jika gambar mobil tidak muncul:
- Periksa nama file.
- Pastikan ekstensi file benar (.png).
- Pastikan file berada di Sketch Files.
- Pastikan pemanggilan loadImage() sesuai dengan nama file.

Jika jalan tidak muncul:
- Pastikan file jalan.jpg berada di Sketch Files.
- Pastikan nama file menggunakan huruf yang sama persis.

Jika animasi tidak berjalan:
- Pastikan sketch.js sudah terhubung pada index.html.
- Klik tombol Play pada p5.js.
- Pastikan tidak ada error berwarna merah pada console.

10. INFORMASI PROYEK
--------------------
Judul:
Simulasi Visual Balap Mobil Menggunakan p5.js

Platform:
p5.js Web Editor

Jenis proyek:
Visualisasi / Simulasi Animasi

Lintasan:
10 km

Jumlah mobil:
4 mobil
