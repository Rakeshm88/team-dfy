import React, { useState } from 'react';
import './members.css';

// Committee members (full list)
const committeeMembers = [
  { name: "Karthik",    photo: "/assets/maheshj.jpg" },
  { name: "Mahesh J",   photo: "/assets/maheshj.jpg" },
  { name: "Suresh J",   photo: "/assets/suresh.jpg" },
  { name: "Bharath",    photo: "/assets/maheshj.jpg" },
  { name: "Bunny",      photo: "/assets/maheshj.jpg" },
  { name: "Nikhil",     photo: "/assets/maheshj.jpg" },
  { name: "Nikshith",   photo: "/assets/maheshj.jpg" },
  { name: "Mahesh K",   photo: "/assets/maheshj.jpg" },
  { name: "Manoj",      photo: "/assets/maheshj.jpg" },
  { name: "Siddu",      photo: "/assets/maheshj.jpg" },
  { name: "Bhumesh",    photo: "/assets/maheshj.jpg" },
  { name: "Arvind",     photo: "/assets/maheshj.jpg" },
  { name: "Rakesh",     photo: "/assets/rakesh1.jpg" },
  { name: "Srikanth",   photo: "/assets/maheshj.jpg" },
  { name: "Saikumar",   photo: "/assets/maheshj.jpg" },
  { name: "Sudeep",     photo: "/assets/maheshj.jpg" },
  { name: "Pradeep",    photo: "/assets/pradeep.jpg" }
];

// Key committee members with roles and photos (use your actual photo URLs)
const keyMembers = [
  { name: 'Pradeep', role: 'President', photo: '/assets/pradeep.jpg' },
  { name: 'Srikanth', role: 'Secretary', photo: '/assets/maheshj.jpg' },
  { name: 'Saikumar', role: 'Secretary', photo: '/assets/maheshj.jpg' },
  { name: 'Sudeep', role: 'Editor', photo: '/assets/maheshj.jpg' },
  { name: 'Rakesh', role: 'Treasurer', photo: '/assets/rakesh1.jpg' },
  { name: 'Suresh', role: 'Treasurer', photo: '/assets/suresh.jpg' }
];

function Members() {
  // State to toggle between 'committee' and 'key'
  const [view, setView] = useState('committee'); // default to committee members

  return (
    <div className="members-container">
      <h2>Our Members</h2>

      {/* Toggle buttons */}
      <div className="toggle-buttons">
        <button
          className={view === 'committee' ? 'active' : ''}
          onClick={() => setView('committee')}
        >
          Committee Members
        </button>
        <button
          className={view === 'key' ? 'active' : ''}
          onClick={() => setView('key')}
        >
          Key Members
        </button>
      </div>

      {/* Members grid */}
      <div className="members-grid">
          {view === 'committee' &&
            committeeMembers.map(({ name, photo }, idx) => (
              <div className="member-card key-member" key={idx}>
                <img
                  src={photo ? photo : `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`}
                  alt={name}
                  className="member-photo"
                />
                <div className="member-info">
                  <div className="member-name">{name}</div>
                </div>
              </div>
            ))
          }


        {view === 'key' && keyMembers.map(({ name, role, photo }) => (
          <div className="member-card key-member" key={name}>
            <img src={photo} alt={name} className="member-photo" />
            <div className="member-info">
              <div className="member-name">{name}</div>
              <div className="member-role">{role}</div>
            </div>
          </div>
        ))}
      </div>
      <section className="sponsors-section">
  <h2>Our Sponsors & Partners</h2>
  <div className="sponsors-list">
    <img src="/assets/sponsor1.png" alt="Sponsor 1" />
    <img src="/assets/sponsor2.png" alt="Sponsor 2" />
    {/* Add more sponsor logos as needed */}
  </div>
  <button className="become-sponsor-btn">Become a Sponsor</button>
</section>
    </div>
    
  );
}

export default Members;