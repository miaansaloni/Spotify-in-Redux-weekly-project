// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./components/Sidebar";
import MainPage from "./components/MainPage";

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
    </>
  );
}

export default App;
