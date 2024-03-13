import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import { Outlet } from 'react-router';

function App() {
  return (
   <>
   <div className="MainCon">
     <Navigation/> 
      
      <Outlet/>
      </div>
      <div className="copyright">
      <p>Copyright © 2024 Gangadhar Atagara</p>
    </div>
   </>
  );
}

export default App;
