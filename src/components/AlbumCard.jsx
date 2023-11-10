import { useState, useEffect } from "react"
import { Col } from "react-bootstrap"

const AlbumCard = ({ songInfo, isSearch }) => {
    const [album, setAlbum] = useState(null);

    const handleSection = async (artistName) => {
        try {
            let response = await fetch(
                'https://striveschool-api.herokuapp.com/api/deezer/search?q=' + artistName,
                {
                    method: 'GET',
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMmZiNTMyNWM5NzAwMTg3ZmExZDciLCJpYXQiOjE2OTk2MjI4MzcsImV4cCI6MTcwMDgzMjQzN30.yJTq5s0ghJsJSxEFdtUzQpI6w7f2AHtncxO5OWfhuB8"
                    },
                }
            );

            if (response.ok) {
                let { data } = await response.json();
                if (isSearch) {
                    setAlbum(data);
                } else {
                    setAlbum(data.slice(0, 4))
                }
            } else {
                throw new Error('Error in fetching songs');
            }
        } catch (err) {
            console.log('error', err);
        }
    };

    useEffect(() => {
        handleSection(songInfo);
    }, [songInfo]);
    useEffect(() => {
        console.log(album);
    }, [album]);

    return (
        <>
            {album ? (album.map((el) => (
                <Col className="text-center" key={el.id}>
                    <img className="img-fluid" src={el.album.cover_medium} alt="track" />
                    <p>
                        Track: {el.title.length < 16 ? el.title : el.title.substring(0, 16) + '...'}
                        Artist: {el.artist.name}
                    </p>
                </Col>
            ))) : (<></>)}
        </>
    );
};

export default AlbumCard;
