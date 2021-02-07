import { Col, Container, Row } from "react-bootstrap";
import Header from "./Header";
import { Link } from "react-router-dom";
import PublicIcon from "@material-ui/icons/Public";
import DevicesIcon from "@material-ui/icons/Devices";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import { motion } from "framer-motion";

const Services = () => {
    return(
        <div className="services-container">
        <Header />
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <section id="services" className="services">
            <Container>
              <div className="section-title">
                <h2>Services</h2>
                <p>My Services</p>
              </div>
              <Row>
                <Col lg={4} md={6} className="d-flex align-items-stretch">
                  <div className="icon-box">
                    <div className="icon">
                      <PublicIcon />
                    </div>
                    <h4>
                      <Link>Web Development</Link>
                    </h4>
                    <p>
                      Create beautiful and user friendly sites by using HTML, CSS,
                      javaScript, Bootstrap, React, Node.js, Express, Mongo DB.
                  </p>
                  </div>
                </Col>
                <Col lg={4} md={6} className="d-flex align-items-stretch mt-4 mt-md-0">
                  <div className="icon-box">
                    <div className="icon">
                      <DevicesIcon />
                    </div>
                    <h4>
                      <Link>Responsive Design</Link>
                    </h4>
                    <p>Create mobile responsive sites at a professional level</p>
                  </div>
                </Col>
                <Col lg={4} md={6} className="d-flex align-items-stretch mt-4 mt-lg-0">
                  <div className="icon-box">
                    <div className="icon">
                      <HeadsetMicIcon />
                    </div>
                    <h4>
                      <Link>24/7 Support</Link>
                    </h4>
                    <p>Strong support, communicate ideas in a brief way</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </motion.div>
      </div>
    );
}

export default Services;