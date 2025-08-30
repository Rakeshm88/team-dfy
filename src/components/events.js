import React, { useState, useEffect } from 'react';

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

function Events() {
  const countdown = useCountdown(new Date('2025-08-27T00:00:00'));

  return (
    <div className="events-page">
      {/* EVENTS & ACTIVITIES */}
      <section className="events-section">
        <h2>Upcoming Events</h2>
        <div className="countdown-box">
          <span>Ganesh Chaturthi Countdown:</span>
          <b>{countdown}</b>
        </div>
        <div className="event-gallery">
          <img src="/assets/event1.jpg" alt="Event 1" />
          <img src="/assets/event2.jpg" alt="Event 2" />
          <img src="/assets/event3.jpg" alt="Event 3" />
        </div>
        <div className="event-video">
          <video src="/assets/highlight.mp4" controls width="320" />
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="achievements-section">
        <h2>Community Impact</h2>
        <div className="impact-cards">
          <div className="impact-card">
            <span role="img" aria-label="People">🧑‍🤝‍🧑</span>
            <b>500+</b>
            <p>Participants in Ganesh Chaturthi</p>
          </div>
          <div className="impact-card">
            <span role="img" aria-label="Charity">🎁</span>
            <b>20+</b>
            <p>Charity Events</p>
          </div>
          <div className="impact-card">
            <span role="img" aria-label="Smile">😊</span>
            <b>1000+</b>
            <p>Smiles Spread</p>
          </div>
        </div>
      </section>
      {/* CONTACT & JOIN */}
      <section className="contact-section">
        <h2>Contact & Join</h2>
        <form
          className="contact-form"
          onSubmit={e => {
            e.preventDefault();
            alert('Thank you for reaching out!');
          }}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="How would you like to help?" required />
          <button type="submit">Send</button>
        </form>
      </section>

    </div>
  );
}

export default Events;
