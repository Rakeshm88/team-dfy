import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
import './Home.css';


// Dummy images for carousel. Replace with your own.
const celebrationImages = [
  '/assets/celebration1.jpg',
  '/assets/celebration2.jpg',
  '/assets/celebration3.jpg'
];

// Key committee members (replace image URLs as needed)
const keyMembers = [
  { name: 'Pradeep', role: 'President', photo: '/assets/pradeep.jpg' },
  { name: 'Srikanth', role: 'Secretary', photo: '/assets/maheshj.jpg' },
  { name: 'Saikumar', role: 'Secretary', photo: '/assets/maheshj.jpg' },
  { name: 'Sudeep', role: 'Editor', photo: '/assets/maheshj.jpg' },
  { name: 'Rakesh', role: 'Treasurer', photo: '/assets/rakesh1.jpg' },
  { name: 'Suresh', role: 'Treasurer', photo: '/assets/suresh.jpg' }

];

// Countdown to next Ganesh Chaturthi (example: 2025-08-27)
function useCountdown(targetDate) {
  const [countdown, setCountdown] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;
      if (distance < 0) {
        setCountdown('Festivities Ongoing!');
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const mins = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60)
        );
        const secs = Math.floor(
          (distance % (1000 * 60)) / 1000
        );
        setCountdown(`${days}d ${hours}h ${mins}m ${secs}s`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);
  return countdown;
}


function Home(props) {
  // const navigate = useNavigate();x
  const aboutRef = useRef(null);
  const countdown = useCountdown(new Date('2025-08-27T00:00:00'));

  // Carousel logic
  const [currentImg, setCurrentImg] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setCurrentImg((i) => (i + 1) % celebrationImages.length),
      3000
    );
    return () => clearInterval(id);
  }, []);
  
  // Example of daily mantra
  const mantras = [
    "Vakratunda Mahakaya Suryakoti Samaprabha...",
    "Ganapati Bappa Morya!",
    "Om Gan Ganapataye Namah."
  ];
  const [mantraIdx, setMantraIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setMantraIdx((i) => (i + 1) % mantras.length), 5000);
    return () => clearInterval(id);
  }, []);
  
  // Scroll to About
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="home-root">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            <span className="ganesh-golden">Dynamic Friends Youth Association</span>
          </h1>
          <p className="hero-tagline">
            Where devotion meets unity, and tradition meets new energy.
          </p>
        </div>
        <div className="ganesh-illustration">
          {/* Replace with animated SVG or Ganesh Ji image */}
          <img
            src="/assets/ganesh-illustration.jpg"
            alt="Ganesh Ji"
            className="ganesh-image"
          />
        </div>
      </section>
      
      {/* WELCOME MESSAGE */}
      <section className="welcome-msg">
        <h2>Welcome to Dynamic Friends Youth Association</h2>
        <p>
          United by devotion, empowered by friendship, Dynamic Friends Youth Association 
          has been lighting up our community for years. Discover our journey!
        </p>
      </section>
      
      {/* ABOUT SECTION */}
      <section className="about-section" ref={aboutRef}>
        <h2>About Our Youth</h2>
        <div className="about-story">
          <div className="about-text">
            <p>
              Founded in 2013, our association organizes Ganesh Chaturthi celebrations,
              cultural programs, and impactful social service drives.
              We believe in tradition—blessed by Lord Ganesha—and channel it into 
              vibrant community work for youth and families.
            </p>
            <ul>
              <li>🪔 Grand Ganesh Utsav: music, dance & rituals</li>
              <li>🎉 Donations: Village development donations</li>

            </ul>
          </div>
          {/* Carousel */}
          <div className="carousel">
            <img
              src={celebrationImages[currentImg]}
              alt="Celebration"
              className="carousel-img"
            />
            <div className="carousel-dots">
              {celebrationImages.map((_, i) => (
                <span key={i}
                  className={i === currentImg ? 'dot active' : 'dot'}
                  onClick={() => setCurrentImg(i)} />
              ))}
            </div>
          </div>
        </div>
        
      </section>
  

<section className="prev-years-gallery">
  <h2>Previous Years Gallery</h2>
  <div className="gallery-thumbs">
    <img src="/assets/year2024d.jpg" alt="2021 Utsav" />
    <img src="/assets/year2023c.jpg" alt="2023 Utsav" />
    <img src="/assets/year2022b.jpg" alt="2022 Utsav" />
    <img src="/assets/year2021a.jpg" alt="2021 Utsav" />

    {/* Add more images as needed */}
  </div>
  <button
    className="see-more-btn"
                    onClick={() => props.setSelectedSection('gallery')}  // Use prop here
>
    See More Memories
  </button>
</section>
<button className="hero-btn" onClick={scrollToAbout}>
            Join Us
          </button>
      
      {/* DEVOTIONAL */}
      <section className="devotional-section">
        <h2>Daily Ganesh Blessing</h2>
        <blockquote>
          {mantras[mantraIdx]}
        </blockquote>
        <audio controls>
          <source src="/assets/ganesh-aarti.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </section>
      
      {/* SOCIAL MEDIA */}
      <section className="social-section">
        <h2>Stay Connected</h2>
        <div className="social-buttons">
          <a href="https://www.instagram.com/dynamic_friends_youth_maggidi/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/instagram.jpg" alt="Instagram" />
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <img src="/assets/facebook.jpg" alt="Facebook" />
          </a>
          {/* Add more as needed */}
        </div>
        {/* Example: Instagram Embed */}
        {/* <div className="insta-embed">
          {/* Replace src with actual embed */}
           {/* <iframe
          src="https://www.instagram.com/p/DAlFU1mPM79/embed"
          width="100%"
          height="600"        // Increase if content still cropped
          frameBorder="0"
          scrolling="no"
          allowtransparency="true"
          title="Instagram Feed"
          style={{ borderRadius: "16px", background: "#fff" }}
        ></iframe>
        </div> */} 
      </section>
      
      {/* CONTACT & JOIN */}
      <section className="contact-section">
        <div className="contact-details">
          <div>
            <h4>Visit Us:</h4>
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps?q=18.873833,78.266083&z=15&output=embed"
              width="250"
              height="200"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Pandal Location"
            ></iframe>
          </div>
          <div>
            <h4>Join WhatsApp</h4>
            <img src="/assets/whatsapp-qr.png" alt="WhatsApp QR" width="120"/>
          </div>
        </div>
      </section>
          <footer className="site-footer">
  <span>© 2025 Dynamic Friends Youth Association</span>
</footer>
    </div>
  );
}

export default Home;
