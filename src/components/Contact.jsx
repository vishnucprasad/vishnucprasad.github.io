import { Col, Container, Row } from "react-bootstrap";
import Header from "./Header";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import MailOutlinedIcon from "@material-ui/icons/MailOutlined";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById("error-message").style.display = "none";
    document.getElementById("sent-message").style.display = "none";
    document.getElementById("loading").style.display = "block";
    fetch("https://form-mailer-vishnu.herokuapp.com/mail", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      credentials: "include",
      body: `data=${JSON.stringify({ name, email, subject, message })}`,
    })
      .then((response) => {
        console.log(response);
        document.getElementById("loading").style.display = "none";
        document.getElementById("sent-message").style.display = "block";
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);
        document.getElementById("loading").style.display = "none";
        document.getElementById("error-message").style.display = "block";
      });
  };

  return (
    <div className="contact-container">
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <section id="contact" className="contact">
          <Container>
            <div className="section-title">
              <h2>Contact</h2>
              <p>Contact Me</p>
            </div>
            <Row className="mt-2">
              <Col md={12} className="d-flex align-items-stretch">
                <div className="info-box">
                  <LocationOnOutlinedIcon className="bx bx-map" />
                  <h3>My Address</h3>
                  <p>
                    Vettukuzhiyil (H), Kanjirappally PIN(686507), Kottayam,
                    Kerala
                  </p>
                </div>
              </Col>
              <Col md={12} className="mt-4 d-flex align-items-stretch">
                <div className="info-box">
                  <ShareOutlinedIcon className="bx bx-share-alt" />
                  <h3>Social Profiles</h3>
                  <div className="social-links">
                    <a
                      href="https://www.facebook.com/iam.mr.cp"
                      className="facebook"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FacebookIcon />
                    </a>
                    <a
                      href="https://wa.me/918157983670?text=Hello%20Vishnu"
                      className="whatsapp"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <WhatsAppIcon />
                    </a>
                    <a
                      href="https://instagram.com/vishnu_c_prasad/"
                      className="instagram"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <InstagramIcon />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mrvishnucp001/"
                      className="linkedin"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
              </Col>
              <Col md={12} className="mt-4 d-flex align-items-stretch">
                <div className="info-box">
                  <MailOutlinedIcon className="bx bx-envelope" />
                  <h3>Email Me</h3>
                  <p>
                    <a href="mailto:mr.vishnucp001@outlook.com">
                      connect.vishnucp@gmail.com
                    </a>
                  </p>
                </div>
              </Col>
              <Col md={12} className="mt-4 d-flex align-items-stretch">
                <div className="info-box">
                  <PhoneInTalkOutlinedIcon className="bx bx-phone-call" />
                  <h3>Call Me</h3>
                  <p>
                    <a href="tel:+918157983670">+91 8157983670</a>
                  </p>
                </div>
              </Col>
            </Row>
            <form
              onSubmit={handleSubmit}
              id="submit-form"
              className="email-form mt-4"
            >
              <div className="form-row">
                <Col md={6} className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Col>
                <Col md={6} className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  required
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div className="mb-3">
                <div className="loading" id="loading">
                  Loading
                </div>
                <div className="error-message text-center" id="error-message">
                  Form submission failed, Can't connect to the server!
                </div>
                <div className="sent-message" id="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </Container>
        </section>
      </motion.div>
    </div>
  );
};

export default Contact;
