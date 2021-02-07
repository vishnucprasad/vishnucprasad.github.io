import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import MyImage from "../images/me.jpg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CodeIcon from "@material-ui/icons/Code";
import AssignmentIcon from "@material-ui/icons/Assignment";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import PeopleIcon from "@material-ui/icons/People";
import { motion } from "framer-motion";
import Header from "./Header";

const About = () => {
  return (
    <div className="about-container">
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <section id="about" className="about">
          <Container className="about-me">
            <div className="section-title">
              <h2>About</h2>
              <p>Learn more about me</p>
            </div>
            <Row>
              <Col lg={4}>
                <img src={MyImage} className="img-fluid" alt="" />
              </Col>
              <Col lg={8} className="content">
                <h3>Web Designer &amp; Developer</h3>
                <p className="font-italic">
                  I describe my self as someone who's persistant, a quick
                  learner and loves problem solving by using simple and scalable
                  solutions.
                </p>
                <Row>
                  <Col lg={6}>
                    <ul>
                      <li>
                        <ArrowForwardIosIcon className="ArrowForwardIosIcon" />
                        <strong>Birthday:</strong> 25 August 2001
                      </li>
                      <li>
                        <ArrowForwardIosIcon className="ArrowForwardIosIcon" />
                        <strong>Phone:</strong> +91 8157983670
                      </li>
                      <li>
                        <ArrowForwardIosIcon className="ArrowForwardIosIcon" />
                        <strong>City:</strong> Kottayam, Kerala
                      </li>
                    </ul>
                  </Col>
                  <Col lg={6}>
                    <ul>
                      <li>
                        <ArrowForwardIosIcon className="ArrowForwardIosIcon" />
                        <strong>Email:</strong> connect.vishnucp@gmail.com
                      </li>
                      <li>
                        <ArrowForwardIosIcon className="ArrowForwardIosIcon" />
                        <strong>Domain:</strong> Web Developer ( MERN - Stack )
                      </li>
                      <li>
                        <ArrowForwardIosIcon className="ArrowForwardIosIcon" />
                        <strong>Freelance:</strong> Available
                      </li>
                    </ul>
                  </Col>
                </Row>
                <p>
                  Logical and results-driven Junior Web Developer dedicated to
                  building and optimizing user-focused websites for customers
                  with various business objectives. Judicious and creative when
                  crafting effective websites and platforms to propel
                  competitive advantage and revenue growth. Technically
                  proficient and analytical problem solver with calm and focused
                  demeanor.
                </p>
                <p>
                  Are you an entrepreneur struggling with your product? I Am
                  here to develop a website for you. All you have to do is to
                  approach me..
                </p>
              </Col>
            </Row>
          </Container>
          <Container className="counts">
            <Row>
              <Col lg={3} md={6}>
                <div className="count-box">
                  <CodeIcon />
                  <span data-toggle="counter-up">13</span>
                  <p>Web Development Projects</p>
                </div>
              </Col>
              <Col lg={3} md={6} className="mt-5 mt-md-0">
                <div className="count-box">
                  <AssignmentIcon />
                  <span data-toggle="counter-up">15</span>
                  <p>Total Projects</p>
                </div>
              </Col>
              <Col lg={3} md={6} className="mt-5 mt-lg-0">
                <div className="count-box">
                  <HeadsetMicIcon />
                  <span data-toggle="counter-up">24</span>
                  <p>Hours Support</p>
                </div>
              </Col>
              <Col lg={3} md={6} className="mt-5 mt-lg-0">
                <div className="count-box">
                  <PeopleIcon />
                  <span data-toggle="counter-up">1</span>
                  <p>Organization</p>
                </div>
              </Col>
            </Row>
          </Container>
          <Container className="skills">
            <div className="section-title">
              <h2>Skills</h2>
            </div>
            <Row className="skills-content">
              <Col lg={6}>
                <div className="progress">
                  <span className="skill">
                    HTML <i className="val">PRO</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <ProgressBar
                      animated
                      now={100}
                      style={{ height: "10px" }}
                    />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    CSS <i className="val">PRO</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <ProgressBar
                      animated
                      now={100}
                      style={{ height: "10px" }}
                    />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    JavaScript <i className="val">ADVANCED</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <ProgressBar animated now={90} style={{ height: "10px" }} />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    React <i className="val">INTERMEDIATE</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <ProgressBar animated now={70} style={{ height: "10px" }} />
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="progress">
                  <span className="skill">
                    HandleBars <i className="val">PRO</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <ProgressBar
                      animated
                      now={100}
                      style={{ height: "10px" }}
                    />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    Node.JS <i className="val">INTERMEDIATE</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <ProgressBar animated now={70} style={{ height: "10px" }} />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    Express <i className="val">INTERMEDIATE</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <ProgressBar animated now={75} style={{ height: "10px" }} />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    Mongo DB <i className="val">INTERMEDIATE</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <ProgressBar animated now={70} style={{ height: "10px" }} />
                  </div>
                </div>
              </Col>
            </Row>
            <div className="section-title">
              <h2>More Skills</h2>
            </div>
            <Row className="skills-content">
              <Col lg={6}>
                <div className="progress">
                  <span className="skill">
                    Git <i className="val">ADVANCED</i>
                  </span>
                  <ProgressBar animated now={90} style={{ height: "10px" }} />
                </div>

                <div className="progress">
                  <span className="skill">
                    C/C++ <i className="val">Beginner</i>
                  </span>
                  <ProgressBar animated now={30} style={{ height: "10px" }} />
                </div>
              </Col>
              <Col lg={6}>
                <div className="progress">
                  <span className="skill">
                    JAVA <i className="val">Beginner</i>
                  </span>
                  <ProgressBar animated now={30} style={{ height: "10px" }} />
                </div>

                <div className="progress">
                  <span className="skill">
                    Python <i className="val">Beginner</i>
                  </span>
                  <ProgressBar animated now={30} style={{ height: "10px" }} />
                </div>
              </Col>
            </Row>
          </Container>
          <Container className="interests">
            <div className="section-title">
              <h2>MERN Stack</h2>
            </div>
            <Row>
              <Col lg={3} md={4}>
                <div className="icon-box">
                  <i
                    className="fas fa-database"
                    style={{ color: "#18d26e" }}
                  ></i>
                  <h3>MongoDB</h3>
                </div>
              </Col>
              <Col lg={3} md={4} className="mt-4 mt-md-0">
                <div className="icon-box">
                  <i
                    className="fab fa-node-js"
                    style={{ color: "#5578ff" }}
                  ></i>
                  <h3>Express</h3>
                </div>
              </Col>
              <Col lg={3} md={4} className="mt-4 mt-md-0">
                <div className="icon-box">
                  <i className="fab fa-react" style={{ color: "#5578ff" }}></i>
                  <h3>React</h3>
                </div>
              </Col>
              <Col lg={3} md={4} className="mt-4 mt-lg-0">
                <div className="icon-box">
                  <i
                    className="fab fa-node-js"
                    style={{ color: "#18d26e" }}
                  ></i>
                  <h3>Node.JS</h3>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </motion.div>
    </div>
  );
};

export default About;
