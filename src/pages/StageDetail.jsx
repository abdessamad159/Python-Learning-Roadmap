import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { stages } from '../data/stages';
import { ArrowLeft, CheckCircle, Circle, BookOpen } from 'lucide-react';

const StageDetail = () => {
  const { id } = useParams();
  const stage = stages.find(s => s.id === parseInt(id));

  if (!stage) {
    return <div style={{ textAlign: 'center', padding: '3rem' }}>المرحلة غير موجودة</div>;
  }

  return (
    <div>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-color)', marginBottom: '2rem' }}>
        <ArrowLeft size={20} />
        <span>العودة للخريطة</span>
      </Link>

      <header style={{ marginBottom: '3rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>{stage.title}</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-color)' }}>{stage.description}</p>
      </header>

      <div style={{ display: 'grid', gap: '2rem' }}>
        <section style={{ background: 'var(--white)', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}>
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
            <BookOpen />
            مواضيع المرحلة
          </h2>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {stage.topics.map((topic, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#f8fafc', borderRadius: 'var(--radius)' }}>
                <Circle size={20} color="#cbd5e1" />
                <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{topic}</span>
              </li>
            ))}
          </ul>
        </section>

        <section style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button style={{ 
            background: 'var(--primary-color)', 
            color: 'white', 
            padding: '1rem 2rem', 
            fontSize: '1.1rem', 
            borderRadius: 'var(--radius)',
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            ابدأ الاختبار النهائي
          </button>
        </section>
      </div>
    </div>
  );
};

export default StageDetail;
