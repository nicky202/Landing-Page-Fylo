import "./App.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Container from "./components/container/container";

/* imported images -------------- */

function App() {
  return (
    <>
      <Header />

      <Container />
      <Footer />
      <footer>
        <p className="attribution">
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Rabesoa Nicky</a>.
        </p>
      </footer>
    </>
  );
}

export default App;
