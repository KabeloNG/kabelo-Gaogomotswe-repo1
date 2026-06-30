import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Passionate Software Developer and Data Enthusiast fluent in Java,Python,JavaScript and PHP programming languages.Skilled in React library,Spring Boot & Laravel Frameworks.Comfortable using tools like Power BI,Figma and Git for Data Analysis,Web Design and version control & Collaboration respectively.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Java, Python, PHP, and JavaScript skill level indicator" />
                                <h5>Java,Python,PHP&JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="React.js skill level indicator" />
                                <h5>ReactJs</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Spring Boot skill level indicator" />
                                <h5>SpringBoot</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Laravel skill level indicator" />
                                <h5>Laravel</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Database management skill level indicator" />
                                <h5>Database Management</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Power BI skill level indicator" />
                                <h5>Power Bi</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Git version control skill level indicator" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Figma design skill level indicator" />
                                <h5>Figma</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Decorative background accent" />
    </section>
  )
}
