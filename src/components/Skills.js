import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bpbd from "..//assets/img/bpbd.png";
import lumajang from "..//assets/img/logo-lumajang.png";
import sigempal from "..//assets/img/sigempal.png";
import hidupKehutanan from "..//assets/img/hidupKehutanan.png";
import kominfo from "..//assets/img/kominfo.png";

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
                                Lembaga Pemerintah
                            </h2>
                            <p>Kabupaten Lumajang</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={bpbd} alt="image1" />
                                </div>
                                <div className="item">
                                    <img src={lumajang} alt="image2" />
                                </div>
                                <div className="item">
                                    <img src={sigempal} alt="image3" />
                                </div>
                                <div className="item">
                                    <img src={hidupKehutanan} alt="image4" />
                                </div>
                                <div className="item">
                                    <img src={kominfo} alt="image4" />
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}   