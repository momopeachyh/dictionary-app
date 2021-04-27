import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <Header />
          <Dictionary defaultTerm="welcome" />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
