import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from "./pages";

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/details/:name" element={<Details/>}/> */}
        </Routes>
    </Router>
  );
}

export default App;
