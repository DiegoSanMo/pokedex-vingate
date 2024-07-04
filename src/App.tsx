import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from "./pages";

function App() {

  return (
    <Router>
      <div >
        <header>
          <h1>Pokedex</h1>
        </header>
        <main style={{ padding: 0, margin: 0}}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/details/:name" element={<Details/>}/> */}
        </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
