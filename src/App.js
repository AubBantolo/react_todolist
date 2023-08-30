import './App.css';
import { Outlet, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='navBar'>
        <nav>
          <ul>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/done'}>Done List</NavLink></li>
            <li><NavLink to={'/help'}>Help</NavLink></li>
          </ul>
        </nav>
      </div>

      <h1>📋 Todo List</h1>
      <Outlet></Outlet>
      
  </div>
  );
}

export default App;
