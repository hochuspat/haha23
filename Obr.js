import React, { Component }  from "react";
import "../Images.css";
class Image extends Component {
    
    
    render() {
  return (
    <div className="images">
        <h1>Новые</h1><h2>Обработанные</h2>
        <div className="papa"><img src="Папка.svg" /></div>
        <div className="image-wrapper">
          <div className="One">
         
          <img src="Чехов_1.svg" style={{margin:'0px 10px'}} />

          <img src="Тургенев_1.svg" style={{margin:'0px 10px'}}/>
          <img src="Ахматова_1.svg" style={{margin:'0px 10px'}}/>
</div> <div className="Two">
          <img src="Чехов_2.svg" style={{margin:'0px 10px'}}/>
          <img src="Тургенев_2.svg"style={{margin:'0px 10px'}} />
          <img src="Ахматова_2.svg" style={{margin:'0px 10px'}}/>
          </div>
          <div className="Three">
          <img src="Чехов_3.svg" style={{margin:'0px 10px'}}/>
          <img src="Тургенев_3.svg" style={{margin:'0px 10px'}}/>
          <img src="Ахматова_3.svg" style={{margin:'0px 10px'}}/>
          </div>
          <div className="Four">
          <img src="Чехов_4.svg" style={{margin:'0px 10px'}}/>
          <img src="Тургенев_4.svg" style={{margin:'0px 10px'}}/>
          <img src="Ахматова_4.svg"style={{margin:'0px 10px'}} />
          </div>
        </div>
      
    </div>
  );
};
handleClick = () => {
    // открыть новый компонент
    this.props.history.push('/new-component');
  }
};
export default Image;