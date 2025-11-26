import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Lock, PlayCircle } from 'lucide-react';
import styles from '../styles/StageCard.module.css';

const StageCard = ({ stage, index }) => {
  const isLocked = stage.status === 'locked';
  
  return (
    <div className={`${styles.card} ${isLocked ? styles.locked : ''}`}>
      <div className={styles.iconWrapper}>
        {stage.status === 'completed' ? (
          <CheckCircle className={styles.icon} color="var(--success)" />
        ) : isLocked ? (
          <Lock className={styles.icon} color="var(--text-color)" opacity={0.5} />
        ) : (
          <PlayCircle className={styles.icon} color="var(--primary-color)" />
        )}
      </div>
      
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.stageNumber}>المرحلة {index}</span>
          <h3 className={styles.title}>{stage.title}</h3>
        </div>
        <p className={styles.description}>{stage.description}</p>
        
        {!isLocked ? (
          <Link to={`/stage/${stage.id}`} className={styles.button}>
            ابدأ التعلم
          </Link>
        ) : (
          <button disabled className={styles.buttonDisabled}>
            مغلق
          </button>
        )}
      </div>
    </div>
  );
};

export default StageCard;
