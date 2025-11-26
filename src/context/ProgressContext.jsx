import React, { createContext, useContext, useState, useEffect } from 'react';
import { stages as initialStages } from '../data/stages';

const ProgressContext = createContext();

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider');
  }
  return context;
};

export const ProgressProvider = ({ children }) => {
  const [stages, setStages] = useState(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem('pythonRoadmapProgress');
    if (savedProgress) {
      try {
        return JSON.parse(savedProgress);
      } catch (error) {
        console.error('Error loading progress:', error);
        return initialStages;
      }
    }
    return initialStages;
  });

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('pythonRoadmapProgress', JSON.stringify(stages));
  }, [stages]);

  const completeStage = (stageId) => {
    setStages(prevStages => {
      const newStages = prevStages.map(stage => {
        if (stage.id === stageId) {
          return { ...stage, status: 'completed' };
        }
        // Unlock next stage
        if (stage.id === stageId + 1) {
          return { ...stage, status: 'unlocked' };
        }
        return stage;
      });
      return newStages;
    });
  };

  const resetProgress = () => {
    setStages(initialStages);
    localStorage.removeItem('pythonRoadmapProgress');
  };

  const getProgress = () => {
    const completed = stages.filter(s => s.status === 'completed').length;
    const total = stages.length;
    const percentage = Math.round((completed / total) * 100);
    const currentStage = stages.find(s => s.status === 'unlocked') || stages[0];
    
    return {
      completed,
      total,
      percentage,
      currentStage
    };
  };

  const value = {
    stages,
    completeStage,
    resetProgress,
    getProgress
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};
