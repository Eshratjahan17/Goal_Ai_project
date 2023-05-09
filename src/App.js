import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './layout/Login';
import Dashboard from './layout/Dashboard/Dashboard';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Login></Login>
    },
    {
      path:'/dasboard',
      element:<Dashboard></Dashboard>
    }
  ])

  return (
    <div >
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
