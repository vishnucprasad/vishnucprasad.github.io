import Header from "./Header";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div className="resume-container">
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <section id="resume" className="resume">
          <Container>
            <div className="section-title">
              <h2>Resume</h2>
              <p>Check My Resume</p>
            </div>
            <Row>
              <Col lg={6}>
                <h3 className="resume-title">Summary</h3>
                <div className="resume-item pb-0">
                  <h4>Vishnu C Prasad</h4>
                  <p>
                    <em>
                      Logical and results-driven Junior Web Developer dedicated
                      to building and optimizing user-focused websites for
                      customers with various business objectives. Judicious and
                      creative when crafting effective websites and platforms to
                      propel competitive advantage and revenue growth.
                      Technically proficient and analytical problem solver with
                      calm and focused demeanor.
                    </em>
                  </p>
                  <p>
                    <ul>
                      <li>Kanjirappally, Kottaym, Kerala</li>
                      <li>+91 8157983670</li>
                      <li>connect.vishnucp@gmail.com</li>
                    </ul>
                  </p>
                </div>
                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Open Meterial Education</h4>
                  <h5>2020 - Present</h5>
                  <p>
                    <em>Open Meterial Education</em>
                  </p>
                  <p>
                    Learned HTML, CSS, JavaScript, jQuery, Bootstrap, React,
                    AJAX, Node.js, Express, MongoDB, C, Java, Python and Git
                    from Open Meterial Education
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Diploma</h4>
                  <h5>2018 - 2019</h5>
                  <p>
                    <em>
                      LBS Center for Science and Technology, Pampady, Kottayam
                    </em>
                  </p>
                  <p>
                    Completed Diploma in Computer Application (DCA) at LBS
                    Centre for science and technology
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>Web Development</h4>
                  <h5>2020 - Present</h5>
                  <p>
                    <em>Freelance </em>
                  </p>
                  <p>
                    <ul>
                      <li>
                        Create beautiful and user friendly sites by using HTML,
                        CSS, javaScript, Bootstrap, React, Node.js, Express,
                        Mongo DB.
                      </li>
                      <li>
                        Create mobile responsive sites at a professional level.
                      </li>
                    </ul>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </motion.div>
    </div>
  );
};

export default Resume;
