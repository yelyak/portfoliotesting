import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import invaders from "../../Assets/Projects/invaders.png";
import titanic from "../../Assets/Projects/titanic.png";
import twoohfoureight from "../../Assets/Projects/2048.png";
import sirtet from "../../Assets/Projects/tetris128.png";
import snek from "../../Assets/Projects/snek.png";
import hangman from "../../Assets/Projects/hangman.png";
import countdowns from "../Assets/Projects/countdowns.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sirtet}
              isBlog={false}
              title="Tetris Extension"
              description="Using Javascript, CSS, and html. 15 users!!"
              demoLink="https://chromewebstore.google.com/detail/sirtet/ihladjbfkfejijomgfncgjgdlkaggkie"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twoohfoureight}
              isBlog={false}
              title="2048 game with react"
              description="A react and javascript game based off 2048."
              demoLink="https://2048-beryl.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={titanic}
              isBlog={false}
              title="Titanic Survival Prediction with streamlit and scikitlearn"
              description="Using machine learning to predict survival of passengers on the titanic."
              ghLink="https://github.com/yelyak/titanic-pred"
              demoLink="http://predictitanic.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snek}
              isBlog={false}
              title="Snake Game"
              description="Hungry snake game made with Python and pygame."
              ghLink="https://github.com/yelyak/snek_game"
              demoLink="https://yelyak.itch.io/snake-game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={invaders}
              isBlog={false}
              title="Space Invaders"
              description="Psuedo-galaga game made with Python and pygame."
              ghLink="https://github.com/yelyak/space_invaders"
              demoLink="https://yelyak.itch.io/space-invaders"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hangman}
              isBlog={false}
              title="Hangman"
              description="Beginner hangman game with html, css, and javascript."
              ghLink="https://github.com/yelyak/hangman"
              demoLink="https://yelyak.github.io/hangman/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={countdowns}
              isBlog={false}
              title="Countdowns"
              description="Countdown, user-friendly anti-procrastination timer made wih html, css, and javascript."
              ghLink="https://github.com/yelyak/countdowns"
              demoLink="https://countdowns-sand.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
