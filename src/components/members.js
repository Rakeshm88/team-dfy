import React from 'react';
import './members.css'; // We'll add CSS for better styling

const members = [
  "Karthik",
  "Mahesh J",
  "Suresh J",
  "Bharath",
  "Bunny",
  "Nikhil",
  "Nikshith",
  "Mahesh K",
  "Manoj",
  "Siddu",
  "Bhumesh",
  "Arvind",
  "Rakesh",
  "Srikanth",
  "Saikumar",
  "Sudeep",
  "Pradeep"
];

function Members() {
  return (
    <div>
      <h2>Committee Members</h2>
      <div className="members-grid">
        {members.map((name, idx) => (
          <div className="member-card" key={idx}>
            {/* Placeholder for photo */}
            <div className="photo-placeholder">
              {/* Replace src with actual photo path! */}
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`}
                alt={name}
              />
            </div>
            <div className="member-name">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;
