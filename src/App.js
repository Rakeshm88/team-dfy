import React, { useState, useEffect } from 'react';
import './App.css';

import Home from './components/Home';
import Members from './components/members';
import Gallery from './components/Gallery';
import Events from './components/events';
import Committee from './components/committee';

function App() {
  const [selectedSection, setSelectedSection] = useState('home');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedSection]);

const renderSection = () => {
  switch (selectedSection) {
    case 'home':
      return <Home setSelectedSection={setSelectedSection} />;  // Pass prop here
    case 'members':
      return <Members />;
    case 'gallery':
      return <Gallery />;
    case 'events':
      return <Events />;
    case 'committee':
      return <Committee />;
    default:
      return <Members />;
  }
};

  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li onClick={() => setSelectedSection('home')}>Home</li>
          <li onClick={() => setSelectedSection('members')}>Members</li>
          <li onClick={() => setSelectedSection('gallery')}>Gallery</li>
          <li onClick={() => setSelectedSection('events')}>Events</li>
          <li onClick={() => setSelectedSection('committee')}>Committee Details</li>
        </ul>
      </nav>
      <div className="section-content">
        {renderSection()}
      </div>
    </div>
  );
}

// Example placeholder components for each section
function MembersSection() {
  return <h2>Members List (with photos)</h2>;
}

function DetailsSection() {
  return <h2>Member Details</h2>;
}

function ContactSection() {
  return <h2>Contact Details</h2>;
}

function CommitteeSection() {
  return <h2>Committee News & Details</h2>;
}

export default App;
