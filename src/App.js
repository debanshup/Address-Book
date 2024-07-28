import { Route } from 'react-router-dom';
import './App.css';
import Profile from './Profile';
import Routemanager from './route_manager/Routemanager';

function App() {
  return (
    <div className="App">
      <p className="h4">Profile</p>
      {/* <Profile/> */}
      <Routemanager/>
    </div>
  );
}

export default App;
