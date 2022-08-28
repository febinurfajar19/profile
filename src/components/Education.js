import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import telyu from "../assets/img/Logo_Telkom_University_potrait.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Education = () => {
  return (
    <section className="education" id="education">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={telyu}
                  alt="Telyu"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <p>
                    <b>Major</b>: Telecommunication Engineering (2018-2022)
                  </p>
                  <p>
                    <b>GPA</b>: 3,85/4,00
                  </p>
                  <p>
                    <b>Final Project</b>: "Glaucoma Detection Based on Retina
                    Fundus Image Using Local Binary Pattern and Support Vector
                    Machine"
                  </p>
                  <p>
                    <b>Award & Achievements</b>:<br />
                    1. Scholarship Awardee of Google IT Support Certificate
                    (2022) <br />
                    2. SINTA 2 Journal publication (2022)
                    <br />
                    3. Scholarship Awardee of One Pipe Education System (OPES)
                    Telkom University (2018-2022)
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
