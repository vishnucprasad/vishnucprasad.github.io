import { Col, Container, Row } from "react-bootstrap";
import Header from "./Header";
import { Link, Route } from "react-router-dom";
import { motion } from "framer-motion";
import movieMaster from "../images/portfolio/movie_master.jpg";
import easyCart from "../images/portfolio/easy_cart.jpg";
import netflixClone from "../images/portfolio/netflix_clone.jpg";
import personalWebsite from "../images/portfolio/personal_website.jpg";
import weatherApp from "../images/portfolio/weather_app.jpg";
import whatsappClone from "../images/portfolio/whatsapp_clone.jpg";
import pythonCalculator from "../images/portfolio/python_calculator.jpg";
import javaClaculator from "../images/portfolio/java_calculator.jpg";
import LinkIcon from "@material-ui/icons/Link";

const Portfolio = () => {
  const setActive = (idName) => {
    document.getElementById("filter-all").classList.remove("filter-active");
    document.getElementById("filter-web").classList.remove("filter-active");
    document.getElementById("filter-app").classList.remove("filter-active");
    document.getElementById(idName).classList.add("filter-active");
  };

  return (
    <div className="portfolio-container">
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <section id="portfolio" className="portfolio">
          <Container style={{minHeight: '88vh'}}>
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>My Works</p>
            </div>
            <Row>
              <Col lg={12} className="d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <Link to="/portfolio">
                    <li
                      id="filter-all"
                      className="filter-active"
                      onClick={() => setActive("filter-all")}
                    >
                      {" "}
                      All{" "}
                    </li>
                  </Link>
                  <Link to="/portfolio/web">
                    <li id="filter-web" onClick={() => setActive("filter-web")}>
                      Web
                    </li>
                  </Link>
                  <Link to="/portfolio/app">
                    <li id="filter-app" onClick={() => setActive("filter-app")}>
                      App
                    </li>
                  </Link>
                </ul>
              </Col>
            </Row>
            <Route path="/portfolio" exact>
              <div>
                <Row className="portfolio-container">
                  <Col lg={4} md={6} className="portfolio-item filter-app">
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="portfolio-wrap"
                    >
                      <img src={movieMaster} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>MovieMaster</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                          <a
                            href="https://moviemaster.live"
                            title="Project link"
                          >
                            <LinkIcon />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                  <Col lg={4} md={6} className="portfolio-item filter-app">
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="portfolio-wrap"
                    >
                      <img src={easyCart} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>EasyCart</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                          <a
                            href="https://github.com/Vishnu-C-Prasad/EasyCart"
                            title="Project link"
                          >
                            <LinkIcon />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                  <Col lg={4} md={6} className="portfolio-item filter-app">
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="portfolio-wrap"
                    >
                      <img src={netflixClone} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Netflix Clone</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                          <a
                            href="https://github.com/Vishnu-C-Prasad/Node-Weather-App"
                            title="Project link"
                          >
                            <LinkIcon />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                  <Col lg={4} md={6} className="portfolio-item filter-app">
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="portfolio-wrap"
                    >
                      <img src={whatsappClone} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Whatsapp Clone</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                          <a
                            href="https://github.com/Vishnu-C-Prasad/WhatsApp-Clone"
                            title="Project link"
                          >
                            <LinkIcon />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                  <Col lg={4} md={6} className="portfolio-item filter-app">
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="portfolio-wrap"
                    >
                      <img src={weatherApp} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Node.JS Weather App</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                          <a
                            href="https://github.com/Vishnu-C-Prasad/MySite"
                            title="Project link"
                          >
                            <LinkIcon />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                  <Col lg={4} md={6} className="portfolio-item filter-app">
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="portfolio-wrap"
                    >
                      <img src={personalWebsite} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Personal Website</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                          <a
                            href="https://github.com/Vishnu-C-Prasad/Personal-Website"
                            title="Project link"
                          >
                            <LinkIcon />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                  <Col lg={4} md={6} className="portfolio-item filter-app">
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="portfolio-wrap"
                    >
                      <img src={personalWebsite} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Personal Website with React</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                          <a
                            href="https://github.com/Vishnu-C-Prasad/PersonalWebsite"
                            title="Project link"
                          >
                            <LinkIcon />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                  <Col lg={4} md={6} className="portfolio-item filter-app">
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="portfolio-wrap"
                    >
                      <img
                        src={pythonCalculator}
                        className="img-fluid"
                        alt=""
                      />
                      <div className="portfolio-info">
                        <h4>Calculator Python</h4>
                        <p>App</p>
                        <div className="portfolio-links">
                          <a
                            href="https://github.com/Vishnu-C-Prasad/Tkinter_Calculator"
                            title="Project link"
                          >
                            <LinkIcon />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                  <Col lg={4} md={6} className="portfolio-item filter-app">
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="portfolio-wrap"
                    >
                      <img src={javaClaculator} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Calculator Java</h4>
                        <p>App</p>
                        <div className="portfolio-links">
                          <a
                            href="https://github.com/Vishnu-C-Prasad/swingCalculator"
                            title="Project link"
                          >
                            <LinkIcon />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                </Row>
              </div>
            </Route>
            <Route path="/portfolio/web">
              <div>
                <Row className="portfolio-container">
                  <Col lg={4} md={6} className="portfolio-item filter-app">
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="portfolio-wrap"
                    >
                      <img src={movieMaster} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>MovieMaster</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                          <a
                            href="https://moviemaster.live"
                            title="Project link"
                          >
                            <LinkIcon />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                  <Col lg={4} md={6} className="portfolio-item filter-app">
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="portfolio-wrap"
                    >
                      <img src={easyCart} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>EasyCart</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                          <a
                            href="https://github.com/Vishnu-C-Prasad/EasyCart"
                            title="Project link"
                          >
                            <LinkIcon />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                  <Col lg={4} md={6} className="portfolio-item filter-app">
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="portfolio-wrap"
                    >
                      <img src={netflixClone} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Netflix Clone</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                          <a
                            href="https://github.com/Vishnu-C-Prasad/Node-Weather-App"
                            title="Project link"
                          >
                            <LinkIcon />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                  <Col lg={4} md={6} className="portfolio-item filter-app">
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="portfolio-wrap"
                    >
                      <img src={whatsappClone} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Whatsapp Clone</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                          <a
                            href="https://github.com/Vishnu-C-Prasad/WhatsApp-Clone"
                            title="Project link"
                          >
                            <LinkIcon />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                  <Col lg={4} md={6} className="portfolio-item filter-app">
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="portfolio-wrap"
                    >
                      <img src={weatherApp} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Node.JS Weather App</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                          <a
                            href="https://github.com/Vishnu-C-Prasad/MySite"
                            title="Project link"
                          >
                            <LinkIcon />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                  <Col lg={4} md={6} className="portfolio-item filter-app">
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="portfolio-wrap"
                    >
                      <img src={personalWebsite} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Personal Website</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                          <a
                            href="https://github.com/Vishnu-C-Prasad/Personal-Website"
                            title="Project link"
                          >
                            <LinkIcon />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                  <Col lg={4} md={6} className="portfolio-item filter-app">
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="portfolio-wrap"
                    >
                      <img src={personalWebsite} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>Personal Website with React</h4>
                        <p>Web</p>
                        <div className="portfolio-links">
                          <a
                            href="https://github.com/Vishnu-C-Prasad/PersonalWebsite"
                            title="Project link"
                          >
                            <LinkIcon />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                </Row>
              </div>
            </Route>
            <Route path="/portfolio/app"></Route>
            <div>
              <Row className="portfolio-container">
                <Col lg={4} md={6} className="portfolio-item filter-app">
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="portfolio-wrap"
                  >
                    <img src={pythonCalculator} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Calculator Python</h4>
                      <p>App</p>
                      <div className="portfolio-links">
                        <a
                          href="https://github.com/Vishnu-C-Prasad/Tkinter_Calculator"
                          title="Project link"
                        >
                          <LinkIcon />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </Col>
                <Col lg={4} md={6} className="portfolio-item filter-app">
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="portfolio-wrap"
                  >
                    <img src={javaClaculator} className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Calculator Java</h4>
                      <p>App</p>
                      <div className="portfolio-links">
                        <a
                          href="https://github.com/Vishnu-C-Prasad/swingCalculator"
                          title="Project link"
                        >
                          <LinkIcon />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </motion.div>
    </div>
  );
};

export default Portfolio;
