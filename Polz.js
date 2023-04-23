import React, { Component } from "react";
import "../Images2.css";
class Polz extends Component {
    render() {
        return (
            <div className="imagess">
                <h1>Все пользователи / </h1>
                <img src="plus.svg" style={{
                    position:"absolute",left:"750px",top:"50px"
                }} />
                <div className="image-wrapperr">
                    <div className="Onee">
                        <img src="Павлович_1.svg" style={{margin:'10px 15px'}}/>
                        <img src="Тургенев1_1.svg" style={{margin:'10px 15px'}}/>
                        <img src="ANNA1.svg" style={{margin:'10px 15px'}}/>
                    </div>
                    <div className="Twoo">
                        <img src="Павлович_3.svg"style={{margin:'10px 15px'}} />
                        <img src="Тургенев3_3.svg" style={{margin:'10px 15px'}}/>
                        <img src="ANNA3.svg" style={{margin:'10px 15px'}}/>
                    </div>
                    <div className="Threee">
                        <img src="Павлович_2.svg" style={{margin:'10px 15px'}}/>
                        <img src="Тургенев2_2.svg"style={{margin:'10px 15px'}} />
                        <img src="ANNA2.svg"style={{margin:'10px 15px'}}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Polz;
