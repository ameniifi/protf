import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Online Gaming Website"
              description="An online gaming platform, featuring nine diverse games. Leveraged HTML, CSS, and JavaScript to craft a dynamic interface, interactive game pages, and user profiles."
              ghLink="https://github.com/eyamajbri/projet-web"
              demoLink="https://www.linkedin.com/feed/update/urn:li:activity:7202716347363942400/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Tunsian Sign Language Recognition Tool"
              description=" Built an AI model using TensorFlow and MediaPipe to recognize Tunisian Sign Language gestures. Custom dataset creation, annotation, and preprocessing were followed by MediaPipe integration for real-time hand detection"
              ghLink="https://github.com/ameniifi/TSL-App"
              demoLink="https://www.linkedin.com/feed/update/urn:li:activity:7193678710745550849/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AI-powered Gym Tracker"
              description="Using MediaPipe, Numpy, and Trigonometry, I developed a system that provides real-time detection and counting of bicep curls. It calculates joint angles precisely, ensuring accurate rep counting."
              ghLink="https://github.com/ameniifi/AI-Fitness-Tracker"
              demoLink="https://www.linkedin.com/posts/amani-laifi-221b2a1a2_ai-fitnesstech-machinelearning-activity-7200435513080602626-u26o?utm_source=share&utm_medium=member_desktop"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Sentiment Analysis Image Classifier"
              description=" Developed an image classifier using TensorFlow for sentiment analysis. Trained the model to classify images based on sentiment."
              ghLink="https://github.com/ameniifi/ImageClassification-HS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Invoice Management Application"
              description=" Created a robust invoice management platform using Java Swing and a database for data storage. Demonstrated expertise in Java programming for developing a user-friendly interface, ensuring effective invoice tracking and management"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Flutter-Django Tunisian Sign Language App"
              description="I built an app using Flutter and Django that detects Tunisian Sign Language. This project integrates real-time sign language detection with a robust front-end and back-end, showcasing my ability to combine mobile development and machine learning for enhanced communication and accessibility."
              ghLink="https://github.com/ameniifi/Flutter-Tunisian-Sign-Language"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
