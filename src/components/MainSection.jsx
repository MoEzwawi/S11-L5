import { Row, Col } from 'react-bootstrap';
import AlbumCard from './AlbumCard';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const MainSection = () => {


    const searchQuery = useSelector(state => state)

    console.log('ciao', searchQuery)


    return (
        <Col xs={12} md={9} className="offset-md-3 mainPage mt-4">
            <Row>
                <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
                    <a href="#">TRENDING</a>
                    <a href="#">PODCAST</a>
                    <a href="#">MOODS AND GENRES</a>
                    <a href="#">NEW RELEASES</a>
                    <a href="#">DISCOVER</a>
                </Col>
            </Row>

            <Row>
                <Col xs={10}>
                    <div id="searchResults" >
                        <h2>Search Results</h2>
                        <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3">
                            <AlbumCard songInfo={searchQuery} isSearch={true} />
                        </Row>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={10}>
                    <div id="rock">
                        <h2>Rock Classics</h2>
                        <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="rockSection">
                            <AlbumCard songInfo={'queen'} isSearch={false} />
                        </Row>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={10}>
                    <div id="pop">
                        <h2>Pop Culture</h2>
                        <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="popSection">
                            <AlbumCard songInfo={'katyperry'} isSearch={false} />
                        </Row>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs={10}>
                    <div id="hiphop">
                        <h2>#HipHop</h2>
                        <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="hipHopSection">
                            <AlbumCard songInfo={'eminem'} isSearch={false} />
                        </Row>
                    </div>
                </Col>
            </Row>
        </Col>
    );
};

export default MainSection;
