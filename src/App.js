import "./App.css";
import Login from "./auth/Login";
import Home from "./booking/Home";
import Register from "./auth/Register";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import PNF from "./booking/PNF";
import NavBar from "./component/NavBar";



function App() {
  return (<div>

    <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path="*" element={<PNF />} />
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Navigate to="/" replace />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
