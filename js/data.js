/**
 * RAY LEARN — Data Materi Pembelajaran SMK (Kelas 10, 11, 12)
 * Disusun sesuai standar pedagogik SMK:
 * 1. Judul & Deskripsi
 * 2. Tujuan Pembelajaran
 * 3. Materi Utama (Tabel / Poin-poin)
 * 4. Contoh & Praktik (Konsep, Syntax, Contoh Kode, Penjelasan, Kasus Nyata, Kesalahan Umum)
 * 5. Poin Penting
 * 6. Kesimpulan Ringkas
 */

const materials = [
  // ==========================================================================
  // KELAS 10 (12 MATA PELAJARAN LENGKAP)
  // ==========================================================================
  
  // 1. PPLG -> Web -> HTML (Pengenalan)
  {
    id: 1,
    classLevel: 10,
    subject: "PPLG",
    category: "Web",
    title: "Dasar-Dasar HTML & Struktur Dokumen",
    slug: "dasar-html-struktur-dokumen",
    description: "HTML merupakan bahasa markup yang digunakan untuk menyusun kerangka dan struktur dasar sebuah halaman website.",
    tags: ["HTML", "Web", "Frontend", "Struktur"],
    readTime: "7 menit",
    date: "12 Januari 2026",
    featured: true,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Memahami fungsi dan kedudukan HTML dalam pengembangan web modern</li>
          <li>Memahami fungsi tag dasar: <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, dan <code>&lt;body&gt;</code></li>
          <li>Mengenal elemen heading (h1-h6) dan paragraf (p)</li>
          <li>Mampu membuat file HTML mandiri dan membukanya di browser</li>
        </ul>
      </div>

      <h2>1. Konsep Dasar HTML</h2>
      <p>HTML (<em>HyperText Markup Language</em>) bukanlah bahasa pemrograman yang memiliki logika percabangan atau perhitungan, melainkan <strong>bahasa penanda (markup)</strong>. HTML menggunakan penanda berupa <strong>tag</strong> untuk memberitahu peramban (browser) bagaimana sebuah teks, tombol, atau gambar harus ditampilkan.</p>

      <h2>2. Struktur Anatomi Dokumen HTML5</h2>
      <p>Setiap halaman web yang valid selalu memiliki kerangka hierarki dokumen yang teratur sebagai berikut:</p>

      <div class="code-block-wrapper">
        <div class="code-block-header">
          <span>index.html</span>
          <button class="btn-copy" onclick="copyCode(this)">Salin Kode</button>
        </div>
        <pre class="code-block-pre"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="id"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Website Pembelajaran Siswa SMK&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Halo Dunia, Selamat Datang di SMK!&lt;/h1&gt;
    &lt;p&gt;Ini adalah halaman web pertama yang dibuat menggunakan HTML murni.&lt;/p&gt;
    &lt;a href="https://kemdikbud.go.id" target="_blank"&gt;Kunjungi Situs Resmi&lt;/a&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>

      <h2>3. Penjelasan Elemen Kode</h2>
      <ul>
        <li><code>&lt;!DOCTYPE html&gt;</code>: Memberitahu browser bahwa dokumen ini menggunakan standar HTML5 terbaru.</li>
        <li><code>&lt;html lang="id"&gt;</code>: Tag pembungkus utama seluruh halaman web. Atribut <code>lang="id"</code> menandakan konten berbahasa Indonesia.</li>
        <li><code>&lt;head&gt;</code>: Berisi informasi metadata (judul tab, karakter UTF-8, viewport mobile, tautan CSS) yang tidak tampil langsung di layar.</li>
        <li><code>&lt;body&gt;</code>: Berisi semua konten visual yang dilihat pengguna seperti teks, gambar, video, dan form.</li>
      </ul>

      <div class="pitfalls-box">
        <h3>Kesalahan Umum Siswa SMK</h3>
        <ul>
          <li><strong>Lupa menutup tag:</strong> Membuka <code>&lt;p&gt;</code> tanpa <code>&lt;/p&gt;</code> sehingga tata letak berantakan.</li>
          <li><strong>Menaruh konten visual di dalam &lt;head&gt;:</strong> Tag seperti <code>&lt;h1&gt;</code> tidak boleh diletakkan di dalam <code>&lt;head&gt;</code>.</li>
          <li><strong>Menamai file sembarangan:</strong> Menamai file dengan spasi misalnya <code>tugas saya.html</code> alih-alih <code>tugas-saya.html</code>.</li>
        </ul>
      </div>

      <div class="key-points-box">
        <h3>Poin Penting</h3>
        <ul>
          <li>HTML bertugas sebagai kerangka struktur (seperti tulang pada tubuh manusia).</li>
          <li>Tag HTML berpasangan (tag pembuka dan tag penutup), kecuali <em>self-closing tags</em> seperti <code>&lt;img&gt;</code>, <code>&lt;br&gt;</code>, dan <code>&lt;input&gt;</code>.</li>
          <li>Tag <code>&lt;h1&gt;</code> sebaiknya hanya digunakan satu kali per halaman untuk judul utama artikel demi optimasi SEO.</li>
        </ul>
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>HTML adalah langkah paling awal dan paling krusial bagi calon pengembang peranti lunak. Memahami struktur dokumen yang baku memastikan halaman web Anda dapat dirender secara konsisten di komputer maupun smartphone.</p>
      </div>
    `
  },

  // 2. PPLG -> Web -> HTML (Semantik & Form)
  {
    id: 2,
    classLevel: 10,
    subject: "PPLG",
    category: "Web",
    title: "Elemen Semantik & Formulir HTML5",
    slug: "elemen-semantik-formulir-html5",
    description: "Mempelajari tag semantik seperti header, nav, main, article, serta pembuatan formulir input siswa yang aksesibel.",
    tags: ["HTML", "Semantik", "Form", "Input"],
    readTime: "8 menit",
    date: "14 Januari 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Memahami perbedaan tag semantik vs non-semantik (div & span)</li>
          <li>Mengimplementasikan struktur layout semantik: header, nav, main, section, footer</li>
          <li>Membuat form input formulir dengan tipe data teks, email, number, dan submit</li>
          <li>Menerapkan atribut validasi dasar (required, placeholder, min/max)</li>
        </ul>
      </div>

      <h2>1. Mengapa Harus Menggunakan HTML Semantik?</h2>
      <p>HTML Semantik berarti memilih tag berdasarkan <strong>makna kontennya</strong>, bukan sekadar tampilannya. Keuntungannya meliputi:</p>
      <ul>
        <li><strong>Aksesibilitas (A11y):</strong> Membantu pembaca tunanetra via <em>Screen Reader</em> membaca konten dengan runut.</li>
        <li><strong>SEO Mesin Pencari:</strong> Google lebih mudah memahami mana menu navigasi, artikel inti, dan catatan kaki.</li>
      </ul>

      <h2>2. Contoh Praktik Pembuatan Formulir Siswa</h2>
      <div class="code-block-wrapper">
        <div class="code-block-header">
          <span>form-pendaftaran.html</span>
          <button class="btn-copy" onclick="copyCode(this)">Salin Kode</button>
        </div>
        <pre class="code-block-pre"><code>&lt;main&gt;
  &lt;article&gt;
    &lt;h2&gt;Formulir Biodata Siswa SMK&lt;/h2&gt;
    &lt;form action="proses.php" method="POST"&gt;
      &lt;div&gt;
        &lt;label for="nama"&gt;Nama Lengkap:&lt;/label&gt;
        &lt;input type="text" id="nama" name="nama" placeholder="Contoh: Muhammad Rayhan" required&gt;
      &lt;/div&gt;
      &lt;div&gt;
        &lt;label for="nis"&gt;NISN Siswa:&lt;/label&gt;
        &lt;input type="number" id="nis" name="nis" required&gt;
      &lt;/div&gt;
      &lt;div&gt;
        &lt;label for="jurusan"&gt;Konsentrasi Keahlian:&lt;/label&gt;
        &lt;select id="jurusan" name="jurusan"&gt;
          &lt;option value="PPLG"&gt;PPLG (Rekayasa Perangkat Lunak)&lt;/option&gt;
          &lt;option value="TJKT"&gt;TJKT (Teknik Komputer Jaringan)&lt;/option&gt;
        &lt;/select&gt;
      &lt;/div&gt;
      &lt;button type="submit"&gt;Kirim Formulir&lt;/button&gt;
    &lt;/form&gt;
  &lt;/article&gt;
&lt;/main&gt;</code></pre>
      </div>

      <div class="pitfalls-box">
        <h3>Kesalahan Umum</h3>
        <ul>
          <li>Lupa menyematkan atribut <code>name</code> pada input, sehingga data formulir tidak terkirim ke server backend.</li>
          <li>Mengabaikan tag <code>&lt;label for="..."&gt;</code> yang membuat pengguna kesulitan mengklik area input di HP.</li>
        </ul>
      </div>

      <div class="key-points-box">
        <h3>Poin Penting</h3>
        <ul>
          <li>Gunakan <code>type="email"</code> untuk validasi otomatis format alamat surel dari browser.</li>
          <li>Atribut <code>required</code> mencegah pengguna mengirim formulir dalam kondisi kosong.</li>
        </ul>
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Struktur semantik dan elemen formulir adalah interaksi dua arah pertama antara pengguna dengan aplikasi web. Dengan form yang valid, sistem backend siap menerima dan memproses data dengan aman.</p>
      </div>
    `
  },

  // 3. PPLG -> Web -> CSS (Dasar & Box Model)
  {
    id: 3,
    classLevel: 10,
    subject: "PPLG",
    category: "Web",
    title: "Dasar CSS & Box Model Modern",
    slug: "dasar-css-box-model-modern",
    description: "Memahami bagaimana browser menghitung ukuran elemen web: Margin, Border, Padding, dan Content secara presisi.",
    tags: ["CSS", "Web", "Styling", "Box Model"],
    readTime: "7 menit",
    date: "16 Januari 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Memahami 3 cara menyematkan CSS (Inline, Internal, External)</li>
          <li>Menguasai empat lapisan CSS Box Model (Content, Padding, Border, Margin)</li>
          <li>Memahami fungsi aturan universal <code>box-sizing: border-box</code></li>
          <li>Mampu mengatur ukuran elemen tanpa terjadi bug tata letak meluap (overflow)</li>
        </ul>
      </div>

      <h2>1. Konsep CSS Box Model</h2>
      <p>Setiap tag HTML yang tampil di layar dianggap oleh browser sebagai <strong>sebuah kotak persegi panjang</strong>. Kotak tersebut terdiri dari empat lapisan berurutan dari dalam ke luar:</p>
      <ol>
        <li><strong>Content:</strong> Area tempat teks atau gambar berada.</li>
        <li><strong>Padding:</strong> Ruang spasi di dalam kotak antara konten dan batas tepi.</li>
        <li><strong>Border:</strong> Garis pembatas yang membingkai elemen.</li>
        <li><strong>Margin:</strong> Ruang pemisah di luar kotak yang memberi jarak antarelemen.</li>
      </ol>

      <h2>2. Contoh Kode CSS Box Model Standar</h2>
      <div class="code-block-wrapper">
        <div class="code-block-header">
          <span>style.css</span>
          <button class="btn-copy" onclick="copyCode(this)">Salin Kode</button>
        </div>
        <pre class="code-block-pre"><code>/* Aturan Reset Wajib untuk Pemula */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.kartu-materi {
  width: 320px;
  background-color: #F4EBDD;
  padding: 24px;              /* Spasi bagian dalam */
  border: 2px solid #304D36;  /* Garis batas */
  margin: 20px auto;          /* Jarak luar dan posisi tengah */
  border-radius: 12px;
}</code></pre>
      </div>

      <div class="pitfalls-box">
        <h3>Kesalahan Umum</h3>
        <ul>
          <li>Tidak memakai <code>box-sizing: border-box</code> sehingga saat menambahkan padding, lebar card membesar keluar layar.</li>
          <li>Tertukar antara <strong>Padding</strong> (jarak ke dalam) dan <strong>Margin</strong> (jarak ke luar).</li>
        </ul>
      </div>

      <div class="key-points-box">
        <h3>Poin Penting</h3>
        <ul>
          <li>Selalu pisahkan CSS ke dalam berkas eksternal <code>.css</code> agar kode bersih dan mudah dikelola tim.</li>
          <li>Gunakan satuan fleksibel seperti <code>rem</code> atau persentase alih-alih piksel kaku (<code>px</code>) untuk teks responsif.</li>
        </ul>
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>CSS Box Model adalah kunci tata letak web. Setelah menguasai lapisan padding, border, dan margin, Anda tidak akan lagi mengalami masalah elemen bertumpuk atau tata letak berantakan.</p>
      </div>
    `
  },

  // 4. PPLG -> Web -> CSS (Selector & Flexbox)
  {
    id: 4,
    classLevel: 10,
    subject: "PPLG",
    category: "Web",
    title: "Selector CSS & Flexbox Layout",
    slug: "selector-css-flexbox-layout",
    description: "Membagi kolom dan menyusun tata letak dinamis satu dimensi menggunakan CSS Flexbox yang fleksibel di segala layar.",
    tags: ["CSS", "Flexbox", "Responsive", "Layout"],
    readTime: "8 menit",
    date: "18 Januari 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Mengenal hirarki selector CSS: Tag, Class, ID, dan Pseudo-class (:hover)</li>
          <li>Mengaktifkan Flexbox dengan properti <code>display: flex</code></li>
          <li>Mengatur perataan horizontal (<code>justify-content</code>) dan vertikal (<code>align-items</code>)</li>
          <li>Membuat baris kartu yang otomatis turun baris dengan <code>flex-wrap</code></li>
        </ul>
      </div>

      <h2>1. Konsep Flexbox</h2>
      <p>Flexbox (<em>Flexible Box Layout</em>) dirancang untuk menata sekumpulan elemen anak dalam satu baris atau satu kolom secara otomatis tanpa perlu trik kuno <code>float</code>.</p>

      <h2>2. Contoh Kode Flexbox Grid Baris Kartu</h2>
      <div class="code-block-wrapper">
        <div class="code-block-header">
          <span>flex-layout.css</span>
          <button class="btn-copy" onclick="copyCode(this)">Salin Kode</button>
        </div>
        <pre class="code-block-pre"><code>.container-kartu {
  display: flex;
  justify-content: space-between; /* Rata kiri-kanan berjarak */
  align-items: center;            /* Rata tengah vertikal */
  gap: 16px;                      /* Jarak seragam antarkartu */
  flex-wrap: wrap;                /* Turun ke bawah bila layar sempit */
}

.item-kartu {
  flex: 1 1 280px;                /* Tumbuh, susut, basis minimal 280px */
  background-color: #FFFDF8;
  border: 1px solid #161616;
  padding: 16px;
}</code></pre>
      </div>

      <div class="key-points-box">
        <h3>Poin Penting</h3>
        <ul>
          <li>Sumbu utama (<em>Main Axis</em>) Flexbox diatur via <code>flex-direction: row</code> atau <code>column</code>.</li>
          <li>Properti <code>gap</code> adalah cara paling modern dan bersih untuk memberi celah antarkartu.</li>
        </ul>
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Dengan Flexbox, pembuatan navigasi header, baris kartu materi, dan tombol sejajar menjadi jauh lebih sederhana dan langsung responsif terhadap layar mobile.</p>
      </div>
    `
  },

  // 5. PPLG -> Web -> PHP (Dasar & Tipe Data)
  {
    id: 5,
    classLevel: 10,
    subject: "PPLG",
    category: "Web",
    title: "Dasar Sintaks & Variabel PHP",
    slug: "dasar-sintaks-variabel-php",
    description: "Pengenalan pemrograman server-side PHP: aturan penamaan variabel, tipe data primitif, dan penggabungan string.",
    tags: ["PHP", "Backend", "Web", "Variabel"],
    readTime: "9 menit",
    date: "20 Januari 2026",
    featured: true,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Memahami cara kerja skrip server-side PHP vs client-side HTML</li>
          <li>Menulis tag pembuka <code>&lt;?php</code> dan perintah <code>echo</code></li>
          <li>Mendeklarasikan variabel menggunakan simbol dolar <code>$</code></li>
          <li>Mengenal tipe data: String, Integer, Float, Boolean, dan Array</li>
        </ul>
      </div>

      <h2>1. Konsep Eksekusi PHP di Server</h2>
      <p>Kode PHP dieksekusi di server lokal (seperti Laragon atau Apache). Pengguna tidak akan pernah melihat kode PHP di browser, melainkan hanya hasil output berupa teks atau HTML.</p>

      <h2>2. Contoh Kode PHP Dasar</h2>
      <div class="code-block-wrapper">
        <div class="code-block-header">
          <span>index.php</span>
          <button class="btn-copy" onclick="copyCode(this)">Salin Kode</button>
        </div>
        <pre class="code-block-pre"><code>&lt;?php
// 1. Deklarasi Variabel
$namaSiswa = "Fajar Pratama";
$kelas     = 10;
$jurusan   = "PPLG";
$nilai     = 88.5;
$isLulus   = true;

// 2. Menampilkan Data ke Layar
echo "&lt;h2&gt;Kartu Hasil Studi Siswa&lt;/h2&gt;";
echo "&lt;p&gt;Nama: " . $namaSiswa . "&lt;/p&gt;";
echo "&lt;p&gt;Kelas: " . $kelas . " " . $jurusan . "&lt;/p&gt;";
echo "&lt;p&gt;Nilai Akhir: " . $nilai . "&lt;/p&gt;";
?&gt;</code></pre>
      </div>

      <div class="pitfalls-box">
        <h3>Kesalahan Umum</h3>
        <ul>
          <li>Lupa tanda titik koma (<code>;</code>) di ujung baris pernyataan yang menyebabkan <em>Parse Error</em>.</li>
          <li>Menamai variabel diawali dengan angka, contoh salah: <code>$1siswa</code> (seharusnya <code>$siswa1</code>).</li>
        </ul>
      </div>

      <div class="key-points-box">
        <h3>Poin Penting</h3>
        <ul>
          <li>Variabel PHP bersifat <em>case-sensitive</em> (huruf besar dan kecil dibedakan).</li>
          <li>Penggabungan dua string di PHP menggunakan operator titik (<code>.</code>).</li>
        </ul>
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>PHP memungkinkan website menampilkan data yang dinamis dari database, berbeda dengan HTML murni yang statis. Penguasaan variabel adalah modal utama untuk masuk ke materi database MySQL.</p>
      </div>
    `
  },

  // 6. PPLG -> Web -> PHP (Percabangan & Perulangan)
  {
    id: 6,
    classLevel: 10,
    subject: "PPLG",
    category: "Web",
    title: "Percabangan If-Else & Perulangan PHP",
    slug: "percabangan-if-else-perulangan-php",
    description: "Mengontrol alur logika program web: pengujian kondisi kelulusan nilai serta perulangan data array menggunakan foreach.",
    tags: ["PHP", "Logika", "If Else", "Perulangan"],
    readTime: "8 menit",
    date: "22 Januari 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Menggunakan struktur kondisi <code>if</code>, <code>else if</code>, dan <code>else</code></li>
          <li>Memahami operator perbandingan (<code>&gt;=</code>, <code>&lt;=</code>, <code>==</code>, <code>===</code>)</li>
          <li>Melakukan iterasi data daftar siswa menggunakan perulangan <code>foreach</code></li>
        </ul>
      </div>

      <h2>Contoh Kasus Penentuan Predikat Kelulusan</h2>
      <div class="code-block-wrapper">
        <div class="code-block-header">
          <span>nilai.php</span>
          <button class="btn-copy" onclick="copyCode(this)">Salin Kode</button>
        </div>
        <pre class="code-block-pre"><code>&lt;?php
$nilai = 82;

if ($nilai >= 90) {
    $predikat = "Sangat Baik (A)";
} else if ($nilai >= 75) {
    $predikat = "Baik / Kompeten (B)";
} else {
    $predikat = "Perlu Bimbingan (C)";
}

echo "Nilai: $nilai - Predikat: $predikat\n";

// Perulangan Array Mapel
$daftarMapel = ["HTML Dasar", "CSS Styling", "PHP Server", "Basis Data"];
foreach ($daftarMapel as $index => $mapel) {
    echo ($index + 1) . ". Modul: " . $mapel . "&lt;br&gt;";
}
?&gt;</code></pre>
      </div>

      <div class="key-points-box">
        <h3>Poin Penting</h3>
        <ul>
          <li>Gunakan <code>foreach</code> saat mengolah data array asosiatif dari tabel database.</li>
          <li>Operator <code>===</code> memeriksa kesamaan nilai sekaligus kesamaan tipe datanya.</li>
        </ul>
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Logika kondisi dan perulangan adalah otak dari program backend. Semua fitur seperti validasi login dan kalkulasi transaksi dibangun di atas fondasi ini.</p>
      </div>
    `
  },

  // 7. PPLG -> Web -> Python (Dasar & Variabel)
  {
    id: 7,
    classLevel: 10,
    subject: "PPLG",
    category: "Web",
    title: "Dasar Logika Algoritma & Variabel Python",
    slug: "dasar-logika-variabel-python",
    description: "Mempelajari sintaks bersih bahasa Python, tipe data primitif, dan pembentukan algoritma pemrograman yang mudah dibaca.",
    tags: ["Python", "Algoritma", "Logika", "PPLG"],
    readTime: "7 menit",
    date: "24 Januari 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Mengenal filosofi sintaks Python yang bersih berbasis indentasi</li>
          <li>Membuat variabel dan mencetak hasil dengan fungsi <code>print()</code></li>
          <li>Menerapkan fungsi input keyboard via <code>input()</code></li>
          <li>Melakukan konversi tipe data (type casting) seperti <code>int()</code> dan <code>float()</code></li>
        </ul>
      </div>

      <h2>1. Konsep Indentasi pada Python</h2>
      <p>Python tidak menggunakan tanda kurung kurawal <code>{}</code> untuk menandai blok kode, melainkan <strong>spasi indentasi (4 spasi)</strong>. Hal ini memaksa setiap programmer menulis kode yang sangat rapi.</p>

      <h2>2. Contoh Kode Program Kasir Sederhana</h2>
      <div class="code-block-wrapper">
        <div class="code-block-header">
          <span>kasir.py</span>
          <button class="btn-copy" onclick="copyCode(this)">Salin Kode</button>
        </div>
        <pre class="code-block-pre"><code># Program Menghitung Total Belanja Lab Komputer
nama_barang = "Kabel LAN UTP Cat6"
harga_satuan = 5000
jumlah_beli = 12

# Perhitungan Aritmatika
total_biaya = harga_satuan * jumlah_beli

# Menampilkan dengan f-string modern
print(f"Barang  : {nama_barang}")
print(f"Harga   : Rp {harga_satuan:,}")
print(f"Jumlah  : {jumlah_beli} meter")
print(f"Total   : Rp {total_biaya:,}")
</code></pre>
      </div>

      <div class="pitfalls-box">
        <h3>Kesalahan Umum</h3>
        <ul>
          <li><strong>IndentationError:</strong> Mencampurkan spasi dengan tombol Tab pada baris indentasi.</li>
          <li>Lupa mengonversi hasil <code>input()</code> yang secara default bertipe String saat ingin dihitung secara matematis.</li>
        </ul>
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Python sangat ramah pemula dan menjadi fondasi luar biasa untuk memahami struktur algoritma sebelum melangkah ke kecerdasan buatan dan data science.</p>
      </div>
    `
  },

  // 8. PPLG -> Web -> Python (Struktur Kontrol & List)
  {
    id: 8,
    classLevel: 10,
    subject: "PPLG",
    category: "Web",
    title: "Struktur Kontrol & Koleksi List Python",
    slug: "struktur-kontrol-list-python",
    description: "Memanfaatkan list dinamis Python, perulangan for in, serta fungsi bawaan untuk manipulasi data siswa.",
    tags: ["Python", "List", "Data", "Loop"],
    readTime: "7 menit",
    date: "26 Januari 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Membuat dan memanipulasi List Python (append, pop, len)</li>
          <li>Melakukan perulangan otomatis dengan <code>for item in list</code></li>
          <li>Membuat fungsi kustom mandiri dengan kata kunci <code>def</code></li>
        </ul>
      </div>

      <h2>Contoh Kode Pengelolaan Data Siswa</h2>
      <div class="code-block-wrapper">
        <div class="code-block-header">
          <span>data_siswa.py</span>
          <button class="btn-copy" onclick="copyCode(this)">Salin Kode</button>
        </div>
        <pre class="code-block-pre"><code>def cek_kelulusan(skor):
    if skor >= 75:
        return "KOMPETEN"
    return "REMEDIAL"

siswa = ["Ahmad", "Budi", "Citra", "Dina"]
nilai = [88, 70, 92, 75]

for s, n in zip(siswa, nilai):
    status = cek_kelulusan(n)
    print(f"Nama: {s:<10} | Nilai: {n} | Status: {status}")
</code></pre>
      </div>

      <div class="key-points-box">
        <h3>Poin Penting</h3>
        <ul>
          <li>List di Python diawali indeks ke-0.</li>
          <li>Fungsi <code>def</code> membantu modularitas kode agar tidak menulis baris yang sama berulang kali.</li>
        </ul>
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Penguasaan tipe data List dan fungsi mandiri memungkinkan siswa membuat program otomatisasi tugas yang efisien dan modular.</p>
      </div>
    `
  },

  // 9. PPLG -> Pemrograman Desktop (Kelas 10)
  {
    id: 9,
    classLevel: 10,
    subject: "PPLG",
    category: "Pemrograman Desktop",
    title: "Konsep Dasar Desktop App & Event Handling",
    slug: "dasar-desktop-event-handling",
    description: "Pengenalan arsitektur aplikasi desktop native, antarmuka Graphical User Interface (GUI), dan siklus event-driven programming.",
    tags: ["Desktop", "GUI", "Event Driven", "PPLG"],
    readTime: "8 menit",
    date: "28 Januari 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Memahami perbedaan aplikasi berbasis CLI (Command Line) dan GUI (Graphical User Interface)</li>
          <li>Mengenal komponen dasar window: Form, Label, TextBox, Button, dan DataGrid</li>
          <li>Memahami konsep <em>Event-Driven Programming</em> (program bereaksi terhadap klik pengguna)</li>
        </ul>
      </div>

      <h2>1. Apa Itu Event-Driven Programming?</h2>
      <p>Pada aplikasi desktop, program tidak berjalan berurutan dari atas ke bawah lalu selesai, melainkan <strong>berdiam menunggu aksi pengguna (Event Loop)</strong>. Ketika pengguna mengklik sebuah tombol, event handler yang bersangkutan akan dijalankan.</p>

      <h2>2. Contoh Pseudocode Event Tombol Simpan</h2>
      <div class="code-block-wrapper">
        <div class="code-block-header">
          <span>FormUtama.cs</span>
          <button class="btn-copy" onclick="copyCode(this)">Salin Kode</button>
        </div>
        <pre class="code-block-pre"><code>// Contoh Event Handler saat tombol diklik
private void btnSimpan_Click(object sender, EventArgs e)
{
    string nama = txtNama.Text;
    if (string.IsNullOrEmpty(nama)) {
        MessageBox.Show("Nama siswa wajib diisi!");
        return;
    }
    
    // Logika menampilkan dialog sukses
    MessageBox.Show("Data siswa " + nama + " berhasil disimpan!");
}</code></pre>
      </div>

      <div class="key-points-box">
        <h3>Poin Penting</h3>
        <ul>
          <li>Aplikasi desktop dapat berjalan tanpa koneksi internet dan memiliki akses perangkat keras lokal yang cepat.</li>
          <li>Validasi input harus dilakukan sebelum data disimpan ke berkas lokal.</li>
        </ul>
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Materi desktop mengenalkan siswa pada perancangan form jendela sistem operasi yang menjadi dasar sistem kasir minimarket dan aplikasi administrasi sekolah.</p>
      </div>
    `
  },

  // 10. Informatika (Kelas 10)
  {
    id: 10,
    classLevel: 10,
    subject: "Informatika",
    category: "Dasar Kejuruan",
    title: "Berpikir Komputasional & Struktur Data Dasar",
    slug: "berpikir-komputasional-struktur-data",
    description: "Mengembangkan kemampuan memecahkan masalah kompleks dengan empat pilar berpikir komputasional serta pengenalan struktur data.",
    tags: ["Informatika", "Komputasional", "Algoritma", "Problem Solving"],
    readTime: "8 menit",
    date: "30 Januari 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Memahami 4 pilar Computational Thinking: Dekomposisi, Pengenalan Pola, Abstraksi, dan Desain Algoritma</li>
          <li>Mengenal struktur data linier: Array, Stack (Tumpukan), dan Queue (Antrean)</li>
          <li>Menerapkan prinsip LIFO (Last In First Out) dan FIFO (First In First Out)</li>
        </ul>
      </div>

      <h2>1. Empat Pilar Berpikir Komputasional</h2>
      <table>
        <thead>
          <tr>
            <th>Pilar</th>
            <th>Definisi Singkat</th>
            <th>Contoh Kasus SMK</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Dekomposisi</strong></td>
            <td>Memecah masalah besar menjadi bagian-bagian kecil</td>
            <td>Membagi pembuatan web kasir jadi modul login, stok, dan struk</td>
          </tr>
          <tr>
            <td><strong>Pengenalan Pola</strong></td>
            <td>Melihat kesamaan karakteristik dari masalah serupa</td>
            <td>Melihat pola bahwa form login dan form registrasi punya alur input sama</td>
          </tr>
          <tr>
            <td><strong>Abstraksi</strong></td>
            <td>Fokus pada informasi esensial dan abaikan detail tidak penting</td>
            <td>Menyimpan data siswa hanya NIS, Nama, dan Kelas tanpa menyimpan warna baju favorit</td>
          </tr>
          <tr>
            <td><strong>Algoritma</strong></td>
            <td>Menyusun langkah terurut sistematis menyelesaikan masalah</td>
            <td>Instruksi tahap-demi-tahap validasi kata sandi sebelum masuk database</td>
          </tr>
        </tbody>
      </table>

      <div class="key-points-box">
        <h3>Poin Penting</h3>
        <ul>
          <li><strong>Stack (Tumpukan):</strong> Mengikuti aturan LIFO. Contoh: Tombol <em>Undo</em> pada aplikasi text editor.</li>
          <li><strong>Queue (Antrean):</strong> Mengikuti aturan FIFO. Contoh: Antrean cetak dokumen di printer.</li>
        </ul>
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Berpikir komputasional adalah pola pikir universal. Siswa yang menguasainya akan mampu mengurai permasalahan serumit apa pun menjadi program komputer yang rapi dan terukur.</p>
      </div>
    `
  },

  // 11. Matematika (Kelas 10)
  {
    id: 11,
    classLevel: 10,
    subject: "Matematika",
    category: "Umum",
    title: "Persamaan dan Pertidaksamaan Nilai Mutlak Linear",
    slug: "persamaan-pertidaksamaan-nilai-mutlak",
    description: "Konsep dasar nilai mutlak bilangan real, sifat operasi aljabar, dan aplikasinya dalam toleransi batas galat komputasi.",
    tags: ["Matematika", "Aljabar", "Nilai Mutlak", "Logika"],
    readTime: "8 menit",
    date: "2 Februari 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Memahami konsep geometri nilai mutlak sebagai jarak tanpa nilai negatif</li>
          <li>Menyelesaikan persamaan linear bentuk <code>|ax + b| = c</code></li>
          <li>Menyelesaikan pertidaksamaan linear nilai mutlak <code>|ax + b| &le; c</code></li>
        </ul>
      </div>

      <h2>1. Definisi Formal Nilai Mutlak</h2>
      <p>Untuk setiap bilangan real <em>x</em>, nilai mutlak dilambangkan dengan <code>|x|</code> yang didefinisikan sebagai:</p>
      <ul>
        <li><code>|x| = x</code> jika <code>x &ge; 0</code></li>
        <li><code>|x| = -x</code> jika <code>x &lt; 0</code></li>
      </ul>

      <h2>2. Contoh Penyelesaian Persamaan</h2>
      <p>Tentukan himpunan penyelesaian dari persamaan <code>|2x - 4| = 8</code>:</p>
      <div class="note-box note-box-info">
        <strong>Langkah 1:</strong> Kemungkinan positif: <code>2x - 4 = 8 &rArr; 2x = 12 &rArr; x = 6</code><br>
        <strong>Langkah 2:</strong> Kemungkinan negatif: <code>2x - 4 = -8 &rArr; 2x = -4 &rArr; x = -2</code><br>
        <strong>Himpunan Penyelesaian (HP):</strong> <code>{-2, 6}</code>
      </div>

      <div class="key-points-box">
        <h3>Poin Penting</h3>
        <ul>
          <li>Nilai mutlak tidak pernah bernilai negatif (selalu <code>&ge; 0</code>).</li>
          <li>Dalam ilmu komputer, nilai mutlak digunakan untuk menghitung selisih koordinat piksel dan toleransi batas error mesin.</li>
        </ul>
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Memahami nilai mutlak melatih ketelitian aljabar siswa dalam memperhitungkan dua kemungkinan kondisi secara objektif.</p>
      </div>
    `
  },

  // 12. PIPAS (Kelas 10 - Ekosistem)
  {
    id: 12,
    classLevel: 10,
    subject: "PIPAS",
    category: "Umum",
    title: "Ekosistem & Keseimbangan Lingkungan Hidup",
    slug: "ekosistem-keseimbangan-lingkungan-hidup",
    description: "Memahami interaksi dinamis komponen biotik dan abiotik, rantai makanan, serta pemanfaatan teknologi hijau ramah lingkungan.",
    tags: ["PIPAS", "IPA", "Ekologi", "Lingkungan"],
    readTime: "7 menit",
    date: "4 Februari 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Mengidentifikasi komponen biotik (makhluk hidup) dan abiotik (lingkungan fisik)</li>
          <li>Menganalisis jaring-jaring makanan dan aliran energi di ekosistem sekolah</li>
          <li>Mengetahui dampak limbah perangkat elektronik (e-waste) terhadap tanah dan air</li>
        </ul>
      </div>

      <h2>1. Interaksi Komponen Ekosistem</h2>
      <p>Ekosistem adalah hubungan timbal balik antara makhluk hidup dengan lingkungannya. Jika satu komponen terganggu, keseimbangan seluruh rantai akan terpengaruh.</p>
      <ul>
        <li><strong>Biotik:</strong> Produsen (tumbuhan), Konsumen (hewan/manusia), dan Dekomposer (bakteri pengurai).</li>
        <li><strong>Abiotik:</strong> Sinar matahari, air, oksigen, tanah, dan kelembapan udara.</li>
      </ul>

      <div class="note-box note-box-warning">
        <strong>Isu Nyata SMK Kejuruan TI: Limbah Elektronik (E-Waste)</strong><br>
        Komponen komputer bekas seperti motherboard dan baterai mengandung timbal dan merkuri. Siswa SMK wajib memilah limbah elektronik agar tidak mencemari sumber air tanah.
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Teknologi dan sains harus berjalan beriringan. Pengembang teknologi masa depan berkewajiban menciptakan inovasi yang ramah lingkungan dan hemat energi (Green Computing).</p>
      </div>
    `
  },

  // 13. PIPAS (Kelas 10 - Mitigasi)
  {
    id: 13,
    classLevel: 10,
    subject: "PIPAS",
    category: "Umum",
    title: "Mitigasi Bencana & Teknologi Ramah Lingkungan",
    slug: "mitigasi-bencana-teknologi-lingkungan",
    description: "Prosedur penyelamatan diri saat bencana alam serta peran sensor teknologi dini dalam meminimalisir korban.",
    tags: ["PIPAS", "Bencana", "Mitigasi", "Sensor"],
    readTime: "6 menit",
    date: "6 Februari 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Memahami tahapan mitigasi pra-bencana, saat bencana, dan pasca-bencana</li>
          <li>Mengenal sistem peringatan dini (Early Warning System) berbasis mikrokontroler</li>
        </ul>
      </div>

      <h2>Tahapan Tanggap Bencana Gempa Bumi</h2>
      <ol>
        <li><strong>Drop, Cover, and Hold On:</strong> Merunduk, berlindung di bawah meja kokoh, dan lindungi kepala.</li>
        <li><strong>Evakuasi Tertib:</strong> Gunakan tangga darurat, jangan gunakan lift saat terjadi guncangan.</li>
        <li><strong>Titik Kumpul (Assembly Point):</strong> Menuju area terbuka yang jauh dari tiang listrik dan kaca.</li>
      </ol>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Kesiapsiagaan mitigasi bencana menyelamatkan nyawa, dan pemanfaatan sistem sensor dini karya anak SMK menjadi kontribusi nyata bagi masyarakat luas.</p>
      </div>
    `
  },

  // 14. Bahasa Inggris (Kelas 10)
  {
    id: 14,
    classLevel: 10,
    subject: "Bahasa Inggris",
    category: "Bahasa",
    title: "Technical Vocabulary & Procedure Texts for IT",
    slug: "technical-vocabulary-procedure-text-it",
    description: "Kosa kata teknis peranti lunak, menyusun teks prosedur instalasi software, dan instruksi penanganan bug dalam Bahasa Inggris.",
    tags: ["Bahasa Inggris", "English", "Technical", "Procedure"],
    readTime: "6 menit",
    date: "8 Februari 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Memahami struktur Procedure Text: Goal, Materials/Requirements, and Steps</li>
          <li>Menguasai imperative verbs (kata kerja instruksi teknis): Install, Configure, Debug, Execute</li>
          <li>Menyusun panduan instalasi software dalam Bahasa Inggris baku</li>
        </ul>
      </div>

      <h2>Contoh Teks Prosedur: How to Setup a Git Repository</h2>
      <div class="note-box note-box-info">
        <strong>Goal:</strong> Initialize a new Git version control repository.<br>
        <strong>Requirements:</strong> Git CLI installed on computer.<br>
        <strong>Steps:</strong><br>
        1. Open your terminal or Command Prompt.<br>
        2. Navigate to your project folder using <code>cd my-project</code>.<br>
        3. Type <code>git init</code> and press Enter.<br>
        4. Create a <code>README.md</code> file.<br>
        5. Stage your files using <code>git add .</code>.<br>
        6. Commit the changes using <code>git commit -m "Initial commit"</code>.
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Bahasa Inggris teknis adalah bahasa resmi industri peranti lunak global. Menguasai teks prosedur memudahkan siswa membaca dokumentasi resmi framework dunia.</p>
      </div>
    `
  },

  // 15. Bahasa Indonesia (Kelas 10)
  {
    id: 15,
    classLevel: 10,
    subject: "Bahasa Indonesia",
    category: "Bahasa",
    title: "Teks Laporan Hasil Observasi (LHO) Teknologi",
    slug: "teks-laporan-hasil-observasi",
    description: "Struktur teks LHO faktual: pernyataan umum, deskripsi bagian, dan deskripsi manfaat dengan kaidah kebahasaan baku.",
    tags: ["Bahasa Indonesia", "LHO", "Menulis", "Observasi"],
    readTime: "6 menit",
    date: "10 Februari 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Memahami sifat objektif dan faktual dari teks LHO tanpa opini bias</li>
          <li>Mengenal struktur 3 bagian: Definisi Umum, Deskripsi Bagian, dan Deskripsi Manfaat</li>
          <li>Mengidentifikasi kalimat definisi (adalah, merupakan) dan konjungsi logis</li>
        </ul>
      </div>

      <h2>Contoh Struktur LHO Laboratorium Komputer</h2>
      <ul>
        <li><strong>Definisi Umum:</strong> Laboratorium komputer SMK merupakan sarana ruang praktik kejuruan yang difasilitasi perangkat komputasi untuk menunjang pembelajaran koding.</li>
        <li><strong>Deskripsi Bagian:</strong> Ruang ini memiliki 36 unit komputer spesifikasi tinggi, pendingin ruangan sentral, server lokal terisolasi, serta jaringan fiber optik.</li>
        <li><strong>Deskripsi Manfaat:</strong> Keberadaan laboratorium ini meningkatkan kesiapan keterampilan teknis siswa menghadapi uji kompetensi keahlian.</li>
      </ul>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Menulis laporan observasi melatih ketajaman pengamatan siswa agar mampu menyusun dokumen spesifikasi kebutuhan sistem dengan jelas dan ilmiah.</p>
      </div>
    `
  },

  // 16. PPKn (Kelas 10)
  {
    id: 16,
    classLevel: 10,
    subject: "PPKn",
    category: "Norma & Nilai",
    title: "Pancasila & Identitas Bangsa di Era Digital",
    slug: "pancasila-identitas-era-digital",
    description: "Implementasi nilai-nilai kebangsaan, gotong royong siber, dan etika bernegara di tengah arus globalisasi teknologi.",
    tags: ["PPKn", "Kewarganegaraan", "Pancasila", "Etika"],
    readTime: "6 menit",
    date: "12 Februari 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Mengaitkan 5 sila Pancasila dengan interaksi sosial di media digital</li>
          <li>Menolak berita bohong (hoaks) dan ujaran kebencian di internet</li>
          <li>Menerapkan prinsip gotong royong dalam komunitas open source nasional</li>
        </ul>
      </div>

      <h2>Penerapan Sila Pancasila di Ruang Siber</h2>
      <ol>
        <li><strong>Sila 1:</strong> Menghormati perbedaan keyakinan dan tidak menyebarkan penistaan agama di forum daring.</li>
        <li><strong>Sila 2:</strong> Menghargai hak asasi manusia dengan tidak melakukan perundungan siber (cyberbullying).</li>
        <li><strong>Sila 3:</strong> Menjaga persatuan bangsa di tengah maraknya polarisasi opini di media sosial.</li>
        <li><strong>Sila 4:</strong> Mengutamakan musyawarah dan adab santun saat berdiskusi di grup komunitas.</li>
        <li><strong>Sila 5:</strong> Membuka akses ilmu teknologi yang adil bagi seluruh lapisan masyarakat.</li>
      </ol>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Pancasila bukan hanya teori di buku, melainkan pedoman berperilaku nyata siswa SMK dalam menjaga ruang digital Indonesia yang sehat dan bermartabat.</p>
      </div>
    `
  },

  // 17. Sejarah (Kelas 10)
  {
    id: 17,
    classLevel: 10,
    subject: "Sejarah",
    category: "Sosial Humaniora",
    title: "Perkembangan Teknologi & Industri Nasional",
    slug: "perkembangan-teknologi-industri-indonesia",
    description: "Menelusuri sejarah transformasi industri nasional sejak masa awal kemerdekaan hingga era digital dan kejuruan modern.",
    tags: ["Sejarah", "Industri", "Nasional", "Peradaban"],
    readTime: "6 menit",
    date: "14 Februari 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Memahami tonggak sejarah pendirian Sekolah Menengah Kejuruan (STM/SMK) di Indonesia</li>
          <li>Mengenal industri dirgantara nasional IPTN dan era digitalisasi masa kini</li>
        </ul>
      </div>

      <h2>Tahapan Sejarah Pendidikan Teknik di Indonesia</h2>
      <p>Pendidikan kejuruan di Indonesia berakar dari kebutuhan tenaga teknis perkebunan dan perkeretaapian masa kolonial, yang kemudian bertransformasi setelah kemerdekaan menjadi STM guna menopang pembangunan industri manufaktur nasional.</p>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Siswa SMK adalah penerus estafet kemandirian teknologi bangsa, menghubungkan cita-cita masa lalu dengan masa depan inovasi digital.</p>
      </div>
    `
  },

  // 18. Seni Budaya (Kelas 10)
  {
    id: 18,
    classLevel: 10,
    subject: "Seni Budaya",
    category: "Seni",
    title: "Konsep Estetika & Desain Visual Digital",
    slug: "konsep-estetika-desain-visual-digital",
    description: "Elemen dasar seni rupa (garis, bentuk, kontras, proporsi) serta penerapannya pada desain antarmuka pengguna digital.",
    tags: ["Seni Budaya", "Desain", "Estetika", "UI"],
    readTime: "6 menit",
    date: "16 Februari 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Memahami prinsip kontras warna, hirarki visual, dan tipografi</li>
          <li>Menghindari penggunaan warna yang melelahkan mata pengguna</li>
        </ul>
      </div>

      <h2>Prinsip Harmoni Warna Digital</h2>
      <p>Dalam desain UI aplikasi, warna solid dengan kontras terukur (seperti palet Deep Green dan Warm Cream) menciptakan kenyamanan membaca yang tahan lama bagi mata pengguna.</p>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Perangkat lunak yang hebat tidak hanya bebas dari error, namun juga memberikan pengalaman estetika yang menenangkan dan intuitif.</p>
      </div>
    `
  },

  // 19. PJOK (Kelas 10)
  {
    id: 19,
    classLevel: 10,
    subject: "PJOK",
    category: "Kebugaran",
    title: "Kebugaran Jasmani & Ergonomi Programmer",
    slug: "kebugaran-jasmani-ergonomi-programmer",
    description: "Menjaga kesehatan tulang punggung, peregangan leher, dan pola aktivitas fisik bagi siswa yang sering duduk di depan komputer.",
    tags: ["PJOK", "Ergonomi", "Kesehatan", "Kebugaran"],
    readTime: "5 menit",
    date: "18 Februari 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Mengatur posisi duduk ergonomis di depan monitor komputer</li>
          <li>Melakukan gerakan peregangan leher dan pergelangan tangan setiap 1 jam</li>
        </ul>
      </div>

      <h2>Pedoman Ergonomi Meja Kerja</h2>
      <ul>
        <li>Ketinggian monitor sejajar dengan mata untuk mencegah nyeri leher (<em>text neck</em>).</li>
        <li>Siku membentuk sudut 90 derajat sejajar dengan permukaan meja.</li>
        <li>Kaki menapak rata di lantai atau di atas pijakan kaki (<em>footrest</em>).</li>
      </ul>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Tubuh yang sehat dan bugar adalah fondasi ketahanan belajar koding berjam-jam tanpa mengalami cedera sendi menahun.</p>
      </div>
    `
  },

  // 20. PAI (Kelas 10)
  {
    id: 20,
    classLevel: 10,
    subject: "PAI",
    category: "Agama & Budi Pekerti",
    title: "Etika Profesi & Tanggung Jawab Moral Siswa SMK",
    slug: "etika-profesi-tanggung-jawab-moral",
    description: "Membangun karakter amanah, kejujuran kode sumber, dan perlindungan privasi data sesuai tuntunan budi pekerti luhur.",
    tags: ["PAI", "Etika", "Moral", "Karakter"],
    readTime: "5 menit",
    date: "20 Februari 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Memahami sifat amanah dalam menjaga kerahasiaan database pengguna</li>
          <li>Menjauhi plagiasi karya koding dan menghormati hak cipta orang lain</li>
        </ul>
      </div>

      <h2>Tanggung Jawab Moral Programmer</h2>
      <p>Keahlian membuat software adalah amanah besar. Menggunakan keahlian untuk meretas akun orang lain atau menyebarkan malware adalah pelanggaran moral dan hukum yang dilarang agama.</p>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Keahlian teknis tinggi yang berpadu dengan integritas moral melahirkan lulusan SMK yang disegani dan dipercaya di dunia kerja.</p>
      </div>
    `
  },

  // ==========================================================================
  // KELAS 11 (11 MATA PELAJARAN LENGKAP)
  // ==========================================================================

  // 21. PPLG -> Framework & MVC
  {
    id: 21,
    classLevel: 11,
    subject: "PPLG",
    category: "Web",
    title: "Pengenalan Framework & Arsitektur MVC",
    slug: "pengenalan-framework-arsitektur-mvc",
    description: "Membedah konsep Model, View, Controller untuk memisahkan logika database, tampilan antarmuka, dan pemrosesan rute web.",
    tags: ["MVC", "Framework", "Arsitektur", "Web"],
    readTime: "9 menit",
    date: "22 Februari 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Memahami alasan beralih dari PHP native kaku menuju framework terstruktur</li>
          <li>Mengurai tanggung jawab Model, View, dan Controller</li>
          <li>Menjelaskan siklus aliran request-response pada aplikasi MVC</li>
        </ul>
      </div>

      <h2>1. Mengapa Butuh Framework?</h2>
      <p>Pada proyek skala besar, menulis kode PHP native sering kali menghasilkan "kode spageti" di mana query SQL, tag HTML, dan logika if-else tercampur aduk dalam satu file. Framework menyediakan standar struktur folder yang seragam bagi tim pengembang.</p>

      <h2>2. Komponen MVC</h2>
      <ul>
        <li><strong>Model:</strong> Berinteraksi langsung dengan database (mengambil data, menyimpan data baru).</li>
        <li><strong>View:</strong> Menampilkan data ke pengguna dalam bentuk dokumen HTML yang bersih.</li>
        <li><strong>Controller:</strong> Pengatur lalu lintas; menerima URL dari browser, memanggil data ke Model, lalu mengirimkannya ke View.</li>
      </ul>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Arsitektur MVC adalah standar baku seluruh framework modern di dunia kerja, mulai dari Laravel, CodeIgniter, hingga Django dan Spring Boot.</p>
      </div>
    `
  },

  // 22. PPLG -> Web -> CodeIgniter 3 (Struktur Project)
  {
    id: 22,
    classLevel: 11,
    subject: "PPLG",
    category: "Web",
    title: "Pengenalan & Struktur Project CodeIgniter 3",
    slug: "pengenalan-struktur-project-ci3",
    description: "Mengenal framework legendaris yang ringan, konfigurasi autoload, dan navigasi folder application di CI3.",
    tags: ["CodeIgniter", "CI3", "PHP", "Framework"],
    readTime: "8 menit",
    date: "24 Februari 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Mengenal susunan folder: <code>application/</code>, <code>system/</code>, dan file <code>index.php</code></li>
          <li>Mengonfigurasi <code>base_url</code> di <code>config/config.php</code></li>
          <li>Mengaktifkan database library di <code>config/autoload.php</code></li>
        </ul>
      </div>

      <h2>Struktur Folder Inti CI3</h2>
      <ul>
        <li><code>application/controllers/</code>: Menampung seluruh class controller utama.</li>
        <li><code>application/models/</code>: Menampung file manipulasi query SQL.</li>
        <li><code>application/views/</code>: Menampung template tampilan antarmuka.</li>
        <li><code>application/config/</code>: File pengaturan rute, database, dan session.</li>
      </ul>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>CI3 sangat ramah untuk memahami pondasi MVC pertama kali tanpa perlu pusing dengan setup dependensi composer yang rumit.</p>
      </div>
    `
  },

  // 23. PPLG -> Web -> CodeIgniter 3 (Routing & Controller)
  {
    id: 23,
    classLevel: 11,
    subject: "PPLG",
    category: "Web",
    title: "Routing & Controller pada CodeIgniter 3",
    slug: "routing-controller-codeigniter-3",
    description: "Membuat class controller turunan CI_Controller, membuat fungsi method, dan mengoper data dinamis ke view.",
    tags: ["CodeIgniter", "Controller", "Routing"],
    readTime: "8 menit",
    date: "25 Februari 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Membuat controller <code>Siswa.php</code> di folder controllers</li>
          <li>Memahami format URL CI: <code>domain/controller/method/parameter</code></li>
          <li>Mengirimkan array <code>$data</code> ke view dengan <code>$this-&gt;load-&gt;view()</code></li>
        </ul>
      </div>

      <h2>Contoh Kode Controller Siswa.php</h2>
      <div class="code-block-wrapper">
        <div class="code-block-header">
          <span>application/controllers/Siswa.php</span>
          <button class="btn-copy" onclick="copyCode(this)">Salin Kode</button>
        </div>
        <pre class="code-block-pre"><code>&lt;?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Siswa extends CI_Controller {

    public function index() {
        $data['judul'] = "Daftar Siswa Kelas 11 SMK";
        $data['siswa'] = ["Rizky", "Anisa", "Fathan"];
        
        $this-&gt;load-&gt;view('header', $data);
        $this-&gt;load-&gt;view('siswa_index', $data);
        $this-&gt;load-&gt;view('footer');
    }
}</code></pre>
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Controller menjadi jembatan utama yang mengendalikan apa yang harus dibuka browser saat URL tertentu dikunjungi.</p>
      </div>
    `
  },

  // 24. PPLG -> Web -> Laravel 12 (Pengenalan & Config)
  {
    id: 24,
    classLevel: 11,
    subject: "PPLG",
    category: "Web",
    title: "Pengenalan Laravel 12 & Konfigurasi Awal",
    slug: "pengenalan-laravel-12-konfigurasi-awal",
    description: "Membedah fitur modern Laravel versi terbaru, manajemen dependensi Composer, dan konfigurasi berkas rahasia .env.",
    tags: ["Laravel", "Laravel 12", "PHP", "Artisan"],
    readTime: "9 menit",
    date: "26 Februari 2026",
    featured: true,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Memahami keunggulan ekosistem Laravel di industri teknologi nasional</li>
          <li>Menjalankan server pengembangan lokal via <code>php artisan serve</code></li>
          <li>Mengonfigurasi koneksi database MySQL pada berkas <code>.env</code></li>
        </ul>
      </div>

      <h2>1. Keunggulan Laravel 12 untuk Siswa SMK</h2>
      <p>Laravel 12 menawarkan arsitektur modern yang ramping, dukungan PHP 8.3+, sistem migrasi skema database otomatis, serta CLI canggih bernama <strong>Artisan</strong>.</p>

      <h2>Perintah Esensial Artisan di Terminal</h2>
      <div class="code-block-wrapper">
        <div class="code-block-header">
          <span>terminal</span>
          <button class="btn-copy" onclick="copyCode(this)">Salin Kode</button>
        </div>
        <pre class="code-block-pre"><code># Menjalankan server lokal di port 8000
php artisan serve

# Menjalankan migrasi pembuatan tabel database
php artisan migrate</code></pre>
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Laravel adalah kerangka kerja PHP paling dicari oleh perusahaan software house. Menguasainya di kelas 11 membuka jalan lebar menuju kesuksesan magang industri (PKL).</p>
      </div>
    `
  },

  // 25. PPLG -> Web -> Laravel 12 (Routing & Controller)
  {
    id: 25,
    classLevel: 11,
    subject: "PPLG",
    category: "Web",
    title: "Routing & Controller pada Laravel",
    slug: "routing-controller-laravel",
    description: "Mendefinisikan rute web di routes/web.php, controller resource terstruktur, dan penanganan parameter URL.",
    tags: ["Laravel", "Routing", "Controller", "Web"],
    readTime: "10 menit",
    date: "28 Februari 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Mendefinisikan route HTTP: GET, POST, PUT, DELETE di <code>routes/web.php</code></li>
          <li>Membuat controller otomatis menggunakan perintah <code>php artisan make:controller</code></li>
          <li>Menangkap parameter ID dinamis pada route URL</li>
        </ul>
      </div>

      <h2>Contoh Penulisan Route Modern Laravel</h2>
      <div class="code-block-wrapper">
        <div class="code-block-header">
          <span>routes/web.php</span>
          <button class="btn-copy" onclick="copyCode(this)">Salin Kode</button>
        </div>
        <pre class="code-block-pre"><code>use App\\Http\\Controllers\\MateriController;
use Illuminate\\Support\\Facades\\Route;

Route::get('/', function () {
    return view('beranda');
});

// Menghubungkan URL ke Method Controller
Route::get('/materi', [MateriController::class, 'index']);
Route::get('/materi/{id}', [MateriController::class, 'show']);
</code></pre>
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Routing yang bersih mempermudah perancangan sistem RESTful dan menjaga arsitektur aplikasi tetap teratur seiring bertambahnya modul materi.</p>
      </div>
    `
  },

  // 26. PPLG -> Web -> Laravel 12 (Blade Template)
  {
    id: 26,
    classLevel: 11,
    subject: "PPLG",
    category: "Web",
    title: "Blade Templating Modular pada Laravel",
    slug: "blade-templating-modular-laravel",
    description: "Memanfaatkan template engine Blade untuk layout master, @yield, @extends, @section, dan komponen reusable.",
    tags: ["Laravel", "Blade", "Frontend", "Template"],
    readTime: "8 menit",
    date: "2 Maret 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Menerapkan prinsip inheritance layout dengan <code>@extends</code> dan <code>@yield</code></li>
          <li>Menghindari duplikasi header dan footer pada puluhan halaman view</li>
          <li>Menampilkan data dengan pengamanan otomatis XSS via <code>{{ $variabel }}</code></li>
        </ul>
      </div>

      <h2>Contoh Master Layout: resources/views/layouts/app.blade.php</h2>
      <div class="code-block-wrapper">
        <div class="code-block-header">
          <span>app.blade.php</span>
          <button class="btn-copy" onclick="copyCode(this)">Salin Kode</button>
        </div>
        <pre class="code-block-pre"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="id"&gt;
&lt;head&gt;
  &lt;title&gt;@yield('title', 'Ray Learn SMK')&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;nav&gt;...Navigasi Bersama...&lt;/nav&gt;
  
  &lt;main&gt;
    @yield('content')
  &lt;/main&gt;
  
  &lt;footer&gt;&copy; 2026 Ray Learn&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Blade memangkas waktu kerja developer dan menjamin konsistensi tata letak visual di seluruh halaman aplikasi web.</p>
      </div>
    `
  },

  // 27. Pemrograman Mobile -> Flutter (Dasar Dart & Widget)
  {
    id: 27,
    classLevel: 11,
    subject: "Pemrograman Mobile",
    category: "Mobile",
    title: "Dasar Flutter: Pengenalan Dart & Struktur Widget",
    slug: "dasar-flutter-dart-struktur-widget",
    description: "Membangun aplikasi Android dan iOS dari satu basis kode Dart dengan filosofi 'Everything is a Widget'.",
    tags: ["Flutter", "Dart", "Mobile", "Android"],
    readTime: "9 menit",
    date: "4 Maret 2026",
    featured: true,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Mengenal keunggulan arsitektur multiplatform Flutter buatan Google</li>
          <li>Memahami fungsi file <code>lib/main.dart</code> sebagai pintu masuk aplikasi</li>
          <li>Menyusun widget dasar: <code>MaterialApp</code>, <code>Scaffold</code>, <code>AppBar</code>, dan <code>Center</code></li>
        </ul>
      </div>

      <h2>Contoh Aplikasi Mobile Pertama di Flutter</h2>
      <div class="code-block-wrapper">
        <div class="code-block-header">
          <span>lib/main.dart</span>
          <button class="btn-copy" onclick="copyCode(this)">Salin Kode</button>
        </div>
        <pre class="code-block-pre"><code>import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Aplikasi SMK',
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Ray Learn Mobile'),
          backgroundColor: const Color(0xFF304D36),
        ),
        body: const Center(
          child: Text(
            'Halo Siswa SMK Kelas 11!',
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
          ),
        ),
      ),
    );
  }
}</code></pre>
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Flutter merevolusi pengembangan mobile dengan fitur <em>Hot Reload</em> cepat, sehingga siswa dapat langsung melihat perubahan desain di layar ponsel dalam hitungan detik.</p>
      </div>
    `
  },

  // 28. Pemrograman Mobile -> Flutter (Stateless vs Stateful)
  {
    id: 28,
    classLevel: 11,
    subject: "Pemrograman Mobile",
    category: "Mobile",
    title: "Stateless vs Stateful Widget di Flutter",
    slug: "stateless-vs-stateful-widget-flutter",
    description: "Memahami kapan tampilan bersifat statis dan kapan widget harus reaktif berubah melalui fungsi setState.",
    tags: ["Flutter", "State", "Mobile", "Reaktif"],
    readTime: "8 menit",
    date: "6 Maret 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Membedakan <strong>StatelessWidget</strong> (tampilan tetap) dan <strong>StatefulWidget</strong> (tampilan dinamis)</li>
          <li>Memperbarui nilai variabel antarmuka menggunakan <code>setState()</code></li>
          <li>Membuat komponen tombol counter penghitung angka interaktif</li>
        </ul>
      </div>

      <h2>Perbandingan Dua Jenis Widget</h2>
      <table>
        <thead>
          <tr>
            <th>Kriteria</th>
            <th>StatelessWidget</th>
            <th>StatefulWidget</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Sifat Data</strong></td>
            <td>Statis / Konstan (Immutable)</td>
            <td>Dinamis / Berubah (Mutable)</td>
          </tr>
          <tr>
            <td><strong>Contoh Penggunaan</strong></td>
            <td>Judul Teks, Ikon, Gambar, Card</td>
            <td>Form Input, Checkbox, Keranjang Belanja</td>
          </tr>
          <tr>
            <td><strong>Perubahan Layar</strong></td>
            <td>Tidak merender ulang</td>
            <td>Merender ulang via <code>setState()</code></td>
          </tr>
        </tbody>
      </table>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Memilih jenis widget yang tepat mencegah pemborosan memori ponsel dan memastikan performa animasi aplikasi tetap mulus pada 60fps.</p>
      </div>
    `
  },

  // 29. PPLG -> Pemrograman Desktop (Kelas 11 - SQLite)
  {
    id: 29,
    classLevel: 11,
    subject: "PPLG",
    category: "Pemrograman Desktop",
    title: "GUI Architecture & Database SQLite Desktop",
    slug: "gui-architecture-sqlite-database-desktop",
    description: "Menghubungkan form input aplikasi desktop dengan sistem basis data lokal SQLite untuk aplikasi kasir dan inventaris sekolah.",
    tags: ["Desktop", "SQLite", "Database", "CRUD"],
    readTime: "8 menit",
    date: "8 Maret 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Mengenal keunggulan database serverless berformat file tunggal <code>.db</code></li>
          <li>Menjalankan operasi CRUD (Create, Read, Update, Delete) pada tabel inventaris</li>
          <li>Menampilkan data query ke kontrol visual DataGridView</li>
        </ul>
      </div>

      <h2>Contoh Query Pembuatan Tabel SQLite</h2>
      <div class="code-block-wrapper">
        <div class="code-block-header">
          <span>schema.sql</span>
          <button class="btn-copy" onclick="copyCode(this)">Salin Kode</button>
        </div>
        <pre class="code-block-pre"><code>CREATE TABLE IF NOT EXISTS inventaris_lab (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    kode_barang TEXT NOT NULL UNIQUE,
    nama_barang TEXT NOT NULL,
    jumlah INTEGER DEFAULT 0,
    kondisi TEXT CHECK(kondisi IN ('Baik', 'Rusak', 'Perbaikan'))
);</code></pre>
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>SQLite adalah standar emas penyimpanan data lokal mandiri yang tidak membutuhkan instalasi server database eksternal terpisah.</p>
      </div>
    `
  },

  // 30. PKKWU (Kelas 11)
  {
    id: 30,
    classLevel: 11,
    subject: "PKKWU",
    category: "Kewirausahaan",
    title: "Perencanaan Bisnis Digital & Business Model Canvas",
    slug: "perencanaan-bisnis-digital-bmc",
    description: "Menyusun Business Model Canvas (BMC), menentukan Value Proposition produk peranti lunak, dan menghitung biaya pokok produksi.",
    tags: ["PKKWU", "Bisnis", "BMC", "Startup"],
    readTime: "8 menit",
    date: "10 Maret 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Mengisi 9 blok Business Model Canvas (BMC) untuk produk aplikasi sekolah</li>
          <li>Merumuskan Value Proposition yang membedakan produk dari kompetitor</li>
          <li>Menghitung Revenue Streams (Aliran Pendapatan) layanan peranti lunak</li>
        </ul>
      </div>

      <h2>Sembilan Elemen Kunci BMC</h2>
      <ol>
        <li><strong>Customer Segments:</strong> Siapa target pengguna spesifik aplikasi.</li>
        <li><strong>Value Propositions:</strong> Masalah apa yang diselesaikan produk bagi mereka.</li>
        <li><strong>Channels:</strong> Cara produk dipasarkan dan diunduh.</li>
        <li><strong>Customer Relationships:</strong> Cara melayani dan mempertahankan loyalitas pengguna.</li>
        <li><strong>Revenue Streams:</strong> Model bisnis langganan, lisensi, atau per-transaksi.</li>
        <li><strong>Key Resources:</strong> Sumber daya server, laptop developer, dan keahlian tim.</li>
        <li><strong>Key Activities:</strong> Pemrograman, pengujian bug, dan pemasaran.</li>
        <li><strong>Key Partnerships:</strong> Sekolah mitra dan penyedia hosting cloud.</li>
        <li><strong>Cost Structure:</strong> Biaya operasional server dan gaji tim.</li>
      </ol>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Karya koding tanpa model bisnis yang matang akan sulit bertahan. BMC membimbing siswa menjadi wirausahawan teknologi yang mandiri.</p>
      </div>
    `
  },

  // 31. Matematika (Kelas 11)
  {
    id: 31,
    classLevel: 11,
    subject: "Matematika",
    category: "Umum",
    title: "Matriks & Transformasi Geometri Komputasi",
    slug: "matriks-transformasi-geometri-komputasi",
    description: "Operasi perkalian matriks, determinan, invers, dan penerapannya pada rotasi serta translasi objek grafika komputer 2D.",
    tags: ["Matematika", "Matriks", "Grafika", "Transformasi"],
    readTime: "8 menit",
    date: "12 Maret 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Melakukan operasi penjumlahan dan perkalian ordo matriks</li>
          <li>Menghitung invers matriks ordo 2x2</li>
          <li>Memahami bagaimana transformasi translasi dan rotasi bekerja di layar komputer</li>
        </ul>
      </div>

      <h2>Penerapan Matriks dalam Pemrograman Game</h2>
      <p>Setiap piksel karakter dalam game 2D memiliki koordinat <code>(x, y)</code>. Saat karakter bergerak atau berputar, komputer mengalikan koordinat tersebut dengan matriks transformasi geometri secara instan jutaan kali per detik.</p>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Matriks adalah bahasa matematika utama di balik kartu grafis (GPU), pengolahan citra digital, dan filter kamera smartphone.</p>
      </div>
    `
  },

  // 32. Bahasa Inggris (Kelas 11)
  {
    id: 32,
    classLevel: 11,
    subject: "Bahasa Inggris",
    category: "Bahasa",
    title: "Professional Email & Technical Documentation",
    slug: "professional-email-technical-documentation",
    description: "Format korespondensi email formal kepada klien luar negeri, penyusunan berkas README di GitHub, dan etika tim jarak jauh.",
    tags: ["Bahasa Inggris", "Business English", "Email", "Dokumentasi"],
    readTime: "6 menit",
    date: "14 Maret 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Menulis subjek email profesional yang jelas dan tidak ambigu</li>
          <li>Menggunakan salam pembuka formal (Dear Mr./Ms.) dan penutup (Best regards)</li>
          <li>Menyusun dokumentasi README project di repositori open source</li>
        </ul>
      </div>

      <h2>Format Standar Email Laporan Bug Proyek</h2>
      <div class="note-box note-box-info">
        <strong>Subject:</strong> [Bug Report] Payment Gateway Timeout on Checkout Page<br><br>
        Dear Project Manager,<br><br>
        I am writing to inform you that we encountered a timeout error during the checkout process in staging environment. The issue occurs when users select credit card payment option.<br><br>
        Our team is actively investigating the API logs and will provide an update within 2 hours.<br><br>
        Sincerely,<br>
        Rayhan — Software Developer Intern
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Keahlian komunikasi tulisan formal membangun reputasi profesional siswa SMK saat berinteraksi dengan mitra industri global.</p>
      </div>
    `
  },

  // 33. Bahasa Indonesia (Kelas 11)
  {
    id: 33,
    classLevel: 11,
    subject: "Bahasa Indonesia",
    category: "Bahasa",
    title: "Penulisan Karya Tulis Ilmiah & Proposal Proyek",
    slug: "penulisan-karya-ilmiah-proposal-proyek",
    description: "Sistematika proposal tugas akhir kejuruan, perumusan masalah, metode pengembangan terapan, dan daftar pustaka standar APA.",
    tags: ["Bahasa Indonesia", "KTI", "Proposal", "Akademik"],
    readTime: "7 menit",
    date: "16 Maret 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Menyusun Bab 1 Pendahuluan (Latar Belakang, Rumusan Masalah, Tujuan)</li>
          <li>Menulis kutipan ilmiah dan daftar pustaka tanpa plagiarisme</li>
        </ul>
      </div>

      <h2>Struktur Inti Proposal Uji Kompetensi Keahlian</h2>
      <ol>
        <li><strong>Latar Belakang:</strong> Menjelaskan masalah riil di dunia industri/sekolah yang mendesak untuk diselesaikan.</li>
        <li><strong>Batasan Masalah:</strong> Menentukan cakupan fitur agar proyek selesai tepat waktu.</li>
        <li><strong>Metodologi Pengembangan:</strong> Memilih model pengembangan software seperti Waterfall atau Agile Scrum.</li>
      </ol>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Proposal yang terstruktur rapi memudahkan penguji memahami nilai guna dan orisinalitas karya cipta aplikasi siswa.</p>
      </div>
    `
  },

  // 34. PPKn (Kelas 11)
  {
    id: 34,
    classLevel: 11,
    subject: "PPKn",
    category: "Norma & Nilai",
    title: "Sistem Hukum & Perlindungan Hak Cipta Software",
    slug: "sistem-hukum-hak-cipta-software",
    description: "Pemahaman mengenai regulasi hukum hak kekayaan intelektual, lisensi open source (MIT, GPL), dan kepatuhan UU PDP.",
    tags: ["PPKn", "Hukum", "Hak Cipta", "UU PDP"],
    readTime: "6 menit",
    date: "18 Maret 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Memahami dasar hukum perlindungan hak cipta program komputer di Indonesia</li>
          <li>Mengenal jenis lisensi peranti lunak (Proprietary vs Open Source MIT)</li>
          <li>Mengetahui sanksi pidana pembajakan peranti lunak komersial</li>
        </ul>
      </div>

      <h2>Etika Penggunaan Kode Sumber Terbuka</h2>
      <p>Menggunakan pustaka open source diperbolehkan selama mematuhi klausul lisensi yang disertakan pembuatnya, seperti tetap mencantumkan hak kredit penulis asli.</p>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Menghormati hak kekayaan intelektual adalah wujud kepatuhan hukum warga negara terdidik di era ekonomi berbasis pengetahuan.</p>
      </div>
    `
  },

  // 35. Sejarah (Kelas 11)
  {
    id: 35,
    classLevel: 11,
    subject: "Sejarah",
    category: "Sosial Humaniora",
    title: "Revolusi Industri 1.0 hingga Era Kecerdasan Buatan",
    slug: "revolusi-industri-hingga-era-ai",
    description: "Dampak gelombang revolusi dari mesin uap, listrik, komputer, otomasi internet, hingga era kolaborasi manusia dengan AI.",
    tags: ["Sejarah", "Revolusi Industri", "AI", "Otomasi"],
    readTime: "7 menit",
    date: "20 Maret 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Menganalisis karakteristik Revolusi Industri 1.0 hingga 5.0</li>
          <li>Mengidentifikasi keterampilan masa depan yang tidak mudah tergantikan otomasi</li>
        </ul>
      </div>

      <h2>Kronik Transformasi Industri Global</h2>
      <ul>
        <li><strong>Industri 1.0 (1784):</strong> Mesin uap dan mekanisasi produksi kain.</li>
        <li><strong>Industri 2.0 (1870):</strong> Tenaga listrik dan produksi massal lini perakitan.</li>
        <li><strong>Industri 3.0 (1969):</strong> Komputerisasi awal dan robotik otomasi pabrik.</li>
        <li><strong>Industri 4.0 (2011):</strong> Internet of Things (IoT), Big Data, dan komputasi awan.</li>
        <li><strong>Society 5.0 (Kini):</strong> Kolaborasi harmonis antara manusia dan kecerdasan buatan.</li>
      </ul>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Sejarah membuktikan bahwa teknologi tidak menghapus pekerjaan, melainkan mengubah jenis keahlian yang dibutuhkan pasar kerja.</p>
      </div>
    `
  },

  // 36. PJOK (Kelas 11)
  {
    id: 36,
    classLevel: 11,
    subject: "PJOK",
    category: "Kebugaran",
    title: "Kesehatan Mata (Aturan 20-20-20) & Peregangan Kerja",
    slug: "kesehatan-mata-peregangan-kerja",
    description: "Mencegah sindrom Computer Vision Syndrome (CVS) dan rangkaian peregangan sendi pergelangan tangan (Carpal Tunnel Prevention).",
    tags: ["PJOK", "Kesehatan", "CVS", "Ergonomi"],
    readTime: "5 menit",
    date: "22 Maret 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Menerapkan aturan 20-20-20 saat menatap layar komputer berjam-jam</li>
          <li>Melakukan senam jari untuk mencegah Carpal Tunnel Syndrome</li>
        </ul>
      </div>

      <h2>Aturan Emas 20-20-20</h2>
      <p>Setiap <strong>20 menit</strong> menatap layar, alihkan pandangan menatap objek yang berjarak minimal <strong>20 kaki (sekitar 6 meter)</strong> selama minimal <strong>20 detik</strong>. Langkah sederhana ini mengistirahatkan otot lensa mata dari kelelahan radiasi cahaya biru.</p>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Karier seorang programmer bergantung pada kesehatan mata dan jarinya. Menjaga tubuh adalah investasi profesional jangka panjang.</p>
      </div>
    `
  },

  // 37. PAI (Kelas 11)
  {
    id: 37,
    classLevel: 11,
    subject: "PAI",
    category: "Agama & Budi Pekerti",
    title: "Prinsip Muamalah & Transaksi Finansial Digital",
    slug: "muamalah-transaksi-finansial-digital",
    description: "Prinsip keterbukaan dalam akad perdagangan elektronik (e-commerce), kejelasan barang, dan larangan penipuan online.",
    tags: ["PAI", "Muamalah", "Fintech", "Etika"],
    readTime: "5 menit",
    date: "24 Maret 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Memahami syarat sah akad jual beli online dalam syariat</li>
          <li>Menjauhi unsur gharar (ketidakjelasan) dan manipulasi transaksi sistem</li>
        </ul>
      </div>

      <h2>Kejujuran dalam Sistem Pembayaran Digital</h2>
      <p>Pengembang sistem pembayaran wajib memastikan saldo pengguna dihitung secara tepat tanpa pemotongan tersembunyi yang merugikan pihak lain.</p>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Sistem teknologi finansial yang berkah adalah sistem yang transparan, adil, dan melindungi hak semua pihak yang bertransaksi.</p>
      </div>
    `
  },

  // ==========================================================================
  // KELAS 12 (11 MATA PELAJARAN LENGKAP)
  // ==========================================================================

  // 38. PPLG -> IoT (Arsitektur Dasar)
  {
    id: 38,
    classLevel: 12,
    subject: "PPLG",
    category: "IoT",
    title: "Pengenalan Internet of Things & Arsitektur Sistem",
    slug: "pengenalan-iot-arsitektur-sistem",
    description: "Memahami konsep konektivitas perangkat fisik ke cloud: Sensor, Microcontroller, Gateway, dan Cloud Dashboard.",
    tags: ["IoT", "Hardware", "PPLG", "Arsitektur"],
    readTime: "9 menit",
    date: "26 Maret 2026",
    featured: true,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Memahami definisi dan 4 lapisan arsitektur Internet of Things</li>
          <li>Mengenal fungsi sensor (penerima input fisik) dan aktuator (penggerak fisik)</li>
          <li>Mengetahui perbedaan protokol HTTP biasa dengan protokol IoT berdaya rendah</li>
        </ul>
      </div>

      <h2>1. Empat Lapisan Arsitektur IoT</h2>
      <ol>
        <li><strong>Sensing Layer:</strong> Sensor DHT22 (suhu/kelembapan), LDR (cahaya), PIR (gerak).</li>
        <li><strong>Network Layer:</strong> Transmisi data via WiFi, Bluetooth, LoRaWAN, atau 4G/5G.</li>
        <li><strong>Data Processing Layer:</strong> Server cloud yang menganalisis dan menyimpan rekaman telemetri.</li>
        <li><strong>Application Layer:</strong> Dashboard monitoring web atau aplikasi mobile untuk pengguna akhir.</li>
      </ol>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>IoT menjembatani dunia perangkat keras dan perangkat lunak, memungkinkan pembuatan sistem otomatisasi pertanian cerdas (Smart Agriculture) dan rumah pintar (Smart Home).</p>
      </div>
    `
  },

  // 39. PPLG -> IoT (ESP32 & GPIO)
  {
    id: 39,
    classLevel: 12,
    subject: "PPLG",
    category: "IoT",
    title: "Pemrograman Mikrokontroler ESP32 & Pin GPIO",
    slug: "pemrograman-esp32-pin-gpio",
    description: "Mengenal board mikrokontroler dual-core ESP32 dengan modul WiFi terintegrasi serta manipulasi sinyal digital input/output.",
    tags: ["ESP32", "IoT", "Arduino", "GPIO"],
    readTime: "10 menit",
    date: "28 Maret 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Mengenal konfigurasi pin General Purpose Input Output (GPIO) ESP32</li>
          <li>Menulis skrip C++ Arduino IDE: fungsi <code>setup()</code> dan <code>loop()</code></li>
          <li>Mengendalikan lampu LED dan membaca sensor sentuh kapasitif</li>
        </ul>
      </div>

      <h2>Contoh Skrip Blink & Baca Sensor Sentuh</h2>
      <div class="code-block-wrapper">
        <div class="code-block-header">
          <span>esp32_control.ino</span>
          <button class="btn-copy" onclick="copyCode(this)">Salin Kode</button>
        </div>
        <pre class="code-block-pre"><code>#define LED_PIN 2

void setup() {
  Serial.begin(115200);
  pinMode(LED_PIN, OUTPUT);
  Serial.println("Sistem ESP32 Siap!");
}

void loop() {
  // Nyalakan LED
  digitalWrite(LED_PIN, HIGH);
  delay(1000); // Tunda 1 detik
  
  // Matikan LED
  digitalWrite(LED_PIN, LOW);
  delay(1000);
}</code></pre>
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>ESP32 adalah mikrokontroler industri berbiaya terjangkau dengan kemampuan komputasi tinggi yang menjadi standar proyek IoT di SMK.</p>
      </div>
    `
  },

  // 40. PPLG -> IoT (Sensor & MQTT)
  {
    id: 40,
    classLevel: 12,
    subject: "PPLG",
    category: "IoT",
    title: "Integrasi Sensor IoT & Komunikasi Protokol MQTT",
    slug: "sensor-iot-protokol-mqtt",
    description: "Mengirimkan data telemetri sensor suhu ke broker MQTT menggunakan arsitektur publish-subscribe yang ringan.",
    tags: ["MQTT", "IoT", "ESP32", "Telemetri"],
    readTime: "11 menit",
    date: "30 Maret 2026",
    featured: true,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Memahami konsep model Publish-Subscribe pada protokol MQTT</li>
          <li>Menghubungkan ESP32 ke jaringan WiFi dan MQTT Broker</li>
          <li>Mengirim pesan data telemetri berformat JSON pada topik tertentu</li>
        </ul>
      </div>

      <h2>Contoh Skrip Kirim Data Telemetri</h2>
      <div class="code-block-wrapper">
        <div class="code-block-header">
          <span>mqtt_publisher.ino</span>
          <button class="btn-copy" onclick="copyCode(this)">Salin Kode</button>
        </div>
        <pre class="code-block-pre"><code>#include &lt;WiFi.h&gt;
#include &lt;PubSubClient.h&gt;

const char* ssid = "SMK_HOTSPOT";
const char* pass = "smkbisa123";
const char* mqttServer = "broker.hivemq.com";

WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, pass);
  while (WiFi.status() != WL_CONNECTED) { delay(500); }
  client.setServer(mqttServer, 1883);
}

void loop() {
  if (!client.connected()) { reconnect(); }
  client.loop();
  
  // Publikasikan suhu simulasi ke topik smk/lab/suhu
  client.publish("smk/lab/suhu", "29.4");
  delay(5000); // Kirim setiap 5 detik
}</code></pre>
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>MQTT sangat hemat kuota data dan daya baterai, menjadikannya pilihan mutlak bagi pemantauan perangkat jarak jauh di area perkebunan dan pabrik.</p>
      </div>
    `
  },

  // 41. PPLG -> Sistem Informasi (UML)
  {
    id: 41,
    classLevel: 12,
    subject: "PPLG",
    category: "Sistem Informasi",
    title: "Analisis Sistem Informasi & Pemodelan UML",
    slug: "analisis-sistem-pemodelan-uml",
    description: "Memodelkan alur bisnis aplikasi menggunakan Use Case Diagram, Activity Diagram, dan Class Diagram standar industri.",
    tags: ["UML", "Sistem Informasi", "Analisis", "Use Case"],
    readTime: "10 menit",
    date: "2 April 2026",
    featured: true,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Mengidentifikasi aktor dan fungsi sistem pada Use Case Diagram</li>
          <li>Menggambarkan alur logika bisnis percabangan via Activity Diagram</li>
          <li>Menyusun relasi antartabel dan class object via Class Diagram</li>
        </ul>
      </div>

      <h2>Tiga Diagram UML Paling Wajib bagi Siswa SMK</h2>
      <ol>
        <li><strong>Use Case Diagram:</strong> Menjawab pertanyaan <em>"Siapa melakukan apa pada sistem?"</em> (contoh: Siswa dapat meminjam buku perpustakaan).</li>
        <li><strong>Activity Diagram:</strong> Menampilkan alur proses dari titik mulai (start node) hingga selesai (end node), termasuk percabangan kondisi validasi.</li>
        <li><strong>Class Diagram:</strong> Menunjukkan atribut, metode, dan relasi (1 to Many, Many to Many) antarobjek perangkat lunak.</li>
      </ol>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Membuat diagram UML sebelum koding mencegah salah paham antara klien dan tim pengembang, serta menghemat ratusan jam waktu perbaikan bug.</p>
      </div>
    `
  },

  // 42. PPLG -> Sistem Informasi (Normalisasi Basis Data)
  {
    id: 42,
    classLevel: 12,
    subject: "PPLG",
    category: "Sistem Informasi",
    title: "Normalisasi Basis Data: 1NF, 2NF, hingga 3NF",
    slug: "normalisasi-basis-data-1nf-3nf",
    description: "Teknik optimasi tabel basis data untuk menghilangkan redundansi data dan mencegah anomali saat insert, update, dan delete.",
    tags: ["Database", "Normalisasi", "SQL", "Relasional"],
    readTime: "9 menit",
    date: "4 April 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Memahami bahaya anomali insert, update, dan delete pada tabel tanpa normalisasi</li>
          <li>Memenuhi kriteria bentuk normal pertama (1NF): nilai bersifat atomik</li>
          <li>Memenuhi bentuk 2NF (hilangkan ketergantungan parsial) dan 3NF (hilangkan ketergantungan transitif)</li>
        </ul>
      </div>

      <h2>Tahapan Normalisasi</h2>
      <ul>
        <li><strong>1NF:</strong> Tidak ada kolom yang menyimpan multi-nilai dalam satu baris (misal: kolom hobi berisi "baca, renang" harus dipisah menjadi baris tersendiri).</li>
        <li><strong>2NF:</strong> Sudah 1NF dan seluruh atribut non-kunci bergantung sepenuhnya pada Primary Key.</li>
        <li><strong>3NF:</strong> Sudah 2NF dan tidak ada kolom non-kunci yang bergantung pada kolom non-kunci lainnya (hilangkan ketergantungan transitif).</li>
      </ul>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Tabel database yang ternormalisasi menjamin integritas data jutaan transaksi tetap konsisten tanpa ada data ganda yang korup.</p>
      </div>
    `
  },

  // 43. PPLG -> Web -> REST API & JWT
  {
    id: 43,
    classLevel: 12,
    subject: "PPLG",
    category: "Web",
    title: "Advanced Web: RESTful API & Autentikasi JWT",
    slug: "advanced-web-restful-api-jwt",
    description: "Memisahkan lapisan backend dan frontend melalui antarmuka endpoint RESTful API terstandarisasi dengan keamanan token JWT.",
    tags: ["REST API", "JWT", "Security", "Backend"],
    readTime: "9 menit",
    date: "6 April 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Memahami format pertukaran data JSON standar industri</li>
          <li>Menerapkan kode status HTTP: 200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found</li>
          <li>Mengamankan rute data menggunakan JSON Web Token (JWT)</li>
        </ul>
      </div>

      <h2>Contoh Respon JSON Endpoint Siswa</h2>
      <div class="code-block-wrapper">
        <div class="code-block-header">
          <span>api/siswa.json</span>
          <button class="btn-copy" onclick="copyCode(this)">Salin Kode</button>
        </div>
        <pre class="code-block-pre"><code>{
  "status": "success",
  "code": 200,
  "data": [
    { "id": 1, "nama": "Ahmad Dani", "kelas": "12 PPLG 1", "status": "Aktif" },
    { "id": 2, "nama": "Bela Safira", "kelas": "12 PPLG 2", "status": "Aktif" }
  ]
}</code></pre>
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>RESTful API memungkinkan satu sistem backend yang sama melayani aplikasi web desktop, aplikasi smartphone Android, dan perangkat IoT secara bersamaan.</p>
      </div>
    `
  },

  // 44. Pemrograman Mobile -> Flutter Advanced
  {
    id: 44,
    classLevel: 12,
    subject: "Pemrograman Mobile",
    category: "Mobile",
    title: "Flutter Advanced: State Management & HTTP API",
    slug: "flutter-advanced-state-management-http",
    description: "Manajemen state aplikasi berskala besar, integrasi provider pattern, dan parsing data dari REST API jaringan.",
    tags: ["Flutter", "Riverpod", "API", "Mobile"],
    readTime: "9 menit",
    date: "8 April 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Menghubungkan aplikasi Flutter dengan server online via paket <code>http</code></li>
          <li>Memetakan string JSON ke dalam Model Class Dart (Serialization)</li>
          <li>Menangani indikator loading dan error jaringan dengan <code>FutureBuilder</code></li>
        </ul>
      </div>

      <h2>Contoh Request GET HTTP di Flutter</h2>
      <div class="code-block-wrapper">
        <div class="code-block-header">
          <span>api_service.dart</span>
          <button class="btn-copy" onclick="copyCode(this)">Salin Kode</button>
        </div>
        <pre class="code-block-pre"><code>import 'dart:convert';
import 'package:http/http.dart' as http;

Future&lt;List&lt;dynamic&gt;&gt; fetchMateri() async {
  final response = await http.get(Uri.parse('https://api.raylearn.id/materi'));
  if (response.statusCode == 200) {
    return jsonDecode(response.body)['data'];
  } else {
    throw Exception('Gagal memuat data dari server');
  }
}</code></pre>
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Aplikasi mobile modern wajib terhubung ke cloud backend. Kemampuan mengonsumsi API adalah syarat mutlak lowongan Mobile Developer.</p>
      </div>
    `
  },

  // 45. PPLG -> Pemrograman Desktop (Kelas 12 - Packaging)
  {
    id: 45,
    classLevel: 12,
    subject: "PPLG",
    category: "Pemrograman Desktop",
    title: "Packaging & Deployment Aplikasi Desktop Multiplatform",
    slug: "deployment-packaging-aplikasi-desktop",
    description: "Membuat berkas installer eksekusi (MSI/EXE) untuk Windows dan bundle installer portabel yang siap didistribusikan ke klien.",
    tags: ["Desktop", "Deployment", "Installer", "Packaging"],
    readTime: "7 menit",
    date: "10 April 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Mengompilasi mode Release tanpa dependensi debugger</li>
          <li>Mengemas file database lokal, ikon aset, dan berkas library DLL</li>
          <li>Membuat wizard instalasi interaktif bagi pengguna awam</li>
        </ul>
      </div>

      <h2>Langkah Pengemasan Aplikasi</h2>
      <ol>
        <li>Ganti konfigurasi kompilasi dari <em>Debug</em> menjadi <em>Release</em>.</li>
        <li>Sertakan file SQLite awal pada direktori target instalasi.</li>
        <li>Gunakan tool Inno Setup atau Advanced Installer untuk menghasilkan file <code>Setup.exe</code> tunggal.</li>
      </ol>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Aplikasi yang hebat harus mudah dipasang oleh pengguna tanpa menuntut konfigurasi teknis yang membingungkan.</p>
      </div>
    `
  },

  // 46. PKKWU (Kelas 12)
  {
    id: 46,
    classLevel: 12,
    subject: "PKKWU",
    category: "Kewirausahaan",
    title: "Pitching Startup, Pendaftaran HKI & Go-To-Market",
    slug: "pitching-startup-hki-peluncuran-produk",
    description: "Seni presentasi pitch deck di hadapan investor, pendaftaran Hak Kekayaan Intelektual, serta strategi pemasaran produk digital.",
    tags: ["PKKWU", "Pitching", "HKI", "Startup"],
    readTime: "7 menit",
    date: "12 April 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Menyusun slide Pitch Deck 10 halaman (Problem, Solution, Traction, Market Size)</li>
          <li>Mempresentasikan keunggulan inovasi dalam durasi 3 menit (Elevator Pitch)</li>
          <li>Memahami prosedur pendaftaran hak cipta software ke Kemenkumham</li>
        </ul>
      </div>

      <h2>Struktur Pitch Deck Juara Lomba Vokasi</h2>
      <ul>
        <li><strong>Slide 1:</strong> Hook & Judul Produk.</li>
        <li><strong>Slide 2:</strong> Masalah nyata yang dialami pelanggan.</li>
        <li><strong>Slide 3:</strong> Solusi produk Anda yang unik dan terukur.</li>
        <li><strong>Slide 4:</strong> Demo produk (tangkapan layar UI aplikasi).</li>
        <li><strong>Slide 5:</strong> Model bisnis dan proyeksi keuntungan.</li>
      </ul>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Kemampuan komunikasi persuasif mengubah kode program siswa menjadi aset bisnis bernilai jutaan rupiah.</p>
      </div>
    `
  },

  // 47. Bahasa Inggris (Kelas 12)
  {
    id: 47,
    classLevel: 12,
    subject: "Bahasa Inggris",
    category: "Bahasa",
    title: "Job Interview Preparation & Technical Portfolio Presentation",
    slug: "job-interview-portfolio-presentation",
    description: "Simulasi wawancara kerja berbahasa Inggris untuk posisi software developer, menjawab pertanyaan behavioral, dan pitching portofolio.",
    tags: ["Bahasa Inggris", "Interview", "Karier", "Portofolio"],
    readTime: "7 menit",
    date: "14 April 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Menjawab pertanyaan pembuka: "Tell me about yourself" dengan teknik STAR</li>
          <li>Menjelaskan tantangan teknis dalam proyek portofolio dalam Bahasa Inggris</li>
        </ul>
      </div>

      <h2>Metode Menjawab STAR (Situation, Task, Action, Result)</h2>
      <div class="note-box note-box-info">
        <strong>Situation:</strong> In our school final project, the attendance database was slow.<br>
        <strong>Task:</strong> My task was to optimize the database query latency.<br>
        <strong>Action:</strong> I normalized the tables to 3NF and added indexes to primary search columns.<br>
        <strong>Result:</strong> As a result, page loading time decreased by 60%, and the system supported 500 concurrent users smoothly.
      </div>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Kombinasi portofolio nyata dan jawaban terstruktur mengantarkan lulusan SMK menembus perusahaan teknologi papan atas.</p>
      </div>
    `
  },

  // 48. Matematika (Kelas 12)
  {
    id: 48,
    classLevel: 12,
    subject: "Matematika",
    category: "Umum",
    title: "Kalkulus Dasar & Statistika Terapan Komputasi",
    slug: "kalkulus-dasar-statistik-terapan",
    description: "Konsep turunan fungsi, optimasi batas gradien, serta probabilitas yang mendasari algoritma kecerdasan buatan.",
    tags: ["Matematika", "Kalkulus", "Statistika", "Data"],
    readTime: "8 menit",
    date: "16 April 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Memahami konsep turunan fungsi aljabar sebagai laju perubahan sesaat</li>
          <li>Menghitung mean, median, dan standar deviasi pada kumpulan data</li>
          <li>Mengenal fungsi gradien descent dalam pelatihan model Machine Learning</li>
        </ul>
      </div>

      <h2>Penerapan di Era Artificial Intelligence</h2>
      <p>Model AI mempelajari pola dengan cara menghitung nilai error dan memperbaikinya menggunakan turunan parsial (Gradient Descent). Tanpa kalkulus dan statistika, teknologi pengenalan wajah dan chat AI tidak akan pernah ada.</p>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Matematika adalah fondasi terdalam dari seluruh kemajuan kecerdasan buatan modern di abad ke-21.</p>
      </div>
    `
  },

  // 49. PPKn (Kelas 12)
  {
    id: 49,
    classLevel: 12,
    subject: "PPKn",
    category: "Norma & Nilai",
    title: "Etika Siber & Regulasi Undang-Undang ITE",
    slug: "etika-siber-regulasi-uu-ite",
    description: "Batasan hukum ruang publik digital, penanganan kejahatan peretasan ilegal, dan tanggung jawab hukum pemilik sistem elektronik.",
    tags: ["PPKn", "UU ITE", "Cyber Law", "Keamanan"],
    readTime: "6 menit",
    date: "18 April 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Memahami pasal-pasal krusial UU ITE terkait akses ilegal (hacking) dan manipulasi data</li>
          <li>Mengetahui batasan ethical hacking (pengujian celah resmi dengan izin tertulis)</li>
        </ul>
      </div>

      <h2>Pasal Kunci Akses Ilegal</h2>
      <p>Pasal 30 UU ITE menegaskan bahwa setiap orang yang dengan sengaja dan tanpa hak mengakses sistem komputer milik orang lain dengan cara apa pun dapat dikenakan sanksi pidana penjara dan denda miliaran rupiah.</p>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Keahlian keamanan siber wajib digunakan untuk membentengi sistem negara, bukan untuk tindakan merugikan yang berujung pidana.</p>
      </div>
    `
  },

  // 50. Bahasa Indonesia (Kelas 12)
  {
    id: 50,
    classLevel: 12,
    subject: "Bahasa Indonesia",
    category: "Bahasa",
    title: "Surat Lamaran Kerja & Penyusunan CV ATS-Friendly",
    slug: "surat-lamaran-cv-ats-friendly",
    description: "Format penulisan Curriculum Vitae yang lolos pemindaian Applicant Tracking System (ATS) dan surat pengantar profesional.",
    tags: ["Bahasa Indonesia", "CV", "Surat Lamaran", "Karier"],
    readTime: "6 menit",
    date: "20 April 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Membuat CV format satu kolom teks bersih tanpa tabel grafik rumit yang membingungkan bot ATS</li>
          <li>Menyematkan kata kunci keahlian teknis (HTML, Laravel, MySQL, Flutter) secara terukur</li>
          <li>Menulis surat lamaran kerja resmi dengan tata bahasa baku</li>
        </ul>
      </div>

      <h2>Ciri-Ciri CV Standar ATS yang Efektif</h2>
      <ul>
        <li>Gunakan font standar yang mudah dibaca mesin (Arial, Calibri, Plus Jakarta Sans).</li>
        <li>Tuliskan pengalaman proyek kejuruan dengan angka pencapaian nyata (kuantitatif).</li>
        <li>Simpan dokumen dalam format PDF teks murni, bukan gambar scan JPEG.</li>
      </ul>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>CV yang terstruktur profesional adalah kunci pembuka pintu panggilan wawancara kerja pertama bagi lulusan baru SMK.</p>
      </div>
    `
  },

  // 51. PAI (Kelas 12)
  {
    id: 51,
    classLevel: 12,
    subject: "PAI",
    category: "Agama & Budi Pekerti",
    title: "Kepemimpinan Amanah & Integritas Profesional",
    slug: "kepemimpinan-integritas-profesional",
    description: "Karakter kepemimpinan yang melayani, etika kerja tim, serta komitmen menjaga kejujuran intelektual di industri.",
    tags: ["PAI", "Kepemimpinan", "Integritas", "Karakter"],
    readTime: "5 menit",
    date: "22 April 2026",
    featured: false,
    content: `
      <div class="learning-objectives-box">
        <h3>Tujuan Pembelajaran</h3>
        <ul>
          <li>Memahami konsep <em>Kullukum ra'in</em> (setiap insan adalah pemimpin yang bertanggung jawab)</li>
          <li>Menerapkan sikap keterbukaan, anti-korupsi, dan dedikasi profesional dalam pekerjaan</li>
        </ul>
      </div>

      <h2>Integritas di Tempat Kerja</h2>
      <p>Seorang profesional sejati tidak memanipulasi jam kerja, tidak menjual data rahasia klien, dan senantiasa menuntaskan tanggung jawab proyek dengan kualitas terbaik.</p>

      <div class="conclusion-box">
        <h3>Kesimpulan</h3>
        <p>Keberhasilan karier sejati bukan hanya diukur dari besarnya gaji, melainkan dari seberapa besar kebermanfaatan dan kejujuran karya yang ditinggalkan bagi umat manusia.</p>
      </div>
    `
  }
];

