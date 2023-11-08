import {Link,Routes,Route} from "react-router-dom"
import './App.css';
import Avaleht from "./pages/Avaleht";
import LisaJook from "./pages/LisaJook";
import HaldaJooke from "./pages/HaldaJooke";

function App() {
  return (
    <div className="App">


      <Link to={"/avaleht"} >
        <button>Avaleht</button>
      </Link>

      <Link to={"/LisaJook"} >
        <button>Lisa Jook</button>
      </Link>

      <Link to={"/HaldaJooke"} >
        <button>Halda Jooke</button>
      </Link>

      <Routes>
        <Route path="/avaleht" element = {<Avaleht />}  />
        <Route path="/LisaJook" element = {<LisaJook />}  />
        <Route path="/HaldaJooke" element = {<HaldaJooke />}  />
      </Routes>


      
      
    </div>
  );
}

export default App;
