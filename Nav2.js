import React, { useState } from "react";
import "../Nav.css";
import Obr from "./Obr"
import Polz from "./Polz";
import Stat from "./Stat";
import Proj from "./Proj";
import Podp from "./Podp";





const MenuComponent = () => {
  const [selected, setSelected] = useState(1);
  const [content, setContent] = useState(<ComponentOne />);

  const onSelect = (index) => {
    setSelected(index);
    switch(index) {
      case 1:
        setContent(<ComponentOne />);
        break;
      case 2:
        setContent(<ComponentTwo />);
        break;
      case 3:
        setContent(<ComponentThree />);
        break;
      case 4:
        setContent(<ComponentFour />);
        break;
      case 5:
        setContent(<ComponentFive />);
        break;
      default:
        setContent(null);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="menu">
        <div
          className={selected === 1 ? "menu-item selected" : "menu-item"}
          onClick={() => onSelect(1)}
        >
            <div><img src="Frame-4.svg" style={{position:"absolute",margin:"-3px 0px 0px -80px"}}/></div>
          Обращения
        </div>
        <div
          className={selected === 2 ? "menu-item selected" : "menu-item"}
          onClick={() => onSelect(2)}
        ><div><img src="Frame.svg" style={{position:"absolute",margin:"-3px 0px 0px -80px"}}/></div>
          Пользователи
        </div>
        <div
          className={selected === 3 ? "menu-item selected" : "menu-item"}
          onClick={() => onSelect(3)}
        ><div><img src="Frame-1.svg" style={{position:"absolute",margin:"-3px 0px 0px -80px"}}/></div>
          Статистика
        </div>
        <div
          className={selected === 4 ? "menu-item selected" : "menu-item"}
          onClick={() => onSelect(4)}
        ><div><img src="Frame-2.svg" style={{position:"absolute",margin:"-3px 0px 0px -80px"}}/></div>
          Проекты
        </div>
        <div
          className={selected === 5 ? "menu-item selected" : "menu-item"}
          onClick={() => onSelect(5)}
        ><div><img src="Frame-3.svg" style={{position:"absolute",margin:"-3px 0px 0px -80px"}}/></div>
          Подпись
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "900px", height: "100%",position:"relative",top:"0px"}}>
        {content}
      </div>
    </div>
  );
};

const ComponentOne = () => {
  return (
    <div>
    <Obr/>
    </div>
    );
};

const ComponentTwo = () => {
  return( <div>
    <Polz/>
    </div>
  );
};

const ComponentThree = () => {
  return (
    <div>
        <Stat/>
    </div>
  );
};

const ComponentFour = () => {
  return(
    <div>
        <Proj/>
    </div>
  );
};
const ComponentFive = () => {
    return (
        <Podp/>
    );
  };

export default MenuComponent;