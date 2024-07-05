// src/components/Planet3D.js
import React, { useRef, useEffect } from 'react';
import './Box.css';

const Star3D = () => {
    const starRef = useRef(null);
    const startTouchX = useRef(0);
    const startTouchY = useRef(0);
    const currentRotationX = useRef(60);
    const currentRotationY = useRef(0);
  
    const handleTouchStart = (e) => {
      startTouchX.current = e.touches[0].clientX;
      startTouchY.current = e.touches[0].clientY;
    };
  
    const handleTouchMove = (e) => {
      const deltaX = e.touches[0].clientX - startTouchX.current;
      const deltaY = e.touches[0].clientY - startTouchY.current;
      
      currentRotationY.current += deltaX * 0.1;
      currentRotationX.current -= deltaY * 0.1;
  
      starRef.current.style.transform = `translate(-50%, -50%) rotateX(${currentRotationX.current}deg) rotateY(${currentRotationY.current}deg)`;
      
      startTouchX.current = e.touches[0].clientX;
      startTouchY.current = e.touches[0].clientY;
    };
  
    useEffect(() => {
      const starElement = starRef.current;
      starElement.addEventListener('touchstart', handleTouchStart);
      starElement.addEventListener('touchmove', handleTouchMove);
  
      return () => {
        starElement.removeEventListener('touchstart', handleTouchStart);
        starElement.removeEventListener('touchmove', handleTouchMove);
      };
    }, []);
  
    return (
      <div className="space">
        <div className="star" ref={starRef}>
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face left"></div>
          <div className="face right"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>
    );
  };
  
  export default Star3D;
