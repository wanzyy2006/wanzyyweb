# WanzyxXx Dev Studio & Script Store 🚀

Website profesional modern satu paket lengkap untuk penjualan jasa script & development SAMP, Roblox, dan Website.

## ✨ Fitur-Fitur:
- **Cyber Purple Glow & Animated Butterflies:** Background berpendar futuristik dengan kupu-kupu yang beterbangan halus.
- **3-Slide Showcase:** Portofolio foto interaktif untuk SAMP, Roblox Studio, dan Web Development.
- **Katalog Lengkap & Button Order:** Setiap jasa memiliki tombol aksi cepat.
- **2-Step Payment & Auto WhatsApp:**
  1. Customer mengisi form order & detail request script.
  2. Muncul barcode QRIS resmi toko beserta nominal tagihan & invoice unik.
  3. Tombol "SAYA SUDAH BAYAR" mengarahkan customer langsung ke WhatsApp Admin dengan draft pesan pesanan lengkap. Customer tinggal melampirkan foto struk/bukti transfernya!
- **100% Siap GitHub Pages & Custom Domain:** Tanpa backend server, gratis hosting selamanya.

---

## ⚙️ Cara Mengganti Pengaturan Anda:

### 1. Nomor WhatsApp Admin
Buka `js/app.js` pada baris ke-75:
```javascript
const ADMIN_WHATSAPP = "6281234567890"; // Ganti dengan nomor WhatsApp aktif Anda (awali dengan 62)
```

### 2. Barcode QRIS Toko Anda
Buka `index.html` pada baris ke-354, ganti link gambarnya dengan barcode QRIS Anda:
```html
<img src="https://link-gambar-qris-anda.png" alt="QRIS Pembayaran" class="w-48 h-48 mx-auto rounded-lg" />
```

---

## 🌐 Cara Pasang ke GitHub Pages (Gratis):
1. Buat repository baru di GitHub (misal: `wanzy-services`).
2. Upload semua file dari folder ini (`index.html`, folder `css`, folder `js`).
3. Masuk ke tab **Settings** -> pilih menu **Pages** di sebelah kiri.
4. Pada **Branch**, pilih `main` dan folder `/(root)`, lalu klik **Save**.
5. Tunggu 1–2 menit, website sudah online di `https://username.github.io/wanzy-services`.

## 🔗 Cara Menghubungkan ke Custom Domain Sendiri (.com / .id / .my.id):
1. Di menu **Pages** repository GitHub Anda, masukkan nama domain di kolom **Custom Domain** (contoh: `wanzydev.com`).
2. Buka panel DNS penyedia domain Anda:
   - Pasang record **CNAME**: Host `www` arahkan ke `username.github.io`.
   - Pasang record **A**: Host `@` arahkan ke IP GitHub:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
3. Centang **Enforce HTTPS**. Selesai!
