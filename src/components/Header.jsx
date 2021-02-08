import { Accordion, Card, Button, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MenuIcon from "@material-ui/icons/Menu";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <header id="header" className="header-top d-none d-md-flex">
        <Container>
          <h1>
            <Link to="/">Vishnu C Prasad</Link>
          </h1>
          <h2>
            I'm a passionate <span>Web developer</span> from India
          </h2>

          <nav className="nav-menu d-none d-sm-none d-md-block d-lg-block">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="about-nav">
                <Link to="/about">About</Link>
              </li>
              <li className="resume-nav">
                <Link to="/resume">Resume</Link>
              </li>
              <li className="services-nav">
                <Link to="/services">Services</Link>
              </li>
              <li className="portfolio-nav">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="contact-nav">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="social-links">
            <a
              href="https://www.facebook.com/iam.mr.cp"
              title="facebook"
              className="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://wa.me/918157983670?text=Hello%20Vishnu"
              title="whatsapp"
              className="Whatsapp"
            >
              <WhatsAppIcon />
            </a>
            <a
              href="https://instagram.com/vishnu_c_prasad/"
              title="instagram"
              className="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/mrvishnucp001/"
              title="linkedin"
              className="Linkedin"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/Vishnu-C-Prasad"
              title="GitHub"
              className="GitHub"
            >
              <GitHubIcon />
            </a>
          </div>
        </Container>
      </header>
      <div className="mobile-header d-block d-sm-block d-md-none">
        <Accordion>
          <Card className="mobile-nav">
            <Card.Header>
              <Row>
                <h1>
                  <Link to="/">Vishnu C Prasad</Link>
                </h1>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="0"
                  className="mobile-nav-toggle text-decoration-none ml-auto mb-1 py-0"
                >
                  <MenuIcon />
                </Accordion.Toggle>
              </Row>
            </Card.Header>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="about-nav">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="resume-nav">
                    <Link to="/resume">Resume</Link>
                  </li>
                  <li className="services-nav">
                    <Link to="/services">Services</Link>
                  </li>
                  <li className="portfolio-nav">
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
                  <li className="contact-nav">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </motion.div>
  );
};

export default Header;
