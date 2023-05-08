import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './layout/Login';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Login></Login>
    }
  ])

  return (
    <div >
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
