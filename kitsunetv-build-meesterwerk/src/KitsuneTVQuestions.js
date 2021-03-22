import React from "react";
import "./KitsuneTVQuestions.css";
import {Accordion, Card} from "react-bootstrap";

function KitsuneTVQuestions() {
    return <div className="kitsuneTVQuestions">
        <div className="container-fluid kitsuneTvQuestions_container">
        <h1>Veelgestelde vragen</h1>
        <Accordion defaultActiveKey="1" align="center">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" align="left">
                Wat kan je kijken op kitsune TV+
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0" align="left">
                <Card.Body align="left">Bij Kitsune TV+ hebben we een groot aanbod aan films. Dit aanbod kunnen we behouden omdat we geen films verwijderen, hierdoor kan je altijd jouw favoriete films terug kijken wanneer jij dat graag wilt. </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1" align="left">
                Wat is kitsune TV+
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1" align="left">
                <Card.Body align="left">Kitsune TV+ is een streamingdienst voor films vanuit binnen- en buitenland met een groot aanbod aan de nieuwste films mis je nooit meer wat.
Kitsune TV+ is gemaakt om films van een locale nas te streamen buiten het lokale netwerk, door een grote collectie films en deze te willen delen kan je doormiddel van Gebruik van Kitsune TV+ deze films benaderen.
Bij ons hoef je dan ook niet te betalen om te kijken maar, kan je ervoor kiezen om ons team een vrije gift te doen.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2" align="left">
                Word er content verwijderd van kitsune TV+
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2" align="left">
                <Card.Body align="left">Bij ons worden er geen films verwijderd. hierdoor kan je altijd jouw favoriete films terugkijken.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3" align="left">
                Op welke apparaten kan ik kitsune TV+ bekijken
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3" align="left">
                <Card.Body align="left">Je kijkt naar Kitsune TV+ via je laptop, tv of chromecast</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        </div>    
    </div>
}

export default KitsuneTVQuestions
