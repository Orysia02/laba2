import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Вікно з'явиться через 1 хвилину (60000 мс)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
    }}>
      <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '10px', color: '#000', width: '400px' }}>
        <h3>Зворотній зв'язок</h3>
        
        <form action="https://formspree.io/f/mnjyzaow" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input type="text" name="name" placeholder="Ім'я" required style={{ padding: '8px' }} />
          <input type="email" name="email" placeholder="Email" required style={{ padding: '8px' }} />
          <input type="tel" name="phone" placeholder="Номер телефону" required style={{ padding: '8px' }} />
          <textarea name="message" placeholder="Повідомлення" required style={{ padding: '8px', minHeight: '60px' }}></textarea>
          
          <button type="submit" style={{ padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}>Відправити</button>
          <button type="button" onClick={() => setIsOpen(false)} style={{ padding: '10px', backgroundColor: '#6c757d', color: '#fff', border: 'none', cursor: 'pointer' }}>Закрити</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;