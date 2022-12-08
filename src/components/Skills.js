import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "..//assets/img/meter1.svg";
import meter2 from "..//assets/img/meter2.svg";
import meter3 from "..//assets/img/meter3.svg";
import colorSharp from "..//assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max : 4000, min: 3000 },
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
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col size={12}>
                        <div className="skill-bx wow zoomIn">
                            <h2>
                                Logo
                            </h2>
                            <p>alkdhas0<br></br> Lumajang</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="image1" />
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="image2" />
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="image3" />
                                    <h5>Akuntasi</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="image4" />
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="colorSharp"/>
        </section>
    )
}   