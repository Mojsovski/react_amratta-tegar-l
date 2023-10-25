Kesimpulan dari pembelajaran materi Authentication in React :

1. Autentikasi merupakan proses verifikasi identitas, memastikan bahwa pengguna atau sistem yang mencoba mendapatkan akses benar-benar merupakan orang yang benar.
2. Autentikasi digunakan selain verifikasi identitas , digunakan juga untuk perlindungan data sensitif, manajemen akses, audit dan kepatuhan, dan mengurangi risiko keamanan.
3. Untuk melihat bagaimana Autentikasi bekerja, kita bosa mulai dari pada saat registrasi. Pada saat registrasi, kita mengirimkan username, password, dan informasi lain. Pada saat login , kita memasukkan username dan password. Username dan password yang kita masukkan akan dicek di API apakah benar atau tidak . Setelah username dan password benar , API akan return informasi seperti token, type, user info, dan authorities. Informasi tersebut adalah akses kita untuk menggunakan aplikasi sesuai role dari akun kita.
