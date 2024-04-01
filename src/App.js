// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./components/Sidebar";
import MainPage from "./components/MainPage";
import Player from "./components/Player";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Sidebar />
            <MainPage />
          </Col>
        </Row>
      </Container>
      <Container fluid className="fixed-bottom bg-container pt-1">
        <Player />
      </Container>
    </>
  );
}

export default App;
