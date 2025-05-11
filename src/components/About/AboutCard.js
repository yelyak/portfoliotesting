import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kayley Kwok </span>
            from <span className="purple"> Hong Kong, China.</span>
            <br />
            I am currently a highschool student studying in VSA, and in the 2028 SPARC program.
            <br />
            I speak Chinese, Cantonese, English fluently; and learning Spanish. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Piano
            </li>
            <li className="about-activity">
              <ImPointRight /> Creative Writing
            </li>
            <li className="about-activity">
              <ImPointRight /> Read Outdated Non-Fic Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life has no limitations, except the ones you make."{" "}
          </p>
          <footer className="blockquote-footer">Les Brown</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
