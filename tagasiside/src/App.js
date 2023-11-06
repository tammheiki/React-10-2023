
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Tagasiside from './pages/Tagasiside';
import Avaleht from './pages/Avaleht';
import TagasisideAndjad from './pages/TagasisideAndjad';
import Leiunurk from './pages/Leiunurk';



function App() {
  return (
    <div className="App">

      <Link to="/Tagasiside" >
      <button>Tagasiside</button>
      </Link>

      <Link to="/" >
      <button>Avaleht</button>
      </Link>

      <Link to="/TagasisideAndjad" >
      <button>Tagasiside andjad</button>
      </Link>

      <Link to="/Leiunurk" >
      <button>Leiunurk</button>
      </Link>

      <Routes>
        <Route path='/Tagasiside' element={ <Tagasiside/> } /> 
        <Route path='/' element={ <Avaleht/> } /> 
        <Route path='/TagasisideAndjad' element={ <TagasisideAndjad/> } /> 
        <Route path='/Leiunurk' element={ <Leiunurk/> } /> 
      </Routes>
      
    </div>
  );
}

export default App;
