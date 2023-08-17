import './App.css';
import { MyBioMain } from './Pages/mybio/MyBioMain'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyBioMain />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
