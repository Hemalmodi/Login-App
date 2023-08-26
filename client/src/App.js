import react from 'react'
import {createBrowserRouter, Router, RouterProvider} from 'react-router-dom'
// import all componnent
import Username from './component/Username';
import Ragister from './component/Ragister';
import Password from './component/Password';
import Profile from './component/Profile';
import Recover from './component/Recover';
import Reset from './component/Reset';
import PageNotFound from './component/PageNotFound';

// routes
const routes = createBrowserRouter([
  // home page
  {
    path: '/',
    element: <Username></Username>
  },

  {
    path: '/ragister',
    element: <Ragister></Ragister>
  },

  {
    path: '/password',
    element: <Password></Password>
  },
  {
    path: '/profiel',
    element: <Profile></Profile>
  },
  {
    path: '/recovery',
    element: <Recover></Recover>
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  },
  {
    path: '/reset',
    element: <Reset></Reset>
  }
])


function App() {
  return (
    <main>
      <RouterProvider router={routes}></RouterProvider>
    </main>
  );
}

export default App;
