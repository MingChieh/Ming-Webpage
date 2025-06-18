import React from 'react';
import '../styles/Menu.css';

interface MenuProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Menu: React.FC<MenuProps> = ({ currentPage, onPageChange }) => {
  return (
    <div className="menu-container">
      <div className="menu">
        <button
          className={`menu-button ${currentPage === 'main' ? 'active' : ''}`}
          onClick={() => onPageChange('main')}
        >
          <span className="menu-icon">🏠</span>
          <span className="menu-label">Main Page</span>
        </button>
        <button
          className={`menu-button ${currentPage === 'playground' ? 'active' : ''}`}
          onClick={() => onPageChange('playground')}
        >
          <span className="menu-icon">🎮</span>
          <span className="menu-label">Playground</span>
        </button>
        <button
          className={`menu-button ${currentPage === 'contact' ? 'active' : ''}`}
          onClick={() => onPageChange('contact')}
        >
          <span className="menu-icon">✉️</span>
          <span className="menu-label">Contact</span>
        </button>
      </div>
    </div>
  );
};

export default Menu; 