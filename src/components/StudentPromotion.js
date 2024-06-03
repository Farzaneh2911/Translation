import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import "../css/cardStyle.css";

const StudentPromotion = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 10,
      speed: 100,
      transition: true,
      easing: "ease-out",
    });
  }, []);

  return (
   
    <div className="promotion-container" ref={tiltRef}>
      <div className="promotion-content">
        <img src="/images/Student-pro.svg" alt="Promotion" className="promotion-image" />
        <div className="promotion-text">
          <h2>Student Discount Promotion</h2>
          <p>
            Enjoy discounted rates on all our services! Students get up to 50% off on repeated segments.
            Share your student ID and save more. Check out our blog for more details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentPromotion;
