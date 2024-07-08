import logo from "./logo.jpg";
import "./App.css";
import Search from "./Search";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Search defaultKeyword="scenery" />
        </main>
        <Footer />
      </div>
    </div>
  );
}
