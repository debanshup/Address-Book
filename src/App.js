import { RouterProvider } from 'react-router-dom';
import './App.css';
import route from './route_manager/Routemanager';

function App() {
  return (
    <div className="App">
      {/* <p className="h4"></p> */}
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
