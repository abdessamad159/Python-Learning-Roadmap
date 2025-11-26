import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Lock, 
  PlayCircle, 
  ChevronDown, 
  ChevronUp,
  Rocket,
  Code,
  Database,
  Box,
  Layers
} from 'lucide-react';
import styles from '../styles/StageCard.module.css';

const iconMap = {
  Rocket: Rocket,
  Code: Code,
  Database: Database,
  Box: Box,
  Layers: Layers
};

const StageCard = ({ stage, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLocked = stage.status === 'locked';
  const IconComponent = iconMap[stage.icon] || PlayCircle;
  
  const toggleExpand = () => {
    if (!isLocked) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div 
      className={`${styles.card} ${isLocked ? styles.locked : ''} ${isExpanded ? styles.expanded : ''}`}
      onClick={toggleExpand}
    >
      <div className={styles.cardHeader}>
        <div className={styles.iconWrapper}>
          {stage.status === 'completed' ? (
            <CheckCircle className={styles.statusIcon} color="var(--success)" />
          ) : isLocked ? (
            <Lock className={styles.statusIcon} color="var(--text-secondary)" />
          ) : (
            <IconComponent className={styles.mainIcon} />
          )}
        </div>
        
        <div className={styles.headerContent}>
          <span className={styles.stageNumber}>المرحلة {index + 1}</span>
          <h3 className={styles.title}>{stage.title}</h3>
        </div>

        {!isLocked && (
          <div className={styles.expandIcon}>
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        )}
      </div>

      <div className={styles.cardBody}>
        <p className={styles.description}>{stage.description}</p>
        
        <div className={`${styles.detailsWrapper} ${isExpanded ? styles.show : ''}`}>
          <p className={styles.details}>{stage.details}</p>
          
          <div className={styles.topicsPreview}>
            <h4>ماذا ستتعلم؟</h4>
            <ul>
              {stage.topics.map(topic => (
                <li key={topic.id}>{topic.title}</li>
              ))}
            </ul>
          </div>

          <Link 
            to={`/stage/${stage.id}`} 
            className={styles.startButton}
            onClick={(e) => e.stopPropagation()}
          >
            ابدأ الرحلة
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StageCard;
