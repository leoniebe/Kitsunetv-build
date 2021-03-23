import React from "react";
import "./AboutKitsuneTv.css";
import {Row, Col} from "react-bootstrap";

function AboutKitsuneTv() {
    return <div className="aboutKitsuneTv">
        <div className="aboutKitsuneTV_container container-fluid">
            <div>
            <h2 className="aboutKitsuneTv_About">Wat is Kitsune TV+?</h2>
            <p className="aboutKitsuneTv_aboutDescription">Kitsune TV+ is een dienst waarbij een lokale nas</p>
            </div>
            <div className="aboutKitsuneTV_RowContainer container-fluid">
            <Row>
                <Col className="aboutKitsuneTv_iconbox" align="center">
                    <img className="aboutKitsuneTv_icon" src="./Img/icons/clapperboard.svg" alt=""></img>
                    <h3 className="aboutKitsuneTv_title">Films</h3>
                    <p className="aboutKitsuneTv_description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.  </p>
                </Col>
                <Col className="aboutKitsuneTv_iconbox" align="center">
                    <img className="aboutKitsuneTv_icon" src="./Img/icons/tv-monitor.svg" alt=""></img>
                    <h3 className="aboutKitsuneTv_title">Overal te kijken</h3>
                    <p className="aboutKitsuneTv_description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.  </p>
                </Col>
                <Col className="aboutKitsuneTv_iconbox" align="center">
                    <img className="aboutKitsuneTv_icon" src="./Img/icons/money-bag.svg" alt=""></img>
                    <h3 className="aboutKitsuneTv_title">Geen kosten</h3>
                    <p className="aboutKitsuneTv_description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.  </p>
                </Col>
            </Row>
            </div>
        </div>     
    </div>
}

export default AboutKitsuneTv