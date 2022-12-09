import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import semeru from "../assets/img/Wisata/01 Gunung Semeru.png";
import senduro from "../assets/img/Wisata/02 Antrukan Senduro.png";
import kapasBiru from "../assets/img/Wisata/03 Air Terjun Kapas Biru.png";
import puncakB29 from "../assets/img/Wisata/04 Puncak B29.png";
import selokambang from "../assets/img/Wisata/05 Selokambang.png";
import kumbolo from "../assets/img/Wisata/06 ranu kumbolo.png";
import omahNusantara from "../assets/img/Hotel/01 omah nusantara.png";
import RRkost from "../assets/img/Hotel/02 RR kost syariah.png";
import hotelPrima from "../assets/img/Hotel/03 hotel prima.png";
import hotelMaharaja from "../assets/img/Hotel/04 hotel maharaja.png";
import hotelLumajang from "../assets/img/Hotel/05 hotel lumajang.png";
import griyaBunda from "../assets/img/Hotel/06 griya bunda.png";
import kantorBupati from "../assets/img/Lembaga/01 Kantor Bupati.png";
import KHAnasMachfud from "../assets/img/Lembaga/02 Masjid KH Anas Machfud.png";
import drHaryoto from "../assets/img/Lembaga/03 Rumah Sakit dr Haryoto.png";
import Perpus from "../assets/img/Lembaga/04 Perpustakaan Daerah.png";
import Pengadilan from "../assets/img/Lembaga/05 Pengadilan Agama Lumajang.png";
import dinasPerdagangan from "../assets/img/Lembaga/06 Dinas Perdagangan.png";
import bananaPrince from "../assets/img/Kuliner/01 Banana Prince.png";
import mieSemeru from "../assets/img/Kuliner/02 Mie Semeru.png";
import ayamGeprekMakRumpit from "../assets/img/Kuliner/03 Ayam Geprek Mak Rumpit.png";
import mieGembeng from "../assets/img/Kuliner/04 Mie Gembeng.png";
import waffelVision from "../assets/img/Kuliner/05 Waffel Vision Vista.png";
import valeToast from "../assets/img/Kuliner/06 Vale Toast.png";
import tapePisang from "../assets/img/Oleh/01 tape pisang.png";
import kripikKulitPisang from "../assets/img/Oleh/02 kripik kulit pisang.png";
import kripikSalak from "../assets/img/Oleh/03 kripik kulit salak.png";
import keripikTalas from "../assets/img/Oleh/04 keripik talas.png";
import rambakPisang from "../assets/img/Oleh/05 rambak pisang.png";
import keripikPisang from "../assets/img/Oleh/06 keripik pisang jati arum.png";
import Candil from "../assets/img/Event/01 Candil.png";
import lumajangFashionCarnival from "../assets/img/Event/02 lumajang fashion carnival 2022.png";
import balosNightCarnival from "../assets/img/Event/03 Balos Night Carnival.png";
import festivalBanjirTahu from "../assets/img/Event/04 festival banjir tahu.png";
import pawaiJaranKencak from "../assets/img/Event/05 pawai jaran kencak.png";
import wisataCacak from "../assets/img/Event/06 Grand Final Duta Wisata Cacak.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const wisata = [
        {
            title: "Gunung Semeru",
            description: "Ngampo, Pasrujambe, Kec. Pasrujambe, Kabupaten Lumajang, Jawa Timur",
            imgUrl: semeru,
          },
          {
            title: "Antrukan Menjangan Senduro",
            description: "Krajan, Wonocepokoayu, Kec. Senduro, Kabupaten Lumajang, Jawa Timur 67361",
            imgUrl: senduro,
          },
          {
            title: "Air Terjun Kapas Biru ",
            description: "Mulyoarjo, Pronojiwo, Kec. Pronojiwo, Kabupaten Lumajang, Jawa Timur 67374",
            imgUrl: kapasBiru,
          },
          {
            title: "Puncak B29",
            description: "Argosari, Senduro, Nganjir, Sariwani, Kec. Sukapura, Kabupaten Lumajang, Jawa Timur 67254",
            imgUrl: puncakB29,
          },
          {
            title: "Pemandian Selokambang",
            description: "Mulyoarjo, Pronojiwo, Kec. Pronojiwo, Kabupaten Lumajang, Jawa Timur 67374",
            imgUrl: selokambang,
          },
          {
            title: "Ranu Kumbolo",
            description: "Tulungrejo, Pasrujambe, Kec. Pasrujambe, Kabupaten Lumajang, Jawa Timur",
            imgUrl: kumbolo,
          },
    ]

    const hotel = [
        {
            title: "Omah Nusantara Homestay",
            description: "167, Jl. Serma Dohir No.167, Sumberagung, Sumberrejo, Kec. Senduro, Kabupaten Lumajang, Jawa Timur 67361",
            imgUrl: omahNusantara,
          },
          {
            title: "RR Kost Syariah",
            description: "Gang dr. Ketut Masuk -+ 20 meter, Jl. Gajah Mada No.44, Kepuharjo, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67316",
            imgUrl: RRkost,
          },
          {
            title: "Hotel Prima",
            description: "jl. Ir. Soekarno Hatta No. 69, Sukodono, Biting Dua, Kutorenon, Kec. Lumajang, Kab. Lumajang, Jawa Timur 67352",
            imgUrl: hotelPrima,
          },
          {
            title: "Hotel Maharaja",
            description: "Jl.Raya Klakah No.99,Curah Pakem,Kec.Klakah, Kab.Lumajang",
            imgUrl: hotelMaharaja,
          },
          {
            title: "Hotel Lumajang",
            description: "Jalan Jendral Ahmad Yani N0.185, Tompokersan, Kec. Lumajang, Kab. Lumajang, Jawa Timur 67311",
            imgUrl: hotelLumajang,
          },
          {
            title: "Homestay Griya Bunda Family",
            description: "Perumahan Grand ZamZam RKS, Jl. Brigjen Katamso No.7, Tompokersan, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67316",
            imgUrl: griyaBunda,
          },
    ]

    const lembaga = [
        {
            title: "Kantor Bupati Lumajang ",
            description: "Jl. Alun-Alun Utara No.7, Rogotrunan, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67316",
            imgUrl: kantorBupati,
          },
          {
            title: "Masjid Agung K.H. Anas Machfudz LTM.NU",
            description: "Jl. Abu Bakar Kelurahan No.1, Citrodiwangsan, Ditotrunan, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67313",
            imgUrl: KHAnasMachfud,
          },
          {
            title: "RSUD Dr. Haryoto Lumajang",
            description: "Jl. Jendral Ahmad Yani No.5, Tompokersan, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67316",
            imgUrl: drHaryoto,
          },
          {
            title: "Perpustakaan Mula Malurung",
            description: "Jl. Jendral Ahmad Yani No.5, Tompokersan, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67316 ",
            imgUrl: Perpus,
          },
          {
            title: "Pengadilan Agama Lumajang",
            description: "Jalan Soekarno Hatta No 11, Sukodono, Biting Dua, Kutorenon, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67352",
            imgUrl: Pengadilan,
          },
          {
            title: "Dinas Perdagangan Kabupaten Lumajang",
            description: "Jl. Jendral Ahmad Yani No.209, Sukodono, Kutorenon, Kec. Sukodono, Kabupaten Lumajang, Jawa Timur 67352",
            imgUrl: dinasPerdagangan,
          },
    ]

    const Kuliner = [
        {
            title: "Banana Prince",
            description: "Jl. Argopuro Gg. 3 No.17, Citrodiwangsan, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67316",
            imgUrl: bananaPrince,
          },
          {
            title: "Mie Semeru",
            description: "Jl. Komodor Yos Sudarso No.40, Citrodiwangsan, Kec. Lumajang, Kabupaten Lumajang",
            imgUrl: mieSemeru,
          },
          {
            title: "Ayam Geprek Mak Rumpit",
            description: "Jl. Kyai Ghozali No.96, Rogotrunan, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67316",
            imgUrl: ayamGeprekMakRumpit,
          },
          {
            title: "Mie Gembeng",
            description: "Jl. Jendral Panjaitan No.7, Citrodiwangsan Lumajang ",
            imgUrl: mieGembeng,
          },
          {
            title: "Vision Vista Lumajang",
            description: "Jl. Sastrodikoro No.70, Citrodiwangsan,Kabupaten. Lumajang",
            imgUrl: waffelVision,
          },
          {
            title: "Vale Toast",
            description: "Jl. Gajah Mada No.10a, Kepuharjo, Kec. Lumajang, Kabupaten Lumajang, Jawa Timur 67316",
            imgUrl: valeToast,
          },
    ]

    const oleh = [
        {
            title: "Tape Pisang",
            description: "Dusun Kalibendo Utara, RT.03/RW.03, Kalibendo Utara, Kalibendo, Kec. Pasirian, Kabupaten Lumajang, Jawa Timur 67372",
            imgUrl: tapePisang,
          },
          {
            title: "Kerupuk Kulit Pisang",
            description: "Dusun Kalibendo Utara, RT.03/RW.03, Kalibendo Utara, Kalibendo, Kec. Pasirian, Kabupaten Lumajang, Jawa Timur 67372",
            imgUrl: kripikKulitPisang,
          },
          {
            title: "Kripik Salak",
            description: "Lumajang-Pronojiwo, Jawa Timur",
            imgUrl: kripikSalak,
          },
          {
            title: "Kripik Talas",
            description: "Dusun Tulus Rejo I, RT.03/RW.02, Dusun Tulusrejo, Tempeh Lor, Kec. Tempeh, Kabupaten Lumajang, Jawa Timur 67371",
            imgUrl: keripikTalas,
          },
          {
            title: "Rambak Pisang",
            description: "Dusun Tulus Rejo I, RT.03/RW.02, Dusun Tulusrejo, Tempeh Lor, Kec. Tempeh, Kabupaten Lumajang, Jawa Timur 67371",
            imgUrl: rambakPisang,
          },
          {
            title: "Kripik pisang jati arum",
            description: " jl. mayor jendral sukartiko, no.240A, jogotrunan, kec lumajang ,kabupaten lumajang,jawa timur",
            imgUrl: keripikPisang,
          },
    ]

    const event = [
        {
            title: "Candil",
            description: "Candipuro - Lumajang",
            imgUrl: Candil,
          },
          {
            title: "Lumajang Fashion Carnival 2022",
            description: "Kawasan Wonorejo Terpadu, Lumajang",
            imgUrl: lumajangFashionCarnival,
          },
          {
            title: "Balos Night Carnival Exotica Mahameru",
            description: "Alun-Alun Kabupaten Lumajang",
            imgUrl: balosNightCarnival,
          },
          {
            title: "Festival Banjir Tahu",
            description: "Lapangan Desa Kunir Kidul",
            imgUrl: festivalBanjirTahu,
          },
          {
            title: "Pawai Jaran Kencak",
            description: "Depan Pendopo Arya Wiraraja, Lumajang",
            imgUrl: pawaiJaranKencak,
          },
          {
            title: "Grand Final Duta Wisata Cacak Yuk Lumajang",
            description: "Depan Pendopo Arya Wiraraja, Lumajang",
            imgUrl: wisataCacak,
          },
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Destinasi Lokasi</h2>
                                    <p>Berbagai macam destinasi lokasi yang terdapat di sekitaran kabupaten Lumajang</p>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Tempat wisata</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Hotel</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Lembaga Pemerintahan</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fourth">Kuliner</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fifth">Oleh - Oleh</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="sixth">Event</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <Tab.Pane eventKey="first">
                                        <Row>
                                                {
                                                    wisata.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                        <Row>
                                                {
                                                    hotel.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                        <Row>
                                                {
                                                    lembaga.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fourth">
                                        <Row>
                                                {
                                                    Kuliner.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fifth">
                                        <Row>
                                                {
                                                    oleh.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="sixth">
                                        <Row>
                                                {
                                                    event.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}