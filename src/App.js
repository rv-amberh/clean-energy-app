import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard'
import CarbonData from './pages/CarbonData.jsx'


const App = () => {
  
  return (
    <Router>
      <Routes>
       <Route path='/' element={<Home />} exact /> 
        <Route path='/dashboard' element={<Dashboard />} exact />
        <Route path='/CarbonData' element={<CarbonData />}  exact />
      </Routes >
    </Router>
  );
}

export default App;
