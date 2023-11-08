
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Tagasiside from './pages/Tagasiside';
import Avaleht from './pages/Avaleht';
import TagasisideAndjad from './pages/TagasisideAndjad';
import Leiunurk from './pages/Leiunurk';
import YksikTagasisideAndja from './pages/YksikTagasisideAndja';



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
        <Route path='/Yksik-andja/:andja_index' exact element={ <YksikTagasisideAndja/> } />
         
      </Routes>
      
    </div>
  );
}

export default App;
