import React from 'react';
import './App.css';
import Clock from './Clock';
import getGreeting from './greeting';
import WeatherIcons from './WeatherIcons';
function App() {
  const greeting = getGreeting();
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://danangport.com/wp-content/uploads/2023/08/sitemap.jpeg') ",
        height: '100%',
        backgroundSize: 'cover',
      }}
    >
      <div className=" lg:max-w-[1440px] lg:mx-auto lg:px-[80px] lg:py-8 max-w-full mx-auto px-8 py-8 flex flex-col justify-between items-start h-full">
        <img src="/LOGO-2020-update-2.svg" alt="Logo" className="w-48 h-auto" />
        <div className="lg:pt-[80px] pt[20px]" style={{ margin: '0 auto' }}>
          <p
            style={{
              color: 'white',
              fontSize: '44px',
              textAlign: 'center',
              marginTop: '100px',
              fontWeight: '600',
            }}
          >
            {greeting}
          </p>
          <p
            style={{
              color: 'white',
              fontSize: '60px',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Chào mừng bạn đến với Cảng Đà Nẵng
          </p>
        </div>
        <div className="lg:mt-[250px] mt-[100px] flex items-center justify-center  gap-2.5">
          <Clock />
          <WeatherIcons />
        </div>
      </div>
    </div>
  );
}

export default App;
