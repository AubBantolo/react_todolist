import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux"; 
import { store } from "./app/store";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HelpPage from './pages/HelpPage';
import TodoList from './components/TodoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, 
        element: <TodoList />
      },
      {
        path: "/done",
        element: <TodoList isDone={true}/>
      },
      {
        path: "/help",
        element: <HelpPage />
      }
    ]
  },
  {
    path: "/help",
    element: <HelpPage />
  },
]);

root.render(
  <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