// Metadata kurikulum per kelas untuk navigasi dan katalog
const curriculumMetadata = {
  10: {
    title: "Kelas 10 SMK",
    subtitle: "Pondasi dan Pengenalan Disiplin Kejuruan",
    description: "Fase fundamental yang berfokus pada logika dasar, struktur algoritma, pembentukan pola pikir komputasional, serta mata pelajaran umum terapan.",
    subjects: [
      { name: "PIPAS", desc: "Projek Ilmu Pengetahuan Alam dan Sosial terapan" },
      { name: "Bahasa Inggris", desc: "Technical vocabulary dan reading comprehension dasar" },
      { name: "Matematika", desc: "Aljabar, fungsi kuadrat, dan logika numerik" },
      { name: "PPLG", subtopics: ["Web", "Python", "HTML", "CSS", "PHP", "Desktop"], desc: "Dasar kejuruan perangkat lunak dan pemrograman" },
      { name: "Seni Budaya", desc: "Estetika visual dan prinsip tata rupa digital" },
      { name: "PPKn", desc: "Pancasila dan etika bernegara di era keterbukaan" },
      { name: "Sejarah", desc: "Perkembangan industri dan peradaban Indonesia" },
      { name: "Bahasa Indonesia", desc: "Teks observasi, eksposisi, dan komunikasi tertulis" },
      { name: "PJOK", desc: "Kebugaran fisik dan ergonomi postur kerja" },
      { name: "PAI", desc: "Etika budi pekerti dan tanggung jawab personal" },
      { name: "Informatika", desc: "Berpikir komputasional dan literasi digital" }
    ]
  },
  11: {
    title: "Kelas 11 SMK",
    subtitle: "Pendalaman Framework & Aplikasi Nyata",
    description: "Fase akselerasi kompetensi: beralih ke arsitektur MVC, framework modern seperti Laravel & Flutter, serta pemahaman kewirausahaan produk digital.",
    subjects: [
      { name: "Bahasa Inggris", desc: "Komunikasi profesional, email teknis, dan dokumentasi" },
      { name: "Matematika", desc: "Matriks, transformasi geometri, dan probabilitas" },
      { name: "PPLG", subtopics: ["Web", "Framework", "CodeIgniter 3", "Laravel 12", "Desktop"], desc: "Pengembangan web skala menengah dan database terstruktur" },
      { name: "Pemrograman Mobile", subtopics: ["Flutter"], desc: "Pembangunan aplikasi Android & iOS lintas platform" },
      { name: "PKKWU", desc: "Produk Kreatif & Kewirausahaan rintisan digital" },
      { name: "PPKn", desc: "Sistem hukum, hak cipta software, dan UU privasi data" },
      { name: "Sejarah", desc: "Dinamika revolusi industri dan kemajuan teknologi" },
      { name: "Bahasa Indonesia", desc: "Penyusunan modul teks, laporan kerja, dan proposal" },
      { name: "PJOK", desc: "Kesehatan okupasi dan pencegahan cedera repetitif" },
      { name: "PAI", desc: "Muamalah bisnis syariah dan transaksi digital" }
    ]
  },
  12: {
    title: "Kelas 12 SMK",
    subtitle: "Spesialisasi Tingkat Lanjut & Kesiapan Industri",
    description: "Fase kematangan pra-kerja dan tugas akhir: Internet of Things (IoT), analisis sistem informasi, arsitektur API tingkat lanjut, serta portofolio profesional.",
    subjects: [
      { name: "PPLG", subtopics: ["Web", "IoT", "Sistem Informasi", "Desktop"], desc: "Telemetri ESP32, RESTful API, dan perancangan UML" },
      { name: "Pemrograman Mobile", subtopics: ["Flutter Advanced"], desc: "Arsitektur state management dan integrasi API jaringan" },
      { name: "PKKWU", desc: "Pitching startup, pendaftaran HKI, dan validasi pasar" },
      { name: "Bahasa Inggris", desc: "Persiapan interview kerja dan presentasi produk" },
      { name: "Matematika", desc: "Kalkulus pengantar dan statistik komputasi" },
      { name: "PPKn", desc: "Etika profesi siber dan regulasi UU ITE" },
      { name: "Bahasa Indonesia", desc: "Penyusunan CV ATS-friendly dan surat lamaran kerja" },
      { name: "PAI", desc: "Kepemimpinan amanah dan integritas profesional" }
    ]
  }
};

// Lampirkan ke objek global window jika berada di browser
if (typeof window !== 'undefined') {
  window.materials = materials;
  window.curriculumMetadata = curriculumMetadata;
}
