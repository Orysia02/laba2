import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import Reviews from './components/Reviews';      
import ContactForm from './components/ContactForm'; 
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentHour = new Date().getHours();
    const defaultTheme = (currentHour >= 7 && currentHour < 21) ? 'light' : 'dark';
    setTheme(defaultTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app-container ${theme === 'dark' ? 'dark-mode' : ''}`} style={{ minHeight: '100vh', padding: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Header />
        <button onClick={toggleTheme} style={{ padding: '10px 15px', cursor: 'pointer', borderRadius: '5px' }}>
          Режим: {theme === 'light' ? '🌙 Нічний' : '☀️ Денний'}
        </button>
      </header>

      <main style={{ marginTop: '20px' }}>
        <Experience />
        <Education />
        <Reviews /> 
      </main>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;