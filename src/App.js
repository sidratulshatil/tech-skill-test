import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Layout/Main';
import Blog from './Components/Blog/Blog';
import Statistic from './Components/Statistic/Statistic';
import Error from './Components/Error/Error'
import Home from './Components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/', element: <Home></Home> },
        { path: 'blog', element: <Blog></Blog> },
        { path: 'statistic', element: <Statistic></Statistic> },
        { path: '*', element: <Error></Error> },
      ]
    }
  ])


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
