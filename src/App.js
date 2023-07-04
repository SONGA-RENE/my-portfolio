import Home from "./Home";
import Menu from "./Menu";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="container">
          <header>
            <Menu />
          </header>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
