import './styles.css'
import React from "react";
import { FaTelegram } from "react-icons/fa";

function App() {
  return (
    <main className="container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/images/gydro-bg.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <h1>Домен topnews.uz на продаже!</h1>
        <p>По вопросам обращайтесь:</p>
        <div className="main-blok">
          <a href='https://t.me/akbarsoftowner'><FaTelegram className="main-icon" /></a>
          <b>или</b>
          <h3><a href='https://akbarsoft.uz/'>akbarsoft.uz</a></h3>
        </div>
      </div>
    </main>
  );
}

export default App;