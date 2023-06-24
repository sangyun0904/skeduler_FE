import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />   
                <Route path='/register' element={<Signup />} /> 
            </Routes>    
        </BrowserRouter>
    </div>
  );
}

export default App;
