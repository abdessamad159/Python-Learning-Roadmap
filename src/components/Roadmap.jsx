import React from 'react';
import StageCard from './StageCard';
import { useProgress } from '../context/ProgressContext';
import styles from '../styles/Roadmap.module.css';

const Roadmap = () => {
  const { stages } = useProgress();
  
  return (
    <div className={styles.roadmap}>
      <div className={styles.line}></div>
      <div className={styles.stages}>
        {stages.map((stage, index) => (
          <div key={stage.id} className={styles.stageWrapper}>
            <div className={styles.connector}></div>
            <StageCard stage={stage} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
