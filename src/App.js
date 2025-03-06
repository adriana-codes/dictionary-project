import "./App.css";
import dictionary from "./dictionary.png";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <div className="row align-items-center justify-content-center">
          <div className="col-3">
            <img
              src={dictionary}
              className="Dictionary-logo img-fluid"
              alt="Dictionary logo"
            />
          </div>
          <div className="col-4 m-3">
            <h1>
              Dictionary <br /> App
            </h1>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
