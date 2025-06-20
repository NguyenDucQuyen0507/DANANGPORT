import "./App.css";
import Clock from "./Clock";
import getGreeting from "./greeting";
import WeatherIcons from "./WeatherIcons";
function App() {
  const greeting = getGreeting();
  return (
    <div
      style={{
        backgroundImage:
          "url('https://danangport.com/wp-content/uploads/2023/08/sitemap.jpeg')",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div
        className=""
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          paddingTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <img src="/LOGO-2020-update-2.svg" alt="Logo" className="w-48 h-auto" />
        <div style={{ margin: "0 auto", paddingTop: "100px" }}>
          <p
            style={{
              color: "white",
              fontSize: "44px",
              textAlign: "center",
              marginTop: "100px",
              fontWeight: "500",
            }}
          >
            {greeting}
          </p>
          <p
            style={{
              color: "white",
              fontSize: "50px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Chào mừng bạn đến với Cảng Đà Nẵng
          </p>
        </div>
        <div
          style={{
            marginTop: "250px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Clock />
          <WeatherIcons />
        </div>
      </div>
    </div>
  );
}

export default App;
