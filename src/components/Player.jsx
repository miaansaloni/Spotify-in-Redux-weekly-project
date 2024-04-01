import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";

const Player = () => {
  return (
    <Row className="h-100">
      <div className="col-lg-10 offset-lg-2">
        <div className="row h-100 flex justify-content-center align-items-center">
          <audio id="audio-player"></audio>
          <Col className="col-3 d-flex">
            <img alt="song-cover" />
            <Heart alt="heart" />
          </Col>

          <div className="col-4 playerControls">
            <div className="d-flex">
              <a href="/">
                <img src="shuffle.png" alt="shuffle" />
              </a>
              <a href="/">
                <img src="prev.png" alt="prev" />
              </a>
              <a href="/">
                <img src="play.png" alt="play" />
              </a>
              <a href="/">
                <img src="next.png" alt="next" />
              </a>
              <a href="/">
                <img src="repeat.png" alt="repeat" />
              </a>
            </div>
            <div id="progress" className="mt-3">
              <div role="progressbar"></div>
            </div>
          </div>
          <Col className="col-3"></Col>
        </div>
      </div>
    </Row>
  );
};
export default Player;
