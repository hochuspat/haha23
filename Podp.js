import React, { Component } from "react";
import "../Images5.css";
class Podp extends Component {
    render() {
        return (
            <div className="images">
                <h1>Новые</h1>
                <h2>Обработанные</h2>
                <div className="papa">
                    <img src="Папка.svg " style={{ scale: "1." }} />
                </div>
                <div className="image-wrapper">
                    <div
                        className="One"
                        style={{ margin: "5px 40px 0px 20px" }}
                    >
                        <img
                            src="Doc.svg"
                            style={{
                                margin: "0px 10px",
                                width: "260px",
                                height: "291px",
                            }}
                        />
                        <img
                            src="Doc.svg"
                            style={{
                                margin: "0px 10px",
                                width: "260px",
                                height: "291px",
                            }}
                        />
                        <img
                            src="Doc.svg"
                            style={{
                                margin: "0px 10px",
                                width: "260px",
                                height: "291px",
                            }}
                        />
                    </div>{" "}
                    <div
                        className="Two"
                        style={{ margin: "-18px 0px 0px 20px" }}
                    >
                        <img
                            src="Doc.svg"
                            style={{
                                margin: "0px 10px",
                                width: "260px",
                                height: "291px",
                            }}
                        />
                        <img
                            src="Doc.svg"
                            style={{
                                margin: "0px 10px",
                                width: "260px",
                                height: "291px",
                            }}
                        />
                        <img
                            src="Doc.svg"
                            style={{
                                margin: "0px 10px",
                                width: "260px",
                                height: "291px",
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default Podp;
