import React, { useState } from 'react';
import '../styles/MainPage.css';
import ResumeSections from './ResumeSections';

const MainPage: React.FC = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="main-page">
      <h1 className="welcome-title">Welcome to My Portfolio</h1>
      <div className="main-content">
        <ResumeSections />
        <button className="resume-button" onClick={() => setShowResume(!showResume)}>
          {showResume ? 'Hide Resume PDF' : 'Show Resume PDF'}
        </button>
        {showResume && (
          <div className="resume-overlay" onClick={() => setShowResume(false)}>
            <div className="resume-container" onClick={(e) => e.stopPropagation()}>
              <button 
                className="close-button"
                onClick={() => setShowResume(false)}
                aria-label="Close resume"
              >
                ×
              </button>
              <iframe
                src="/MingChieh_Yang_Resume.pdf"
                title="Resume"
                className="resume-pdf"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage; 