import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Find-Love</h1>
        <p>
          We are a small team of three passionate individuals who created the "Find Love" application
          to help people find their soulmates.
        </p>
        <div className="team-members">
          <div className="team-member">
            <img src="Outdoors-man-portrait_(cropped).jpg" alt="Team Member 1" />
            <h3>Cristian A</h3>
            <p>Co-Founder & Lead Developer</p>
          </div>
          <div className="team-member">
            <img src="womanappealing0999.jpg" alt="Team Member 2" />
            <h3>Havush</h3>
            <p>Co-Founder & UI/UX Designer</p>
          </div>
          <div className="team-member">
            <img src="arnoldBuff1.jpg" alt="Team Member 3" />
            <h3>Natan H</h3>
            <p>Co-Founder & Marketing Specialist</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
