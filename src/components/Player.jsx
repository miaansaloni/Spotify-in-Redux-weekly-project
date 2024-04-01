import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
// import ProgressBar from "react-bootstrap/ProgressBar";

const Player = () => {
  const song = useSelector((state) => state.current.data);
  return (
    <Row className="h-100">
      <div className="col-lg-10 offset-lg-2">
        <div className="row h-100 flex j align-items-center">
          {!song ? (
            <></>
          ) : (
            <Col className="col-3 d-flex mt-1">
              <div>
                <img src={song.album.cover_small} alt="song cover" />
              </div>
              <div className="d-flex flex-column">
                <span className="song-info">{song.title}</span>
                <span className="song-info">{song.artist.name}</span>
              </div>
              <div>
                <Heart alt="heart" className="text-white m-3" />
              </div>
            </Col>
          )}
          <div className="col-4 playerControls">
            <div className="d-flex">
              <a href="#s">
                <img src="shuffle.png" alt="shuffle" />
              </a>
              <a href="#s">
                <img src="prev.png" alt="prev" />
              </a>
              <a href="#s">
                <img src="play.png" alt="play" />
              </a>
              <a href="#s">
                <img src="next.png" alt="next" />
              </a>
              <a href="#s">
                <img src="repeat.png" alt="repeat" />
              </a>
            </div>
            <div id="progress" className="mt-3">
              <div role="progressbar"></div>
            </div>
          </div>
        </div>
      </div>
    </Row>
  );
};
export default Player;
