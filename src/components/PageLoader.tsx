import { useEffect, useState } from 'react';
import './PageLoader.css';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader after page is fully loaded
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 2000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className="page-loader-container">
      {/* Animated background */}
      <div className="loader-background">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
      </div>

      <div className="loader-content">
        {/* Premium Spinner */}
        <div className="loader-spinner">
          <div className="spinner-track"></div>
          <div className="spinner-thumb"></div>
        </div>

        {/* Animated Brand Text */}
        <div className="brand-name">
          <span className="brand-letter">V</span>
          <span className="brand-letter">i</span>
          <span className="brand-letter">k</span>
          <span className="brand-letter">t</span>
          <span className="brand-letter">o</span>
          <span className="brand-letter">r</span>
          <span className="brand-letter">i</span>
          <span className="brand-letter">j</span>
          <span className="brand-letter">a</span>
        </div>

        {/* Loading status */}
        <div className="loading-status">
          <span className="status-text">Preparing your experience</span>
          <span className="status-dots">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>

        {/* Premium progress bar */}
        <div className="premium-progress">
          <div className="progress-track">
            <div className="progress-bar-fill"></div>
          </div>
          <div className="progress-text">Loading...</div>
        </div>
      </div>
    </div>
  );
}
