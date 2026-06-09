import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [sysInfo, setSysInfo] = useState({ platform: '', browser: '' });

  useEffect(() => {
    const platform = navigator.platform;
    const browser = navigator.userAgent;

    localStorage.setItem('react-platform', platform);
    localStorage.setItem('react-browser', browser);

    setSysInfo({ platform, browser });
  }, []);

  return (
    <footer style={{ padding: '20px', borderTop: '1px solid #ccc', marginTop: '20px' }}>
      <p>© 2026 Ваш Проєкт. Усі права захищені.</p>
      <div style={{ fontSize: '12px', opacity: 0.7 }}>
        <p><strong>ОС:</strong> {sysInfo.platform || localStorage.getItem('react-platform')}</p>
        <p><strong>Браузер:</strong> {sysInfo.browser || localStorage.getItem('react-browser')}</p>
      </div>
    </footer>
  );
};

export default Footer;