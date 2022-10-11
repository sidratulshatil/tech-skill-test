import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Layout/Main';
import Blog from './Components/Blog/Blog';
import Statistic from './Components/Statistic/Statistic';
import Error from './Components/Error/Error'
import Home from './Components/Home/Home';
import Quizes from './Components/Quizes/Quizes';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        { path: 'blog', element: <Blog></Blog> },
        {
          path: 'statistic',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz/')
          },
          element: <Statistic></Statistic>
        },
        {
          path: 'quizes/:postId',
          loader: ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.postId}`)
          },
          element: <Quizes></Quizes>
        }

      ],

    },
    { path: '*', element: <Error></Error> },
  ])


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
