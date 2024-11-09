import "./App.css";
import Board from "./components/Board";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Board />
      <Footer />
    </div>
  );
}
