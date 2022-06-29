import Signup from "./components/Signup";
import Login from "./components/Login";
import {Route, Routes} from 'react-router-dom'
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>       
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
