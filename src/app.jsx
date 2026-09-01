import React, { useState, useEffect, useRef } from 'react';
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
import aboutCarVideo from './assets/about-car.mp4';

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

const statsData = [
  { value: 1000, suffix: '+', label: 'Pelanggan Puas' },
  { value: 10, suffix: '+', label: 'Ketersediaan Kendaraan' },
  { value: 1000, suffix: '+', label: 'Perjalanan Sukses' },
  { value: 5, suffix: '+', label: 'Tahun Pengalaman' }
];

function AnimatedStat({ value, suffix, label, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0);
      return undefined;
    }

    let animationFrameId = null;
    const duration = 1600;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(value * eased));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [start, value]);

  return (
    <div className={start ? 'stat-item active' : 'stat-item'}>
      <h3>{count}{suffix}</h3>
      <p>{label}</p>
    </div>
  );
}

function RevealSection({ children, id, className = '', onVisible }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          onVisible?.();
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px 100px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [onVisible]);

  return (
    <section ref={sectionRef} id={id} className={`${className} reveal ${visible ? 'visible' : ''}`}>
      {children}
    </section>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('beranda');
  const [statsVisible, setStatsVisible] = useState(false);

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
            <a
              href="#beranda"
              className={activeNav === 'beranda' ? 'active' : ''}
              onClick={() => {
                setActiveNav('beranda');
                setMobileMenuOpen(false);
              }}
            >
              Beranda
            </a>
            <a
              href="#tentang"
              className={activeNav === 'tentang' ? 'active' : ''}
              onClick={() => {
                setActiveNav('tentang');
                setMobileMenuOpen(false);
              }}
            >
              Tentang Kami
            </a>
            <a
              href="#unit"
              className={activeNav === 'unit' ? 'active' : ''}
              onClick={() => {
                setActiveNav('unit');
                setMobileMenuOpen(false);
              }}
            >
              Unit Mobil
            </a>
            <a
              href="#alamat"
              className={activeNav === 'alamat' ? 'active' : ''}
              onClick={() => {
                setActiveNav('alamat');
                setMobileMenuOpen(false);
              }}
            >
              Alamat
            </a>
          </div>
          <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <RevealSection id="beranda" className="hero-section">
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
                <span className="badge-icon">✓</span> 1000+ Pelanggan Puas
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
      </RevealSection>

      {/* TENTANG KAMI */}
      <RevealSection id="tentang" className="about-section">
        <div className="about-container">
          <div className="about-image-card">
            <video
              className="about-video"
              src={aboutCarVideo}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              disablePictureInPicture
              preload="auto"
            />
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

            <div className="about-contact">
              <h3 className="contact-title">Contact us with</h3>
              <div className="social-row">
                <a href="https://wa.me/6289676920558" target="_blank" rel="noreferrer" className="social-bubble" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.19 1C6.4 1 1.69 5.7 1.69 11.49c0 2.04.53 4.03 1.53 5.78L1.5 23l5.9-1.99c1.68.92 3.58 1.4 5.79 1.4h.01c5.78 0 10.48-4.7 10.48-10.48 0-2.8-1.09-5.45-3.16-7.45ZM12.19 19.5c-1.71 0-3.38-.46-4.85-1.33l-.35-.2-3.5 1.18 1.18-3.42-.23-.35A8.57 8.57 0 0 1 3.63 11.5c0-4.74 3.84-8.57 8.56-8.57 2.29 0 4.44.89 6.06 2.5a8.47 8.47 0 0 1 2.5 6.07c0 4.72-3.84 8.56-8.56 8.56Zm4.7-6.42c-.26-.13-1.53-.76-1.77-.85-.24-.09-.41-.13-.58.13-.17.26-.64.85-.79 1.03-.14.17-.29.2-.55.07-.26-.13-1.09-.4-2.08-1.28-.77-.69-1.29-1.53-1.44-1.79-.15-.26-.02-.4.11-.53.12-.12.26-.29.39-.44.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.8-1.91-.21-.5-.43-.43-.58-.44h-.5c-.17 0-.45.06-.68.32-.23.26-.87.85-.87 2.08 0 1.23.89 2.42 1.01 2.58.13.17 1.76 2.67 4.27 3.75.6.26 1.06.42 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.53-.62 1.75-1.22.22-.61.22-1.13.15-1.24-.07-.11-.24-.17-.5-.3Z"/></svg>
                </a>
                <a href="https://www.instagram.com/77rentcarpontianak" target="_blank" rel="noreferrer" className="social-bubble" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2Zm5.1-3.2a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z"/></svg>
                </a>
                <a href="https://www.tiktok.com/@77group.id" target="_blank" rel="noreferrer" className="social-bubble" aria-label="TikTok">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.6 2c.6 1.5 1.8 2.6 3.4 3.1v2.3c-1.4 0-2.7-.4-3.9-1.2v7.2a5.2 5.2 0 1 1-5.2-5.2c.3 0 .6 0 .9.1v2.4a2.9 2.9 0 1 0 1.9 2.8V2h3.9Z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
      {/* UNIT MOBIL */}
      <RevealSection id="unit" className="catalog-section">
        <div className="section-header">
          <h2>UNIT <span className="text-blue">MOBIL</span></h2>
          <p>Kami menghadirkan mobil pilihan untuk wisata, event, kegiatan kantor, maupun rombongan lainnya</p>
        </div>
        <div className="catalog-grid">
          {carData.map((car, index) => (
            <div key={car.id} className="car-card" style={{ '--card-delay': `${index * 140}ms` }}>
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
      </RevealSection>

      {/* STATISTIK */}
      <RevealSection className="stats-section" id="stats" onVisible={() => setStatsVisible(true)}>
        <div className="section-header">
          <h2>Kepercayaan <span className="text-blue">Pelanggan</span></h2>
        </div>
        <div className="stats-grid">
          {statsData.map((stat) => (
            <AnimatedStat key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} start={statsVisible} />
          ))}
        </div>
      </RevealSection>

      {/* ALAMAT */}
      <RevealSection id="alamat" className="address-section">
        <div className="address-container">
          <div className="address-info">
            <h2>Alamat Kantor Utama</h2>
            <div className="info-list">
              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <strong>Kantor Pusat</strong>
                  <a
                    href="https://maps.google.com/?q=Jl.+Karet,+Karet+Permata+Khatulistiwa+No.C1,+Sungai+Beliung,+Pontianak+Barat,+Pontianak,+West+Kalimantan+78244,+Indonesia"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    <p>Jl. Karet, Karet Permata Khatulistiwa No.C1, Sungai Beliung, Pontianak Barat, Pontianak, West Kalimantan 78244, Indonesia</p>
                  </a>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">📞</span>
                <div>
                  <strong>Telepon</strong>
                  <a href="https://wa.me/6289676920558" target="_blank" rel="noreferrer" className="contact-link">
                    <p>+62 896 7692 0558</p>
                  </a>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">✉</span>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:77rentcarpnk@gmail.com" className="contact-link">
                    <p>77rentcarpnk@gmail.com</p>
                  </a>
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
      </RevealSection>

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
            <a href="https://wa.me/6289676920558" target="_blank" rel="noreferrer" className="footer-contact-link">
              <p>📞 +62 896 7692 0558</p>
            </a>
            <a href="mailto:77rentcarpnk@gmail.com" className="footer-contact-link">
              <p><span className="text-blue">✉</span> 77rentcarpnk@gmail.com</p>
            </a>
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