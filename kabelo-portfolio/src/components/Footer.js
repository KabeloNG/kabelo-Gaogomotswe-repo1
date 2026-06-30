import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import transparentlogo from "../assets/img/transparentlogo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col xs={12} sm={6}>
            <img src={transparentlogo} alt="Kabelo portfolio logo" />
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kabelo-gaogomotswe-8284a8348" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn profile" /></a>
              <a href="https://web.facebook.com/profile.php?id=100005386905759" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Facebook profile" /></a>
              <a href="https://www.instagram.com/kabelo.ng/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Instagram profile" /></a>
            </div>
            <p>Copyright kbCodes.dev {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
