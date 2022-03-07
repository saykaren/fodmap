import AvoidData from "../Data/AvoidData";
import fodmapData from "../Data/Data";
import "../Styling/App.css";
import Footer from "./Footer";
import Searchable from "./Searchable";

const App = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">FODMAP</header>
        <Searchable data={fodmapData} className="include" title="WHAT FOODS SHOULD I INCLUDE IF I AM SENSITIVE TO FODMAPS?"/>
        <Searchable data={AvoidData} className="avoid" title="AVOID!"/>
      </div>
      <Footer />
    </>
  );
};

export default App;
