import { Accordion, Card, Button } from 'react-bootstrap'
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';

const Home = () => {
  return (
    <div className="Home">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <header id="header" className="header-tops">
          <Container>
            <h1>
              <Link to="/">Vishnu C Prasad</Link>
            </h1>
            <h2>
              I'm a passionate <span>Web developer</span> from India
            </h2>
            <nav className="nav-menu d-none d-sm-none d-md-block d-lg-block">
              <ul>
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/resume">Resume</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>

            <div className="social-links">
              <a
                href="https://www.facebook.com/iam.mr.cp"
                title="Facebook"
                className="Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://wa.me/918157983670?text=Hello%20Vishnu"
                title="Whatsapp"
                className="Whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="https://instagram.com/vishnu_c_prasad/"
                title="Instagram"
                className="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/mrvishnucp001/"
                title="Linkedin"
                className="Linkedin"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/Vishnu-C-Prasad"
                title="GitHub"
                className="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
            </div>
          </Container>
        </header>
      </motion.div>
      <div className="mobile-header d-block d-sm-block d-md-none">
        <Accordion>
          <Card className="mobile-nav">
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="0"
                className="mobile-nav-toggle float-right text-decoration-none"
              >
                <MenuIcon />
              </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ul>
                  <li className="active">
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
    </div>
  );
};

export default Home;
