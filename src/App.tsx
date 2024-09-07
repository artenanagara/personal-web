import React from 'react';
import '../css/index.css'; // Pastikan path sesuai dengan lokasi file CSS Anda

const Homepage: React.FC = () => {
  return (
    <div className="p-6">
      <header className="header">
        <h1 className='p-3'>Welcome to My Vite App</h1>
        <p>This is a simple homepage created with Vite and TypeScript.</p>
      </header>
    </div>
  );
};

export default Homepage;
