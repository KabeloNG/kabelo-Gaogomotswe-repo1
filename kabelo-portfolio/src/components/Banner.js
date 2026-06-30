import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfilePicture from "../assets/img/ProfilePic.jpg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const toRotate = ["Web Developer & Designer", "AI & ML Engineer", "Software Engineer"];

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    document.title = "Kabelo's Portfolio";
  }, []);

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(prev => prev + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [tick, delta])

  const scrollToContact = () => {
    const contactSection = document.getElementById("connect");

    if (contactSection){
      contactSection.scrollIntoView({
        behavior: "smooth",
        block:"start",
      });
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Kabelo : `} <span className="txt-rotate" dataPeriod="1000" data-rotate='["Web Developer & Designer", "AI & ML Engineer", "Software Engineer"]'><span className="wrap">{text}</span></span></h1>
                  <p>A results‐driven Software Engineer and AI & ML Enthusiast with experience in application development, scripting and
                    coding,web application design, product testing and deployment, UI testing, and requirements
                    gathering. Proven aptitude for implementing innovative solutions to enhance efficiency, improve
                    customer satisfaction, and achieve financial savings.</p>
                  <button onClick={scrollToContact}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={ProfilePicture} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
