import React, { useState } from 'react';
import './App.css';

// Import Logo & File Gambar dari src/assets/
import logoImg from './assets/file_00000000c31c820b800f00b4a563bd9b.png';
import brioImg from './assets/brio.png';
import avanzaImg from './assets/avanza-new.png';
import velozImg from './assets/Veloz.png';
import calyaImg from './assets/calya.png';
import sigraImg from './assets/sigra.png';
import rebornImg from './assets/innova-reborn.png';
import fortunerImg from './assets/fortuner.png';
import innovaZenixImg from './assets/innova-zenix.png';
import hiacePremioImg from './assets/hiace-premio.png';
import hiaceCommuterImg from './assets/hiace-commuter.png';
import raizeImg from './assets/raize.png';
import hiluxImg from './assets/hilux.png';
import heroCarImg from './assets/hero-car.png';
import aboutCarImg from './assets/about-car.png';

// NOMOR WHATSAPP TARGET SESUAI PERMINTAAN (6289676920558)
const TARGET_WHATSAPP_NUMBER = '6289676920558';

// DATA KENDARAAN (Persis 12 Unit Sesuai Referensi Grid)
const carData = [
  { id: 1, name: 'Honda Brio', image: brioImg, price: 'Rp 300.000/Hari', status: 'Start' },
  { id: 2, name: 'Avanza New', image: avanzaImg, price: 'Rp 400.000/Hari', status: 'Start' },
  { id: 3, name: 'Daihatsu Sigra', image: sigraImg, price: 'Rp 350.000/Hari', status: 'Start' },
  { id: 4, name: 'Innova Reborn', image: rebornImg, price: 'Rp 500.000/Hari', status: 'Start' },
  { id: 5, name: 'Fortuner GR', image: fortunerImg, price: 'Rp 1.500.000/Hari', status: 'Start' },
  { id: 6, name: 'Calya', image: calyaImg, price: 'Rp 350.000/Hari', status: 'Start' },
  { id: 7, name: 'Toyota Raize', image: raizeImg, price: 'Rp 450.000/Hari', status: 'Start' },
  { id: 8, name: 'Hiace Premio', image: hiacePremioImg, price: 'Rp 2.200.000/Hari', status: 'Start' },
  { id: 9, name: 'Innova Zenix', image: innovaZenixImg, price: 'Rp 500.000/Hari', status: 'Start' },
  { id: 10, name: 'Hiace Commuter', image: hiaceCommuterImg, price: 'Rp 1.800.000/Hari', status: 'Start' },
  { id: 11, name: 'Toyota Hilux', image: hiluxImg, price: 'Rp 1.500.000/Hari', status: 'Start' },
  { id: 12, name: 'Veloz', image: velozImg, price: 'Rp 450.000/Hari', status: 'Start' }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // FUNGSI UTAMA UNTUK LANGSUNG MEMBUKA WHATSAPP DENGAN PESAN SPESIFIK MOBIL
  const handleBookingWhatsApp = (carName = '', carPrice = '') => {
    let message = '';
    
    if (carName) {
      message = `Halo 77RentCar,

Saya tertarik untuk menyewa unit berikut:
Mobil: ${carName}
Tarif: ${carPrice}

Mohon informasi ketersediaan unit dan persyaratan sewanya. Terima kasih!`;
    } else {
      message = `Halo 77RentCar, saya ingin menyewa mobil. Mohon informasi ketersediaan unit dan daftar harganya. Terima kasih!`;
    }

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${TARGET_WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="app-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#beranda" className="logo-brand">
            <img src={logoImg} alt="77RentCar Logo" className="logo-img" />
          </a>
          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#beranda" onClick={() => setMobileMenuOpen(false)}>Beranda</a>
            <a href="#tentang" onClick={() => setMobileMenuOpen(false)}>Tentang Kami</a>
            <a href="#unit" onClick={() => setMobileMenuOpen(false)}>Unit Mobil</a>
            <a href="#alamat" onClick={() => setMobileMenuOpen(false)}>Alamat</a>
          </div>
          <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="beranda" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Sewa Mobil Impian<br />Anda Bersama<br /><span className="text-blue">77Rentcar</span></h1>
            <p className="hero-description">
              77RENT CAR hadir untuk memudahkan perjalanan Anda! Dengan armada kendaraan yang lengkap, harga terjangkau, dan layanan profesional, kami siap menjadi mitra perjalanan Anda, baik untuk kebutuhan pribadi, bisnis, maupun liburan.
            </p>
            <button 
  className="btn-primary" 
  onClick={() => {
    document.getElementById('unit')?.scrollIntoView({ behavior: 'smooth' });
  }}
>
  Sewa Sekarang
</button>
            <ul className="hero-features">
              <li>
                <span className="badge-icon">✓</span> 5000+ Pelanggan Puas
              </li>
              <li>
                <span className="badge-icon">🛡</span> Asuransi Lengkap
              </li>
              <li>
                <span className="badge-icon">🎧</span> Dukungan 24/7
              </li>
            </ul>
          </div>
          <div className="hero-image-wrapper">
            <img src={heroCarImg} alt="Hero Car" className="hero-img" />
          </div>
        </div>
      </section>

      {/* TENTANG KAMI */}
      <section id="tentang" className="about-section">
        <div className="about-container">
          <div className="about-image-card">
            <img src={aboutCarImg} alt="About 77RentCar" className="about-img" />
          </div>
          <div className="about-content">
            <h2><span className="text-blue">77RentCar</span></h2>
            <p>
              77 RENTCAR adalah penyedia jasa transportasi terpercaya yang berpusat di Pontianak,Kalimantan barat. Kami hadir sebagai solusi perjalanan bagi Anda yang mengutamakan kenyamanan, keamanan, dan gaya berkelas, baik untuk keperluan keluarga, korporasi, maupun rombongan wisata.
            </p>
            <p>
              Kami memahami pentingnya kualitas armada dalam setiap perjalanan. Oleh karena itu, 77 RENTCAR menyediakan berbagai pilihan layanan yang selalu dalam kondisi prima, antara lain:
            </p>
            <ul className="about-list">
              <li>Layanan Lepas Kunci</li>
              <li>Layanan Mobil + Driver</li>
              <li>Layanan Antar Jemput Bandara</li>
              <li>Layanan Wisata Tour Dalam & Luar Kota</li>
            </ul>
          </div>
        </div>
      </section>
      {/* UNIT MOBIL */}
      <section id="unit" className="catalog-section">
        <div className="section-header">
          <h2>UNIT <span className="text-blue">MOBIL</span></h2>
          <p>Kami menghadirkan mobil pilihan untuk wisata, event, kegiatan kantor, maupun rombongan lainnya</p>
        </div>
        <div className="catalog-grid">
          {carData.map((car) => (
            <div key={car.id} className="car-card">
              <div className="card-image-wrapper">
                <img src={car.image} alt={car.name} className="car-card-img" />
              </div>
              <div className="card-body">
                <h3>{car.name}</h3>
                {/* TOMBOL LANGSUNG MEMBUKA WHATSAPP DENGAN DETAIL MOBIL TERKAIT */}
                <button 
                  className="btn-secondary" 
                  onClick={() => handleBookingWhatsApp(car.name, car.price)}
                >
                  BOOKING NOW
                </button>
                <div className="card-footer">
                  <span className="price-badge">{car.status}</span>
                  <span className="price-text">{car.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATISTIK */}
      <section className="stats-section">
        <div className="section-header">
          <h2>Kepercayaan <span className="text-blue">Pelanggan</span></h2>
        </div>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>1000+</h3>
            <p>Pelanggan Puas</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Ketersediaan Kendaraan</p>
          </div>
          <div className="stat-item">
            <h3>1000+</h3>
            <p>Perjalanan Sukses</p>
          </div>
          <div className="stat-item">
            <h3>5+</h3>
            <p>Tahun Pengalaman</p>
          </div>
        </div>
      </section>

      {/* ALAMAT */}
      <section id="alamat" className="address-section">
        <div className="address-container">
          <div className="address-info">
            <h2>Alamat Kantor Utama</h2>
            <div className="info-list">
              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <strong>Kantor Pusat</strong>
                  <p>Jl. Karet, Karet Permata Khatulistiwa No.C1, Sungai Beliung, Pontianak Barat, Pontianak, West Kalimantan 78244, Indonesia</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">📞</span>
                <div>
                  <strong>Telepon</strong>
                  <p>+62 896 7692 0558</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">✉</span>
                <div>
                  <strong>Email</strong>
                  <p>77rentcarpnk@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">🕒</span>
                <div>
                  <strong>Jam Operasional</strong>
                  <p>Senin - Minggu: 08.00 - 21.00 WIB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="address-map">
            <iframe
              title="Google Map Location"
             src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d249.36363312266127!2d109.30036378571232!3d-0.017699963965754004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMDEnMDQuMCJTIDEwOcKwMTgnMDEuMiJF!5e0!3m2!1sen!2sid!4v1788150008111!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-col">
            <h4>Tentang 77RentCar</h4>
            <p>
              Layanan sewa mobil terpercaya dengan berbagai pilihan armada terbaik. Kami mengedepankan keamanan, kenyamanan, dan kepuasan pelanggan dalam setiap perjalanan.
            </p>
          </div>
          <div className="footer-col">
            <h4>Akses Cepat</h4>
            <ul>
              <li><a href="#beranda">Beranda</a></li>
              <li><a href="#tentang">Tentang Kami</a></li>
              <li><a href="#unit">Unit Mobil</a></li>
              <li><a href="#alamat">Alamat</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Social Media</h4>
            <ul>
              <li><a href="https://www.instagram.com/77rentcarpontianak?igsh=ZnR5cGVnYWdyY2R4" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://www.tiktok.com/@77group.id?_r=1&_t=ZS-99KuTG73bG8" target="_blank" rel="noreferrer">TikTok</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Hubungi Kami</h4>
            <p>📞 +62 896 7692 0558</p>
            <p><span className="text-blue">✉</span> 77rentcarpnk@gmail.com</p>
            <p>📍 Jl. Karet, Karet Permata Khatulistiwa No.C1, Sungai Beliung, Pontianak Barat, Pontianak, West Kalimantan 78244, Indonesia</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 77RentCar. All Rights Reserved.</p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <button
        className="floating-wa-btn"
        onClick={() => handleBookingWhatsApp()}
        aria-label="Hubungi via WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="wa-icon-svg" fill="currentColor">
          <path d="M16 2a13.9 13.9 0 0 0-12 21L2 30l7.2-1.9A13.9 13.9 0 1 0 16 2zm0 25.5a11.5 11.5 0 0 1-5.9-1.6l-.4-.2-4.4 1.2 1.2-4.3-.3-.4A11.6 11.6 0 1 1 16 27.5zm6.3-8.7c-.3-.2-2-.1-2.3-.2-.3-.1-.5-.2-.7.2s-.8 1-.9 1.2c-.2.2-.4.2-.7 0a9 9 0 0 1-2.7-1.6 10 10 0 0 1-1.8-2.3c-.2-.3 0-.5.1-.7s.3-.4.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.3 3.3 1.4 3.5c.2.2 2.5 3.9 6.1 5.4 2.2.9 3 .8 4.1.7 1.1-.2 2.4-1 2.7-1.9.4-.9.4-1.7.3-1.9-.2-.1-.5-.2-.8-.3z" />
        </svg>
      </button>
    </div>
  );
}