import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";

const MainPage = () => {
  const [rockSection, setRockSection] = useState([]);
  const [popSection, setPopSection] = useState([]);
  const [hipHopSection, setHipHopSection] = useState([]);

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
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#s">TRENDING</a>
          <a href="#s">PODCAST</a>
          <a href="#s">MOODS AND GENRES</a>
          <a href="#s">NEW RELEASES</a>
          <a href="#s">DISCOVER</a>
        </div>
      </Row>
      <Row className="mt-5">
        <h2 className="text-white">Search Results</h2>
        <div className="row" id="searchResults"></div>
      </Row>
    </div>
  );
};
export default MainPage;
