import { Container, Row, Col, Image, ProgressBar } from 'react-bootstrap';

const PlayerBottom = () => {
    return (
        <Container fluid className="fixed-bottom bg-container pt-1">
            <Row className="h-100">
                <Col lg={10} className="offset-lg-2">
                    <Row className="h-100 flex-column justify-content-center align-items-center">
                        <Col sm={6} md={4} className="playerControls">
                            <div className="d-flex">
                                <a href="#">
                                    <Image src="../assets/playerbuttons/shuffle.png" alt="shuffle" />
                                </a>
                                <a href="#">
                                    <Image src="../assets/playerbuttons/prev.png" alt="prev" />
                                </a>
                                <a href="#">
                                    <Image src="../assets/playerbuttons/play.png" alt="play" />
                                </a>
                                <a href="#">
                                    <Image src="../assets/playerbuttons/next.png" alt="next" />
                                </a>
                                <a href="#">
                                    <Image src="../assets/playerbuttons/repeat.png" alt="repeat" />
                                </a>
                            </div>
                            <div className="progress mt-3">
                                <ProgressBar />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}


export default PlayerBottom