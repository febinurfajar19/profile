import meter1 from "../assets/img/reactjs logo.png";
import meter2 from "../assets/img/javascript_logo.svg";
import meter3 from "../assets/img/CSS3_logo.svg";
import meter4 from "../assets/img/html-1.svg";
import meter5 from "../assets/img/Matlab_Logo.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>I have experienced work with the following languages.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img
                    style={{ paddingTop: "10px" }}
                    src={meter5}
                    alt="Image"
                  />
                  <h5>Matlab</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>React.JS</h5>
                </div>
              </Carousel>
              <div style={{ paddingTop: "40px", paddingBottom: "0" }}>
                <h4>Others:</h4>
                <div style={{ fontSize: "18px" }}>
                  Languages: Bahasa Indonesia & English (score EPrT: 537)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
