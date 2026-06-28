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
          <Col size={12} sm={6}>
            <img src={transparentlogo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="www.linkedin.com/in/kabelo-gaogomotswe-8284a8348"><img src={navIcon1} alt="" /></a>
              <a href="https://web.facebook.com/profile.php?id=100005386905759"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/kabelo.ng/"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright kbCodes.dev {new Date().getFullYear()}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
