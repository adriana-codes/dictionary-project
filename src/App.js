import "./App.css";
import dictionary from "./dictionary.png";
import Dictionary from "./Dictionary";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <div className="row align-items-center justify-content-center">
          <div className="col-3">
            <a href="/" target="_self" rel="noreferrer">
              <img
                src={dictionary}
                className="Dictionary-logo img-fluid"
                alt="Dictionary logo"
              />
            </a>
          </div>
          <div className="col-4 m-3 justify-content-start">
            <h1>
              Dictionary
              <br /> App
            </h1>
          </div>
        </div>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer text-center">
        <a href="/">Open sourced</a> project by <a href="/">Adri Díaz</a>👩🏻‍💻
        hosted on <a href="/">Netlify</a>
      </footer>
    </div>
  );
}

export default App;
