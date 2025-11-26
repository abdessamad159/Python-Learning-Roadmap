import React from 'react';
import { useProgress } from '../context/ProgressContext';
import { Link } from 'react-router-dom';
import { Trophy, Target, BookOpen, RotateCcw, CheckCircle, Lock } from 'lucide-react';

const Profile = () => {
  const { stages, getProgress, resetProgress } = useProgress();
  const progress = getProgress();

  const handleReset = () => {
    if (window.confirm('هل أنت متأكد من إعادة تعيين التقدم؟ سيتم حذف جميع إنجازاتك.')) {
      resetProgress();
    }
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)', marginBottom: '1rem' }}>
          الملف الشخصي
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-color)' }}>
          تتبع تقدمك في رحلة تعلم Python
        </p>
      </header>

      {/* Progress Stats */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '2rem',
          borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow)',
          textAlign: 'center'
        }}>
          <Trophy size={40} style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{progress.completed}</h3>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>مراحل مكتملة</p>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          color: 'white',
          padding: '2rem',
          borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow)',
          textAlign: 'center'
        }}>
          <Target size={40} style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{progress.percentage}%</h3>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>نسبة الإنجاز</p>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          color: 'white',
          padding: '2rem',
          borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow)',
          textAlign: 'center'
        }}>
          <BookOpen size={40} style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{progress.total}</h3>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>إجمالي المراحل</p>
        </div>
      </div>

      {/* Current Stage */}
      <section style={{
        background: 'var(--white)',
        padding: '2rem',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow)',
        marginBottom: '2rem'
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
          المرحلة الحالية
        </h2>
        <div style={{
          background: '#f8fafc',
          padding: '1.5rem',
          borderRadius: 'var(--radius)',
          borderRight: '4px solid var(--primary-color)'
        }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--secondary-color)' }}>
            {progress.currentStage.title}
          </h3>
          <p style={{ color: 'var(--text-color)', marginBottom: '1rem' }}>
            {progress.currentStage.description}
          </p>
          <Link 
            to={`/stage/${progress.currentStage.id}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--primary-color)',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: 'var(--radius)',
              textDecoration: 'none',
              fontWeight: '600'
            }}
          >
            <BookOpen size={20} />
            متابعة التعلم
          </Link>
        </div>
      </section>

      {/* All Stages */}
      <section style={{
        background: 'var(--white)',
        padding: '2rem',
        borderRadius: 'var(--radius)',
        boxShadow: 'var(--shadow)',
        marginBottom: '2rem'
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>
          جميع المراحل
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {stages.map((stage, index) => (
            <div 
              key={stage.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem',
                background: '#f8fafc',
                borderRadius: 'var(--radius)',
                borderRight: `4px solid ${
                  stage.status === 'completed' ? '#10b981' : 
                  stage.status === 'unlocked' ? '#3b82f6' : '#cbd5e1'
                }`
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {stage.status === 'completed' ? (
                  <CheckCircle size={24} color="#10b981" />
                ) : stage.status === 'unlocked' ? (
                  <BookOpen size={24} color="#3b82f6" />
                ) : (
                  <Lock size={24} color="#cbd5e1" />
                )}
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                    المرحلة {index}: {stage.title}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
                    {stage.status === 'completed' ? '✅ مكتملة' : 
                     stage.status === 'unlocked' ? '🔓 متاحة' : '🔒 مقفلة'}
                  </p>
                </div>
              </div>
              {stage.status !== 'locked' && (
                <Link 
                  to={`/stage/${stage.id}`}
                  style={{
                    padding: '0.5rem 1rem',
                    background: stage.status === 'completed' ? '#10b981' : 'var(--primary-color)',
                    color: 'white',
                    borderRadius: 'var(--radius)',
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}
                >
                  {stage.status === 'completed' ? 'مراجعة' : 'ابدأ'}
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Reset Progress */}
      <section style={{ textAlign: 'center' }}>
        <button
          onClick={handleReset}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: '#ef4444',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: 'var(--radius)',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          <RotateCcw size={20} />
          إعادة تعيين التقدم
        </button>
      </section>
    </div>
  );
};

export default Profile;
