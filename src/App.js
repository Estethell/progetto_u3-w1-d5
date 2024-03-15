import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Title from "./components/Title";
import FirstMovies from "./components/FirstMovies";
import SecondMovies from "./components/SecondMovies";
import ThirdMovies from "./components/ThirdMovies";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container fluid>
        <NavBar />
      </Container>

      <Title />

      <FirstMovies />
      <SecondMovies />
      <ThirdMovies />

      <Container fluid>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
