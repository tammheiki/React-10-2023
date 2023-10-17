
import './App.css';
import{Route, Routes} from "react-router-dom"

function App() {
  return (
    <div >
      <Routes>
        < Route path="" element={<div>See on avaleht, nähtav localhost:3000 aadressil</div>} />
        < Route path="uudised" element={<div>See on uudiste leht, nähtav localhost:3000/kontakt aadressil</div>} />
        < Route path="kontakt" element={<div>See on kontaktide leht, nähtav localhost:3000/kontakt aadressil</div>} />
        < Route path="meist" element={<div>See on meist leht, nähtav localhost:3000 aadressil</div>} />
        </Routes>
        
        
        
    </div>
  )
}

export default App;
