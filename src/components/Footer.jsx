import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '2rem', color: '#64748b', fontSize: '0.9rem' }}>
      <p>© {new Date().getFullYear()} Python Learning Roadmap. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
