import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';


import DashboardLayout from './layout/Dashboard/DashboardLayout';
import Chatbot from './layout/Dashboard/Chatbot';
import Main from './layout/Main';
import DashBoardHome from './layout/Dashboard/DashBoardHome';

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
          path: "/dashboard",
          element: <DashBoardHome></DashBoardHome>,
        
        },
        {
          path: "/dashboard/chatbot",
          element: <Chatbot></Chatbot>,
        
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
