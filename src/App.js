import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';


import DashboardLayout from './layout/Dashboard/DashboardLayout';
import Chatbot from './layout/Dashboard/Chatbot';
import Main from './layout/Main';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>
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
