import React from "react";
import "./WatchEverywhere.css";
import {Row, Col} from "react-bootstrap"; 

function WatchEverywhere() {
    return <div className="watchEverywhere"> 
            <div className="watchEverywhere_RowContainer container-fluid">
            <Row>
            <Col className="watchEverywhere_iconbox" align="center">
                <img className="watchEverywhere_icon" src="./Img/Home/Desktop.png" alt=""></img>
                </Col>
                <Col className="watchEverywhere_iconbox" align="left">
                    <h3 className="watchEverywhere_title">Kijk overal waar je ook bent</h3>
                    <p className="watchEverywhere_description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
                </Col>
            </Row>
            </div>
    </div>
}

export default WatchEverywhere
