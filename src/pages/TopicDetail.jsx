import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { ArrowRight, BookOpen, CheckCircle } from 'lucide-react';

const TopicDetail = () => {
  const { stageId, topicId } = useParams();
  const navigate = useNavigate();
  const { stages } = useProgress();

  const stage = stages.find(s => s.id === parseInt(stageId));
  
  if (!stage) return <div>المرحلة غير موجودة</div>;

  const topic = stage.topics.find(t => t.id === topicId);
  const topicIndex = stage.topics.findIndex(t => t.id === topicId);
  
  if (!topic) return <div>الموضوع غير موجود</div>;

  const nextTopic = stage.topics[topicIndex + 1];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      {/* Header Navigation */}
      <div style={{ marginBottom: '2rem' }}>
        <Link 
          to={`/stage/${stageId}`}
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            color: 'var(--text-color)',
            textDecoration: 'none',
            fontSize: '1.1rem'
          }}
        >
          <ArrowRight size={20} />
          العودة إلى {stage.title}
        </Link>
      </div>

      {/* Content Card */}
      <article style={{ 
        background: 'var(--white)', 
        padding: '3rem', 
        borderRadius: 'var(--radius)', 
        boxShadow: 'var(--shadow)' 
      }}>
        <header style={{ marginBottom: '2rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>
            <BookOpen size={28} />
            <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>درس {topicIndex + 1} من {stage.topics.length}</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--secondary-color)' }}>{topic.title}</h1>
        </header>

        <div 
          className="topic-content"
          style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#334155' }}
          dangerouslySetInnerHTML={{ __html: topic.content }} 
        />
      </article>

      {/* Footer Navigation */}
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
        {nextTopic ? (
          <Link
            to={`/stage/${stageId}/topic/${nextTopic.id}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--primary-color)',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: 'var(--radius)',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem'
            }}
          >
            الدرس التالي: {nextTopic.title}
            <ArrowRight size={20} style={{ transform: 'rotate(180deg)' }} />
          </Link>
        ) : (
          <Link
            to={`/stage/${stageId}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#10b981',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: 'var(--radius)',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.1rem'
            }}
          >
            <CheckCircle size={20} />
            إتمام المرحلة
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopicDetail;
