import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Ruang_Guru_logo.png";
import projImg2 from "../assets/img/telkomakses.png";
import projImg3 from "../assets/img/logo telkom indonesia.jpg";
import projImg4 from "../assets/img/expert course logo.jpg";
import projImg5 from "../assets/img/digital signal processing.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Experiences = () => {
  const projects = [
    {
      title: "Front End Engineer",
      description: "Ruangguru Bootcamp | Online | July 2022 - August 2022",
      imgUrl: projImg1,
    },
    {
      title: "Area Site Operation Admin",
      description: "PT Telkom Akses | Bandung | July 2021 - August 2021",
      imgUrl: projImg2,
    },
    {
      title: "Network, Civil, Mechanical & Electronical Intern",
      description: "PT Telkom Indonesia | Sukabumi | July 2020 - August 2020",
      imgUrl: projImg3,
    },
    {
      title: "Tutor",
      description: "Expert Course | Bandung | January 2020 - March 2020",
      imgUrl: projImg4,
    },
    {
      title: "Lab Work Assistant",
      description:
        "Digital Signal Processing Lab. | Telkom University | September 2021 - June 2022",
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="experience" id="experiences">
      <Container>
        <Row>
          <Col size={15}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h3>Experiences</h3>
                  <br />

                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
