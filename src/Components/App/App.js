import "../Styling/App.css";
import Footer from "./Footer";
import Searchable from "./Searchable";

const App = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">FODMAP</header>
        <Searchable />
      </div>
      <Footer />
    </>
  );
};

export default App;
