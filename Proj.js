import React, { Component } from "react";
import "../Images4.css";
class Proj extends Component {
    render() {
        return (
            <div className="image-wrappper">
                <h1>Проекты / </h1>
                <img src="plus.svg" style={{
                    position:"absolute",left:"750px",top:"50px"
                }} />
                <div className="Onne">
                    <img src="Proj.svg" style={{margin:'10px 15px'}} />
                    <img src="Proj.svg" style={{margin:'10px 15px'}}/>
                    <img src="Proj.svg" style={{margin:'10px 15px'}} />
                </div>
                <div className="Twwo">
                    <img src="Proj.svg" style={{margin:'10px 15px'}}/>
                    <img src="Proj.svg" style={{margin:'10px 15px'}}/>
                    <img src="Proj.svg" style={{margin:'10px 15px'}}/>
                </div>
                <div className="Thrree">
                    <img src="Proj.svg" style={{margin:'10px 15px'}}/>
                    <img src="Proj.svg" style={{margin:'10px 15px'}}/>
                    <img src="Proj.svg" style={{margin:'10px 15px'}}/>
                    
                </div>
            </div>
        );
    }
}
export default Proj;
