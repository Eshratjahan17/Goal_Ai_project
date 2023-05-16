import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './layout/Login';

import DashboardLayout from './layout/Dashboard/DashboardLayout';
import Chatbot from './layout/Dashboard/Chatbot';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Login></Login>
    },
    {
      path:'/dashboard',
      element:<DashboardLayout></DashboardLayout>,
      children: [
        {
          path: "chatbot",
          element: <Chatbot />,
        
        },
        
      ],
    }
  ])

  return (
    <div >
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
