import { useState, useEffect } from 'react';
import React from 'react';
const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ color: 'white', fontSize: '34px', fontWeight: 'bold' }}>
      <p>{time.toLocaleTimeString('vi-VN', { hour12: false })}</p>
    </div>
  );
};

export default Clock;
