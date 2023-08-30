import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className='navBar'>
        <nav>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/help'>Help</a></li>
          </ul>
        </nav>
      </div>

      <div className="TodoList">
        <h1>📋 Todo List</h1>
        <TodoList />
      </div>

  </div>
  );
}

export default App;
