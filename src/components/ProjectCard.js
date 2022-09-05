import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, jobdesk }) => {
  return (
    <Col size={15} sm={5} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <p style={{ fontSize: "13px", marginBottom: "-5px" }}>{title}</p>
          <span>{description}</span>
          <div>
            <p>{jobdesk}</p>
          </div>
        </div>
      </div>
    </Col>
  );
};
