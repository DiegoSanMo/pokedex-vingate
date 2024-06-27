import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Details, Home } from "./pages";

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Pokedex</h1>
        </header>
        <main className="App-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/details/:name" element={<Details/>}/>
        </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
