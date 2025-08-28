import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date=""
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Fresher
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {/* company name */}
              </h4>
              <p>
                Enthusiastic and detail-oriented Frontend Developer with a strong foundation in HTML, CSS, and JavaScript, and hands-on experience with modern frameworks like React.js. Currently expanding skills in the full MERN stack (MongoDB, Express.js, React.js, Node.js) to become a proficient full-stack developer. Passionate about building responsive, user-friendly web interfaces and continuously learning the latest technologies to create seamless user experiences. Looking for opportunities to apply and grow technical skills in a collaborative and dynamic environment.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;