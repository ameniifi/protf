import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amani Laifi </span>
            from <span className="purple"> Tunis, Tunisia.</span>
            <br />
            I am currently a second-year software engineering student at ENSI.
            <br />
            I have completed the preparatory studies at  the Preparatory Institute of engineering studies of tunis.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working out
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life is a game, play it with passion or not at all."{" "}
          </p>
          <footer className="blockquote-footer">Amani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
