import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { ArrowLeft, CheckCircle, Circle, BookOpen, Trophy } from 'lucide-react';

const StageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { stages, completeStage } = useProgress();
  const [showSuccess, setShowSuccess] = useState(false);
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
              <li key={idx}>
                <Link 
                  to={`/stage/${stage.id}/topic/${topic.id}`}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1rem', 
                    padding: '1.5rem', 
                    background: '#f8fafc', 
                    borderRadius: 'var(--radius)',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'all 0.2s',
                    border: '1px solid transparent'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                    e.currentTarget.style.transform = 'translateX(-5px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = '#f8fafc';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ 
                    background: 'var(--primary-color)', 
                    color: 'white', 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                  }}>
                    {idx + 1}
                  </div>
                  <span style={{ fontSize: '1.2rem', fontWeight: '500', flex: 1 }}>{topic.title}</span>
                  <ArrowLeft size={20} color="var(--primary-color)" style={{ transform: 'rotate(180deg)' }} />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {showSuccess && (
          <section style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
            color: 'white', 
            padding: '2rem', 
            borderRadius: 'var(--radius)',
            textAlign: 'center',
            marginBottom: '2rem',
            animation: 'slideDown 0.5s ease-out'
          }}>
            <Trophy size={48} style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎉 أحسنت! لقد أكملت هذه المرحلة</h3>
            <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>المرحلة التالية متاحة الآن</p>
          </section>
        )}

        <section style={{ textAlign: 'center', marginTop: '2rem' }}>
          {stage.status === 'completed' ? (
            <div style={{ 
              background: '#10b981', 
              color: 'white', 
              padding: '1rem 2rem', 
              fontSize: '1.1rem', 
              borderRadius: 'var(--radius)',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <CheckCircle size={24} />
              تم إكمال هذه المرحلة
            </div>
          ) : (
            <button 
              onClick={() => {
                completeStage(stage.id);
                setShowSuccess(true);
                setTimeout(() => {
                  navigate('/');
                }, 2500);
              }}
              style={{ 
                background: 'var(--primary-color)', 
                color: 'white', 
                padding: '1rem 2rem', 
                fontSize: '1.1rem', 
                borderRadius: 'var(--radius)',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                border: 'none',
                transition: 'transform 0.2s',
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              <Trophy size={20} />
              إكمال المرحلة
            </button>
          )}
        </section>
      </div>
    </div>
  );
};

export default StageDetail;
