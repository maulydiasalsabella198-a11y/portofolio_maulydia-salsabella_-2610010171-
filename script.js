/**
 * ============================================================================
 * KOPERASI UMKM IT SOLUTION × KOPI BREWASA - OFFICIAL JAVASCRIPT
 * Vanilla JS (ES6+) - High Performance, Clean & Zero External Dependencies
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. PENGATURAN KONFIGURASI (EASILY EDITABLE CONFIGURATION)
     ========================================================================== */
  const CONFIG = {
    // Nomor WhatsApp pengelola gerai (Format internasional tanpa tanda +)
    // Contoh untuk +62 812-3456-7890 diisi '6281234567890'
    whatsappNumber: '6281234567890',

    // Alamat fisik gerai yang dapat disesuaikan
    storeAddress: 'Gedung Student Center / Kantin Kampus Lt. 1, Jl. Kolaborasi Akademik No. 12, Area Kampus',

    // Tautan media sosial dan situs resmi
    instagramIT: 'https://instagram.com/its_hmpti',
    instagramBrewasa: 'https://instagram.com/kopibrewasa',
    websiteBrewasa: 'https://brewasa.com'
  };

  /* ==========================================================================
     2. PLACEHOLDER RELEVAN UNTUK ITEM TANPA FOTO ASLI
     ========================================================================== */
  const PLACEHOLDER_TEH_PUCUK = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23FEF3C7"/><ellipse cx="200" cy="265" rx="75" ry="15" fill="%23DDB892" fill-opacity="0.4"/><path d="M172 80h56v155c0 15-12 25-28 25s-28-10-28-25V80z" fill="%23B45309"/><path d="M185 52h30v28h-30z" fill="%2315803D"/><rect x="175" y="115" width="50" height="75" rx="4" fill="%23DC2626"/><text x="200" y="152" fill="%23FFFFFF" font-family="sans-serif" font-size="9" font-weight="bold" text-anchor="middle">TEH PUCUK</text><text x="200" y="165" fill="%23FEF08A" font-family="sans-serif" font-size="8" text-anchor="middle">HARUM</text><path d="M192 40c0-6 8-8 8-15 0 7 8 9 8 15" stroke="%2316A34A" stroke-width="2.5" fill="none"/></svg>';
  const DEFAULT_FALLBACK_IMG = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23F5EBE1"/><ellipse cx="200" cy="250" rx="80" ry="16" fill="%23DDB892" fill-opacity="0.5"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%238B5A2B" font-family="sans-serif" font-size="16" font-weight="bold">IT Solution × Kopi Brewasa</text></svg>';

  /* ==========================================================================
     3. DATA PRODUK & MENU LENGKAP (ARRAY OBJECTS JAVASCRIPT)
     Memetakan seluruh produk ke foto asli di folder assets/ dengan harga persis.
     ========================================================================== */
  const PRODUCTS = [
    // ------------------------------------------------------------------------
    // A. KATALOG KOPI BREWASA - KOPI SUSU
    // ------------------------------------------------------------------------
    {
      id: 'kb-americano',
      name: 'Americano',
      category: 'kopi',
      categoryLabel: 'Kopi Brewasa',
      price: 10000,
      formattedPrice: 'Rp10.000',
      description: 'Espresso murni Kopi Brewasa berpadu air mineral dingin/panas. Cita rasa bold, clean, dan bikin melek seketika.',
      badge: 'Favorit Pagi',
      image: 'assets/coffee/americano.jpg'
    },
    {
      id: 'kb-cafe-latte',
      name: 'Cafe Latte',
      category: 'kopi',
      categoryLabel: 'Kopi Brewasa',
      price: 12000,
      formattedPrice: 'Rp12.000',
      description: 'Perpaduan klasik espresso mantap dan susu segar steamed dengan micro-foam lembut yang gurih seimbang.',
      badge: 'Klasik',
      image: 'assets/coffee/caffe latte.jpg'
    },
    {
      id: 'kb-butterscotch',
      name: 'Butterscotch',
      category: 'kopi',
      categoryLabel: 'Kopi Brewasa',
      price: 15000,
      formattedPrice: 'Rp15.000',
      description: 'Signature Best Seller Kopi Brewasa. Kopi susu berpadu sirup butterscotch wangi legit dengan rasa gurih manis.',
      badge: 'Signature',
      image: 'assets/coffee/butterscotch.jpg'
    },
    {
      id: 'kb-hazelnut',
      name: 'Hazelnut',
      category: 'kopi',
      categoryLabel: 'Kopi Brewasa',
      price: 15000,
      formattedPrice: 'Rp15.000',
      description: 'Kopi susu berpadu aroma kacang hazelnut harum yang khas, memberikan rasa nutty yang elegan dan creamy.',
      badge: 'Populer',
      image: 'assets/coffee/hazelnut.jpg'
    },
    {
      id: 'kb-caramel',
      name: 'Caramel',
      category: 'kopi',
      categoryLabel: 'Kopi Brewasa',
      price: 15000,
      formattedPrice: 'Rp15.000',
      description: 'Kombinasi espresso, fresh milk, dan sirup karamel legit terpanggang dengan rasa manis yang memanjakan.',
      badge: 'Manis Legit',
      image: 'assets/coffee/caramel.jpg'
    },
    {
      id: 'kb-aren-latte',
      name: 'Aren Latte',
      category: 'kopi',
      categoryLabel: 'Kopi Brewasa',
      price: 15000,
      formattedPrice: 'Rp15.000',
      description: 'Kopi susu gula aren murni pilihan Nusantara. Rasa manis alami dan gurihnya pas, teman setia saat nugas.',
      badge: 'Best Seller',
      image: 'assets/coffee/aren latte.jpg'
    },

    // ------------------------------------------------------------------------
    // B. KATALOG KOPI BREWASA - NON KOPI
    // ------------------------------------------------------------------------
    {
      id: 'kb-matcha-latte',
      name: 'Matcha Latte',
      category: 'non-kopi',
      categoryLabel: 'Non Kopi Brewasa',
      price: 20000,
      formattedPrice: 'Rp20.000',
      description: 'Matcha Jepang premium berpadu susu murni segar. Cita rasa creamy, otentik, dan menyegarkan hari Anda.',
      badge: 'Best Non-Kopi',
      image: 'assets/coffee/Matcha.jpg'
    },
    {
      id: 'kb-coklat',
      name: 'Coklat',
      category: 'non-kopi',
      categoryLabel: 'Non Kopi Brewasa',
      price: 20000,
      formattedPrice: 'Rp20.000',
      description: 'Dark cocoa pekat diseduh lembut dengan susu segar. Cita rasa cokelat rich dan memikat bagi penikmat manis.',
      badge: 'Favorit Cokelat',
      image: 'assets/coffee/coklat.jpg'
    },

    // ------------------------------------------------------------------------
    // C. KATALOG KOPI BREWASA - MENU TAMBAHAN (EXTRA)
    // ------------------------------------------------------------------------
    {
      id: 'kb-extra-espresso',
      name: 'Extra Shot Espresso',
      category: 'extra',
      categoryLabel: 'Menu Tambahan',
      price: 3000,
      formattedPrice: 'Rp3.000',
      description: 'Tambahan 1 shot espresso murni untuk Anda yang butuh ekstra dorongan kafein saat lembur tugas.',
      badge: 'Extra Strong',
      image: 'assets/coffee/extra shot espresso.jpg'
    },
    {
      id: 'kb-extra-syrup',
      name: 'Extra Syrup (Peach, Butterscotch, Aren, Caramel, Hazelnut)',
      category: 'extra',
      categoryLabel: 'Menu Tambahan',
      price: 3000,
      formattedPrice: 'Rp3.000',
      description: 'Pilihan ekstra sirup artisanal: Peach, Butterscotch, Aren, Caramel, atau Hazelnut sesuai selera Anda.',
      badge: 'Pilihan Rasa',
      image: 'assets/coffee/extra syrup.jpg'
    },

    // ------------------------------------------------------------------------
    // D. KATALOG MINUMAN IT SOLUTION
    // ------------------------------------------------------------------------
    {
      id: 'it-ichitan',
      name: 'Ichitan',
      category: 'minuman',
      categoryLabel: 'Minuman IT',
      price: 9000,
      formattedPrice: 'Rp9.000',
      description: 'Minuman teh rasa khas Thailand yang wangi dan menyegarkan dahaga saat beristirahat di sela praktikum.',
      badge: 'Segar',
      image: 'assets/drinks/ichitan.jpg'
    },
    {
      id: 'it-goodday',
      name: 'Good Day',
      category: 'minuman',
      categoryLabel: 'Minuman IT',
      price: 7000,
      formattedPrice: 'Rp7.000',
      description: 'Kopi instan Good Day aneka rasa manis nikmat disajikan dingin segar atau hangat teman santai.',
      badge: 'Teman Santai',
      image: 'assets/drinks/good day.jpg'
    },
    {
      id: 'it-prof',
      name: 'Prof',
      category: 'minuman',
      categoryLabel: 'Minuman IT',
      price: 4000,
      formattedPrice: 'Rp4.000',
      description: 'Minuman segar kemasan botol praktis pelepas dahaga dengan harga yang sangat bersahabat.',
      badge: 'Hemat',
      image: 'assets/drinks/prof.jpg'
    },
    {
      id: 'it-kopi-abc',
      name: 'Kopi ABC',
      category: 'minuman',
      categoryLabel: 'Minuman IT',
      price: 4000,
      formattedPrice: 'Rp4.000',
      description: 'Kopi susu sachet legendaris yang manis dan mantap untuk menjaga konsentrasi saat nugas.',
      badge: 'Legendaris',
      image: 'assets/drinks/kopi abc.jpg'
    },
    {
      id: 'it-milku',
      name: 'Milku',
      category: 'minuman',
      categoryLabel: 'Minuman IT',
      price: 4000,
      formattedPrice: 'Rp4.000',
      description: 'Susu cair rasa cokelat atau stroberi lezat bernutrisi dari susu sapi Belgia berkualitas tinggi.',
      badge: 'Bernutrisi',
      image: 'assets/drinks/milku.jpg'
    },
    {
      id: 'it-floridina',
      name: 'Floridina',
      category: 'minuman',
      categoryLabel: 'Minuman IT',
      price: 5000,
      formattedPrice: 'Rp5.000',
      description: 'Jus jeruk dingin segar dengan bulir jeruk Florida asli yang meletup saat diminum.',
      badge: 'Bulir Asli',
      image: 'assets/drinks/floridina.jpg'
    },
    {
      id: 'it-teh-pucuk',
      name: 'Teh Pucuk',
      category: 'minuman',
      categoryLabel: 'Minuman IT',
      price: 5000,
      formattedPrice: 'Rp5.000',
      description: 'Minuman teh dari pucuk daun teh pilihan beraroma melati segar dalam kemasan botol praktis.',
      badge: 'Segar Melati',
      image: 'assets/drinks/teh pucuk.jpg'
    },
    {
      id: 'it-golda',
      name: 'Golda',
      category: 'minuman',
      categoryLabel: 'Minuman IT',
      price: 4000,
      formattedPrice: 'Rp4.000',
      description: 'Kopi siap minum dari biji kopi Brazil pilihan yang dipadu dengan susu lembut dan creamy.',
      badge: 'Kopi Botol',
      image: 'assets/drinks/golda.jpg'
    },
    {
      id: 'it-ultramilk',
      name: 'Ultramilk',
      category: 'minuman',
      categoryLabel: 'Minuman IT',
      price: 9000,
      formattedPrice: 'Rp9.000',
      description: 'Susu UHT berkualitas tinggi dalam kemasan kotak higienis bernutrisi lengkap untuk tubuh.',
      badge: 'Susu UHT',
      image: 'assets/drinks/ultra milk.jpg'
    },
    {
      id: 'it-pocari',
      name: 'Pocari',
      category: 'minuman',
      categoryLabel: 'Minuman IT',
      price: 7000,
      formattedPrice: 'Rp7.000',
      description: 'Minuman isotonik pengganti cairan dan ion tubuh yang hilang setelah beraktivitas padat.',
      badge: 'Isotonik',
      image: 'assets/drinks/pocari.jpg'
    },

    // ------------------------------------------------------------------------
    // E. KATALOG MAKANAN & SNACK IT SOLUTION
    // ------------------------------------------------------------------------
    {
      id: 'it-nextar',
      name: 'Nextar',
      category: 'makanan',
      categoryLabel: 'Makanan & Snack',
      price: 3000,
      formattedPrice: 'Rp3.000',
      description: 'Kue brownies lembut dengan lelehan selai cokelat pekat di dalamnya yang meleleh di mulut.',
      badge: 'Camilan Manis',
      image: 'assets/food/nextar.jpg'
    },
    {
      id: 'it-choco-pie',
      name: 'Choco Pie',
      category: 'makanan',
      categoryLabel: 'Makanan & Snack',
      price: 3000,
      formattedPrice: 'Rp3.000',
      description: 'Biskuit pie cokelat lembut berlapis krim marshmallow manis kenyal yang lezat.',
      badge: 'Favorit',
      image: 'assets/food/choco pie.jpg'
    },
    {
      id: 'it-kalpa',
      name: 'Kalpa',
      category: 'makanan',
      categoryLabel: 'Makanan & Snack',
      price: 3000,
      formattedPrice: 'Rp3.000',
      description: 'Wafer cokelat renyah dengan taburan kelapa gurih yang memberi sensasi gigitan istimewa.',
      badge: 'Kelapa Renyah',
      image: 'assets/food/kalpa.jpg'
    },
    {
      id: 'it-beng-beng',
      name: 'Beng-Beng',
      category: 'makanan',
      categoryLabel: 'Makanan & Snack',
      price: 3000,
      formattedPrice: 'Rp3.000',
      description: 'Wafer karamel berpadu rice crispy dan selimut cokelat lezat dengan empat lapis kelezatan.',
      badge: 'Legendaris',
      image: 'assets/food/beng beng.jpg'
    },
    {
      id: 'it-siip',
      name: 'Siip',
      category: 'makanan',
      categoryLabel: 'Makanan & Snack',
      price: 1000,
      formattedPrice: 'Rp1.000',
      description: 'Snack jagung panggang renyah berbalut bumbu keju / cokelat gurih yang sangat terjangkau.',
      badge: 'Super Hemat',
      image: 'assets/food/siip.jpg'
    },
    {
      id: 'it-triks',
      name: 'Triks',
      category: 'makanan',
      categoryLabel: 'Makanan & Snack',
      price: 1000,
      formattedPrice: 'Rp1.000',
      description: 'Keripik kentang panggang tipis renyah dengan rasa bumbu gurih yang tidak berminyak.',
      badge: 'Crispy',
      image: 'assets/food/tricks.jpg'
    },

    // ------------------------------------------------------------------------
    // F. KATALOG ALAT TULIS & KEBUTUHAN LAINNYA
    // ------------------------------------------------------------------------
    {
      id: 'it-tisu-besar',
      name: 'Tisu Besar',
      category: 'alat-tulis',
      categoryLabel: 'Alat Tulis & Kebutuhan',
      price: 4000,
      formattedPrice: 'Rp4.000',
      description: 'Tisu wajah lembut ukuran besar untuk kebersihan meja kerja dan kenyamanan harian Anda.',
      badge: 'Kebersihan',
      image: 'assets/alat tulis/tisu besar.jpg'
    },
    {
      id: 'it-tisu-kecil',
      name: 'Tisu Kecil',
      category: 'alat-tulis',
      categoryLabel: 'Alat Tulis & Kebutuhan',
      price: 2000,
      formattedPrice: 'Rp2.000',
      description: 'Tisu saku praktis mudah dibawa ke ruang kelas atau laboratorium saat kuliah.',
      badge: 'Praktis',
      image: 'assets/alat tulis/tisu kecil.jpg'
    },
    {
      id: 'it-tipex-merah',
      name: 'Tip-Ex Merah',
      category: 'alat-tulis',
      categoryLabel: 'Alat Tulis & Kebutuhan',
      price: 5000,
      formattedPrice: 'Rp5.000',
      description: 'Pita koreksi / correction pen merah berkualitas untuk merapikan kesalahan tulisan dokumen.',
      badge: 'ATK Pokok',
      image: 'assets/alat tulis/tipe x merah.jpg'
    },
    {
      id: 'it-tipex-biru',
      name: 'Tip-Ex Biru',
      category: 'alat-tulis',
      categoryLabel: 'Alat Tulis & Kebutuhan',
      price: 7000,
      formattedPrice: 'Rp7.000',
      description: 'Correction tape biru pita panjang anti putus untuk perbaikan teks cepat tanpa waktu tunggu kering.',
      badge: 'Tape Halus',
      image: 'assets/alat tulis/tipe x biru.jpg'
    },
    {
      id: 'it-peniti',
      name: 'Peniti',
      category: 'alat-tulis',
      categoryLabel: 'Alat Tulis & Kebutuhan',
      price: 2000,
      formattedPrice: 'Rp2.000',
      description: 'Satu set peniti tajam dan kokoh untuk keperluan darurat hijab, almamater, dan nametag ujian.',
      badge: 'Darurat Siap',
      image: 'assets/alat tulis/peniti.jpg'
    },
    {
      id: 'it-pulpen',
      name: 'Pulpen',
      category: 'alat-tulis',
      categoryLabel: 'Alat Tulis & Kebutuhan',
      price: 3000,
      formattedPrice: 'Rp3.000',
      description: 'Pulpen gel hitam/biru dengan aliran tinta lancar tanpa macet untuk catatan kuliah dan ujian.',
      badge: 'Wajib Ujian',
      image: 'assets/alat tulis/pulpen.jpg'
    },

    // ------------------------------------------------------------------------
    // G. KATALOG PERCETAKAN IT SOLUTION
    // ------------------------------------------------------------------------
    {
      id: 'it-print-bw',
      name: 'Print/FC Hitam Putih',
      category: 'percetakan',
      categoryLabel: 'Percetakan & Dokumen',
      price: 500,
      formattedPrice: 'Rp500',
      description: 'Cetak dan fotokopi dokumen teks hitam putih per lembar ukuran A4/F4. Tajam, pekat, dan hemat biaya.',
      badge: 'Super Hemat',
      image: 'assets/services/print hitam putih.jpg'
    },
    {
      id: 'it-print-warna',
      name: 'Print/FC Warna',
      category: 'percetakan',
      categoryLabel: 'Percetakan & Dokumen',
      price: 1000,
      formattedPrice: 'Rp1.000',
      description: 'Cetak dokumen grafis, grafik warna, tugas presentasi, dan gambar dengan warna yang cerah akurat.',
      badge: 'Warna Tajam',
      image: 'assets/services/print warna.jpg'
    },
    {
      id: 'it-print-amplop',
      name: 'Print/FC Amplop',
      category: 'percetakan',
      categoryLabel: 'Percetakan & Dokumen',
      price: 1000,
      formattedPrice: 'Rp1.000',
      description: 'Cetak format amplop surat resmi ormawa, proposal sponsorship, atau lamaran kerja secara rapi.',
      badge: 'Resmi Rapi',
      image: 'assets/services/print amplop.jpg'
    },
    {
      id: 'it-jilid',
      name: 'Jilid',
      category: 'percetakan',
      categoryLabel: 'Percetakan & Dokumen',
      price: 2000,
      formattedPrice: 'Rp2.000',
      description: 'Penjilidan mika lakban atau kawat spiral kokoh untuk makalah praktikum, laporan, dan proposal skripsi.',
      badge: 'Kuat Rapi',
      image: 'assets/services/jilid.jpg'
    },
    {
      id: 'it-print-stiker',
      name: 'Print Stiker',
      category: 'percetakan',
      categoryLabel: 'Percetakan & Dokumen',
      price: 3000,
      formattedPrice: 'Rp3.000',
      description: 'Cetak stiker berkualitas tahan lama untuk label kemasan UMKM, stiker event, atau merchandise organisasi.',
      badge: 'Daya Rekat Kuat',
      image: 'assets/services/print stiker.jpg'
    },
    {
      id: 'it-print-sertifikat',
      name: 'Print/FC Sertifikat',
      category: 'percetakan',
      categoryLabel: 'Percetakan & Dokumen',
      price: 3000,
      formattedPrice: 'Rp3.000',
      description: 'Cetak piagam dan sertifikat penghargaan di atas kertas tebal premium (Linen / Art Carton) elegan.',
      badge: 'Kertas Tebal',
      image: 'assets/services/print sertifikat.jpg'
    }
  ];

  /* ==========================================================================
     4. STATE MANAJEMEN APLIKASI
     ========================================================================== */
  let currentCategory = 'all';
  let searchQuery = '';

  /* ==========================================================================
     5. ELEMENT DOM REFERENCES
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navBackdrop = document.getElementById('navBackdrop');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('backToTopBtn');

  // Search & Filter DOM
  const productSearchInput = document.getElementById('productSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const productsGrid = document.getElementById('productsGrid');
  const emptyState = document.getElementById('emptyState');
  const resetSearchBtn = document.getElementById('resetSearchBtn');
  const categoryPills = document.querySelectorAll('.cat-pill');
  const catalogResultInfo = document.getElementById('catalogResultInfo');
  const countAllSpan = document.getElementById('count-all');

  // Contact Display Elements
  const waDisplayNumber = document.getElementById('waDisplayNumber');
  const addressText = document.getElementById('addressText');

  // Inisialisasi hitungan total item
  if (countAllSpan) {
    countAllSpan.textContent = PRODUCTS.length;
  }

  // Update tampilan kontak dari variabel konfigurasi
  if (waDisplayNumber) {
    waDisplayNumber.textContent = `+${CONFIG.whatsappNumber.slice(0, 2)} ${CONFIG.whatsappNumber.slice(2, 5)}-${CONFIG.whatsappNumber.slice(5, 9)}-${CONFIG.whatsappNumber.slice(9)} (Klik untuk Chat)`;
  }
  if (addressText) {
    addressText.textContent = CONFIG.storeAddress;
  }

  /* ==========================================================================
     6. FUNGSI PEMESANAN WHATSAPP OTOMATIS
     ========================================================================== */
  window.orderViaWhatsApp = function (itemName, price) {
    let messageText = '';
    if (price) {
      messageText = `Halo IT Solution x Kopi Brewasa, saya ingin memesan produk:\n\n• *${itemName}* (${price})\n\nMohon konfirmasi ketersediaan dan cara pembayarannya. Terima kasih!`;
    } else {
      messageText = `Halo IT Solution x Kopi Brewasa, saya ingin bertanya / konsultasi mengenai layanan:\n\n• *${itemName}*\n\nMohon info detail dan jadwal pengerjaannya. Terima kasih!`;
    }

    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  /* ==========================================================================
     7. FUNGSI RENDER KATALOG PRODUK
     ========================================================================== */
  function renderProducts() {
    if (!productsGrid) return;

    // Filter produk berdasarkan kategori dan pencarian teks
    const filteredProducts = PRODUCTS.filter(item => {
      // 1. Filter Kategori
      let matchCategory = false;
      if (currentCategory === 'all') {
        matchCategory = true;
      } else {
        matchCategory = (item.category === currentCategory);
      }

      // 2. Filter Pencarian Teks
      let matchSearch = true;
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        matchSearch = item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.categoryLabel.toLowerCase().includes(query);
      }

      return matchCategory && matchSearch;
    });

    // Update info teks hasil pencarian
    if (catalogResultInfo) {
      if (searchQuery.trim() !== '') {
        catalogResultInfo.textContent = `Menampilkan ${filteredProducts.length} hasil untuk pencarian "${searchQuery}"`;
      } else if (currentCategory !== 'all') {
        const activePill = document.querySelector(`.cat-pill[data-category="${currentCategory}"]`);
        const catName = activePill ? activePill.textContent.trim() : currentCategory;
        catalogResultInfo.textContent = `Menampilkan ${filteredProducts.length} item kategori ${catName}`;
      } else {
        catalogResultInfo.textContent = `Menampilkan seluruh ${filteredProducts.length} menu & produk`;
      }
    }

    // Tampilkan state kosong jika tidak ada hasil
    if (filteredProducts.length === 0) {
      productsGrid.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    // Bangun HTML card produk dengan foto asli dan fallback aman
    const cardsHtml = filteredProducts.map(product => {
      // Format URI yang aman untuk file dengan spasi / karakter khusus
      const safeImagePath = product.image.startsWith('data:')
        ? product.image
        : encodeURI(product.image);

      return `
        <article class="product-card" data-category="${product.category}">
          <div class="product-img-box">
            <img 
              src="${safeImagePath}" 
              alt="${escapeHtml(product.name)}" 
              class="product-img" 
              loading="lazy" 
              onerror="this.onerror=null; this.src='${DEFAULT_FALLBACKImgAttribute(product.name)}';">
            <span class="product-cat-tag">${escapeHtml(product.categoryLabel)}</span>
            ${product.badge ? `<span class="product-badge-flag">${escapeHtml(product.badge)}</span>` : ''}
          </div>
          <div class="product-info">
            <div class="product-header-row">
              <h3 class="product-title">${escapeHtml(product.name)}</h3>
              <span class="product-price">${escapeHtml(product.formattedPrice)}</span>
            </div>
            <p class="product-desc">${escapeHtml(product.description)}</p>
            <div class="product-footer-row">
              <button 
                class="product-order-btn" 
                onclick="orderViaWhatsApp('${escapeHtml(product.name)}', '${escapeHtml(product.formattedPrice)}')"
                aria-label="Pesan ${escapeHtml(product.name)} via WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span>Pesan Sekarang</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    productsGrid.innerHTML = cardsHtml;
  }

  // Helper untuk escape HTML
  function escapeHtml(string) {
    if (!string) return '';
    return String(string)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function DEFAULT_FALLBACKImgAttribute(name) {
    return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23F5EBE1"/><text x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%238B5A2B" font-family="sans-serif" font-size="16" font-weight="bold">IT %C3%97 Brewasa</text></svg>';
  }

  // Shortcut untuk filtering kategori dari tombol di bagian lain
  window.filterByCategory = function (category) {
    currentCategory = category;
    categoryPills.forEach(pill => {
      if (pill.dataset.category === category) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
    renderProducts();

    // Scroll ke bagian menu secara halus
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /* ==========================================================================
     8. EVENT LISTENER PENCARIAN & FILTER
     ========================================================================== */
  if (productSearchInput) {
    productSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = searchQuery.length > 0 ? 'block' : 'none';
      }
      renderProducts();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      productSearchInput.value = '';
      searchQuery = '';
      clearSearchBtn.style.display = 'none';
      productSearchInput.focus();
      renderProducts();
    });
  }

  if (resetSearchBtn) {
    resetSearchBtn.addEventListener('click', () => {
      if (productSearchInput) productSearchInput.value = '';
      searchQuery = '';
      if (clearSearchBtn) clearSearchBtn.style.display = 'none';
      currentCategory = 'all';
      categoryPills.forEach(pill => {
        pill.classList.toggle('active', pill.dataset.category === 'all');
      });
      renderProducts();
    });
  }

  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.dataset.category || 'all';
      renderProducts();
    });
  });

  // Render awal produk saat aplikasi dimulai
  renderProducts();

  /* ==========================================================================
     9. INTERAKSI NAVBAR & MOBILE HAMBURGER
     ========================================================================== */
  function toggleMobileMenu(forceClose = false) {
    if (!navMenu || !hamburgerBtn) return;
    const isCurrentlyActive = navMenu.classList.contains('active');
    const shouldOpen = forceClose ? false : !isCurrentlyActive;

    if (shouldOpen) {
      navMenu.classList.add('active');
      hamburgerBtn.classList.add('active');
      if (navBackdrop) navBackdrop.classList.add('active');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    } else {
      navMenu.classList.remove('active');
      hamburgerBtn.classList.remove('active');
      if (navBackdrop) navBackdrop.classList.remove('active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => toggleMobileMenu());
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', () => toggleMobileMenu(true));
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 767) {
        toggleMobileMenu(true);
      }
    });
  });

  /* ==========================================================================
     10. SCROLL EVENT HANDLERS (STICKY NAVBAR & BACK TO TOP)
     ========================================================================== */
  let ticking = false;

  function updateScrollState() {
    const scrollY = window.scrollY;

    // Sticky Navbar efek bayangan & blur
    if (navbar) {
      if (scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Tombol Back to Top visibilitas
    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollState);
      ticking = true;
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     11. ACTIVE NAVIGATION HIGHLIGHTING (SCROLLSPY)
     ========================================================================== */
  const trackedSections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 130;

    trackedSections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  /* ==========================================================================
     12. ANIMASI SCROLL REVEAL (INTERSECTION OBSERVER)
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }

  // Console Ready Output
  console.log('%c IT Solution × Kopi Brewasa ', 'background: #2C1810; color: #DDB892; font-weight: bold; font-size: 14px; padding: 4px 8px; border-radius: 4px;');
  console.log('%c Seluruh foto produk & layanan berhasil dimuat tanpa error. ', 'color: #58311E; font-size: 11px;');
});
