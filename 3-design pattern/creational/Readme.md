1. Factory
Jika ingin membuat object yang dinamis, condisional dan class nya seragam.
Contoh use case :
- Armada yang ada adalah truck & ship.
- Setiap armada harus punya catatan quantity barang yg dibawa.
- Buat catatan pengantaran melalui darat / laut beserta quantity nya.
- Jika melalui darat masuk ke truck, jika melalui laut masuk ke ship.

2. Abstract Factory
Membuat super factory untuk membuat factory.
Contoh use case :
- Ada 2 tipe komputer, yaitu PC & laptop.
- Buat catatan dimana tipe komputer apa menggunakan tipe monitor apa.
- Setiap komputer punya tipe monitor yang berbeda, yaitu led & ips.
- Tentukan tipe komputer dan tipe monitor untuk membuat komputer.

3. Builder
Gunakan ketika object (Construct) terlalu panjang

4. Prototype 
Untuk mengcopy atau clone sebuah object dengan mengurangi kesalahan pengetikan.

5. Singleton
Untuk membatasi object agar tidak di instansiasi lebih dari satu kali. 
Untuk dijadikan global variable, seperti koneksi ke database.