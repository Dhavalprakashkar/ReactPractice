import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Moviedetail from './component/Moviedetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail' element={<Moviedetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
