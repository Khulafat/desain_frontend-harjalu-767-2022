import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "..//assets/img/header-img.svg"

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Selamat Datang di website POLINEMA PSDKU Lumajang</span>
                        <h1>{`Hi Saya adalah `}<span className="wrap">Mahasiswa</span></h1>
                        <p>Hallo saya adalah mahasiswa Politeknik Negeri Malang PSDKU Lumajang Jurusan Teknologi Informasi</p>
                        <button onClick={() => console.log('connect')}>Ayo kita sambungkan<ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>    
            </Container>    
        </section>
    )
}