import React, { useState, useEffect } from 'react';
import styles from '../styles/Cursor.module.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    const textElements = document.querySelectorAll('a, h1, h2, h3, h4, h5, h6, p, span, button, li');

    const handleMouseEnter = () => setIsHoveringText(true);
    const handleMouseLeave = () => setIsHoveringText(false);

    textElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      textElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="hidden md:block">
      <div
        className={`${styles.cursor} ${isHoveringText ? styles.text : ''} ${
          isClicked ? styles.clicked : ''
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </div>
  );
};

export default Cursor; 