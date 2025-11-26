import React from 'react';
import Roadmap from '../components/Roadmap';

const Home = () => {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--secondary-color)' }}>
          خريطة تعلم Python
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-color)', maxWidth: '600px', margin: '0 auto' }}>
          مسار تعليمي متكامل يأخذك من الصفر إلى الاحتراف بخطوات مدروسة وتطبيقات عملية.
        </p>
      </div>
      <Roadmap />
    </div>
  );
};

export default Home;
