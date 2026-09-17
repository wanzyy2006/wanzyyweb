// WanzyxXx Dev Studio - Sociabuzz & WA Flow
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }
  initSlider();
});

// Slider Controller
let currentSlideIndex = 0;
let slideInterval;

function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot-btn');
  if (!slides.length) return;

  function updateSlide(index) {
    slides.forEach((slide, idx) => {
      if (idx === index) {
        slide.classList.remove('inactive');
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
        slide.classList.add('inactive');
      }
    });

    dots.forEach((dot, idx) => {
      if (idx === index) {
        dot.className = 'dot-btn w-8 h-2 rounded-full bg-purple-400 transition-all duration-300';
      } else {
        dot.className = 'dot-btn w-3 h-2 rounded-full bg-purple-950/80 border border-purple-800 transition-all duration-300';
      }
    });
    currentSlideIndex = index;
  }

  window.nextSlide = function() {
    let next = (currentSlideIndex + 1) % slides.length;
    updateSlide(next);
  };

  window.prevSlide = function() {
    let prev = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlide(prev);
  };

  window.goToSlide = function(idx) {
    updateSlide(idx);
    resetAutoSlide();
  };

  function resetAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = setInterval(window.nextSlide, 5500);
  }

  slideInterval = setInterval(window.nextSlide, 5500);
}

// Harga Layanan
const servicePrices = {
  'SAMP - Gamemode & Pawn Scripting': 'Rp 150.000',
  'SAMP - Custom Mapping & Textdraw': 'Rp 100.000',
  'SAMP - Full Server Setup + AntiCheat': 'Rp 250.000',
  'Roblox - Custom Lua Script & Mechanics': 'Rp 150.000',
  'Roblox - Simulator / Tycoon / RPG Full Game': 'Rp 450.000',
  'Roblox - Custom GUI & Monetization Gamepass': 'Rp 120.000',
  'Web - Landing Page & Portofolio Ready GitHub': 'Rp 180.000',
  'Web - Topup / Jasa Web Store + Domain Sendiri': 'Rp 300.000',
  'Web - Full Custom Script & Dashboard': 'Rp 400.000'
};

// =========================================================================
// 1. GANTI DENGAN USERNAME / LINK SOCIABUZZ ANDA
// Misal link SociaBuzz Anda https://sociabuzz.com/wanzyx/tribe -> isi "wanzyx"
// =========================================================================
const SOCIABUZZ_USERNAME = "https://sociabuzz.com/wanzzyx_2006/tribe"; 

// =========================================================================
// 2. GANTI DENGAN NOMOR WHATSAPP ANDA (Awali 62 tanpa tanda +)
// =========================================================================
const ADMIN_WHATSAPP = "6285230379626";

let currentOrder = {};

const orderModal = document.getElementById('orderModal');
const step1 = document.getElementById('modalStep1');
const step2 = document.getElementById('modalStep2');

window.openOrderModal = function(serviceName) {
  document.getElementById('serviceField').value = serviceName;
  document.getElementById('priceField').value = servicePrices[serviceName] || 'Custom';
  
  step1.classList.remove('hidden');
  step2.classList.add('hidden');
  
  orderModal.classList.remove('hidden');
  orderModal.classList.add('flex');
};

window.closeOrderModal = function() {
  orderModal.classList.add('hidden');
  orderModal.classList.remove('flex');
};

window.backToStep1 = function() {
  step2.classList.add('hidden');
  step1.classList.remove('hidden');
};

// Step 1: User isi form -> Pindah ke Step 2 (SociaBuzz & WhatsApp Confirmation)
window.handleProcessToPayment = function(event) {
  event.preventDefault();
  
  const invoiceId = 'SBZ-' + Math.floor(100000 + Math.random() * 900000);
  
  currentOrder = {
    invoice: invoiceId,
    name: document.getElementById('custName').value.trim(),
    contact: document.getElementById('custContact').value.trim(),
    service: document.getElementById('serviceField').value,
    price: document.getElementById('priceField').value,
    notes: document.getElementById('custNotes').value.trim() || 'Tidak ada catatan khusus'
  };

  document.getElementById('displayInvoice').innerText = currentOrder.invoice;
  document.getElementById('displayCustomer').innerText = currentOrder.name;
  document.getElementById('displayService').innerText = currentOrder.service;
  document.getElementById('displayPrice').innerText = currentOrder.price;

  step1.classList.add('hidden');
  step2.classList.remove('hidden');
};

// Buka Halaman Bayar SociaBuzz (QRIS / Gopay / OVO / Dana / VA)
window.openSociaBuzzPayment = function() {
  const sociabuzzUrl = `https://sociabuzz.com/wanzzyx_2006/tribe`;
  window.open(sociabuzzUrl, '_blank');
};

// Step 2: Kirim konfirmasi & bukti ke WhatsApp Admin
window.sendConfirmationToWhatsApp = function() {
  const msg = 
`*KONFIRMASI PEMBAYARAN VIA SOCIABUZZ* 🚀
Halo Admin WanzyxXx Dev Studio, saya sudah membayar via SociaBuzz!

📋 *No. Invoice:* ${currentOrder.invoice}
👤 *Nama Customer:* ${currentOrder.name}
📱 *Kontak (WA/Discord):* ${currentOrder.contact}
🛠 *Layanan / Script:* ${currentOrder.service}
💰 *Total Tagihan:* ${currentOrder.price}
💳 *Payment:* SociaBuzz (QRIS / E-Wallet / Bank)
📝 *Detail Request:* ${currentOrder.notes}

*(Foto bukti pembayaran SociaBuzz saya lampirkan di chat ini. Mohon dicek dan dikonfirmasi)* 🙏`;

  const waUrl = `https://api.whatsapp.com/send?phone=${ADMIN_WHATSAPP}&text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
  
  closeOrderModal();
};

window.addEventListener('click', (e) => {
  if (e.target === orderModal) {
    closeOrderModal();
  }
});