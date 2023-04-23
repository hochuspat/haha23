import React from "react";
import "../HeaderComponent.css";

const HeaderComponent = ({ user }) => {
  const today = new Date().toLocaleDateString("ru-RU", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="header">
      <div className="logo">
        <img src="1.svg" alt="Logo" />
      </div>
      <div className="user-info">
      <div className="date">{today}</div>
        <div className="user">
          <div className="Not"><img src="2.svg"/></div>
          Вербова Е.М.
          <img src="galka.svg" style={{position:'relative',top:'5px',margin:'0px 10px'}} /> 
         <img src="3.svg" style={{position:'relative',top:'20px'}}/>
          </div>
        
       
        
      </div>
    </div>
  );
};

export default HeaderComponent;