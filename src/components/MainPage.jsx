import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AlbumCard from "./AlbumCard";

const MainPage = () => {
  const [rockSection, setRockSection] = useState([]);
  const [popSection, setPopSection] = useState([]);
  const [hipHopSection, setHipHopSection] = useState([]);

  const artistData = useSelector((state) => state.data.data);

  const resultsFetch = async (artistName, setSection) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName, {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      });
      if (response.ok) {
        const { data } = await response.json();
        setSection(data.slice(0, 6));
      } else {
        throw new Error("Qualcosa è andato storto!");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    resultsFetch("queen", setRockSection);
    resultsFetch("katyperry", setPopSection);
    resultsFetch("eminem", setHipHopSection);
  }, []);

  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <Row>
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex mt-4">
          <a href="#s">TRENDING</a>
          <a href="#s">PODCAST</a>
          <a href="#s">MOODS AND GENRES</a>
          <a href="#s">NEW RELEASES</a>
          <a href="#s">DISCOVER</a>
        </div>
      </Row>
      {artistData && (
        <Row>
          <div className="col-10">
            <div id="searchResults">
              <h2>Search Results</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                {artistData.slice(0, 6).map((songInfo, i) => (
                  <AlbumCard songInfo={songInfo} key={i} />
                ))}
              </div>
            </div>
          </div>
        </Row>
      )}
      <Row>
        {rockSection && (
          <div className="col-10">
            <div id="rock">
              <h2>Rock classics</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
                {rockSection.slice(0.6).map((songInfo, i) => (
                  <AlbumCard songInfo={songInfo} key={i} />
                ))}
              </div>
            </div>
          </div>
        )}
      </Row>
      <Row>
        {popSection && (
          <div className="col-10">
            <div id="pop">
              <h2>Pop Culture</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
                {popSection.slice(0.6).map((songInfo, i) => (
                  <AlbumCard songInfo={songInfo} key={i} />
                ))}
              </div>
            </div>
          </div>
        )}
      </Row>
      <Row>
        {hipHopSection && (
          <div className="col-10">
            <div id="hiphop">
              <h2>#HipHop</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="hipHopSection"
              >
                {hipHopSection.slice(0.6).map((songInfo, i) => (
                  <AlbumCard songInfo={songInfo} key={i} />
                ))}
              </div>
            </div>
          </div>
        )}
      </Row>
    </div>
  );
};
export default MainPage;
