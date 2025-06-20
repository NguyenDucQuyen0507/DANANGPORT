import { useState, useEffect } from "react";

const WeatherIcons = () => {
  const [currentIcon, setCurrentIcon] = useState("/sun.svg"); // Mặc định là mặt trời

  useEffect(() => {
    const updateIcon = () => {
      const now = new Date();
      const hour = now.getHours();

      if (hour >= 5 && hour < 18) {
        setCurrentIcon("./sun.svg");
      } else {
        const random = Math.floor(Math.random() * 2);
        setCurrentIcon(random === 0 ? "./cloud.svg" : "./rain.svg");
      }
    };

    updateIcon(); // Cập nhật ngay khi component mount
    const interval = setInterval(updateIcon, 60000); // Cập nhật mỗi phút
    return () => clearInterval(interval); // Cleanup khi unmount
  }, []);

  return (
    <div>
      <img
        src={currentIcon}
        alt={
          currentIcon === "./sun.svg"
            ? "Sunny"
            : currentIcon === "./cloud.svg"
            ? "Cloudy"
            : "Rainy"
        }
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};

export default WeatherIcons;
