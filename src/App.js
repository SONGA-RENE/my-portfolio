import AboutMe from "./AboutMe";
import Home from "./Home";
import Menu from "./Menu";

function App() {
  return (
    <section id="intro">
      <div className="App">
        <div className="container-fluid">
          <div className="container">
            <header>
              <Menu />
            </header>
            <Home />
            <AboutMe />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
