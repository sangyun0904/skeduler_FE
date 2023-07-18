import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Main from "./components/Main";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />   
                <Route path='/register' element={<Signup />} /> 
                <Route path='/main' element={<Main />} />
            </Routes>    
        </BrowserRouter>
    </div>
  );
}

export default App;
