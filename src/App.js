import logo from "./logo.jpg";
import "./App.css";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <Footer />
    </div>
  );
}
