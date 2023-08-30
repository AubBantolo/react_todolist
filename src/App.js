import './App.css';
import { Outlet, NavLink } from 'react-router-dom';
import { HomeOutlined, CheckCircleOutlined, QuestionCircleOutlined } from '@ant-design/icons';

function App() {
  return (
    <div className="App">
      <div className='navBar'>
        <nav>
          <ul className="nav-list-item">
            <li>
              <NavLink to={'/'}>
                <HomeOutlined /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to={'/done'}>
                <CheckCircleOutlined /> Done List
              </NavLink>
            </li>
            <li>
              <NavLink to={'/help'}>
                <QuestionCircleOutlined /> Help
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <h1>📋 Todo List</h1>
      <Outlet></Outlet>
      
    </div>
  );
}

export default App;



