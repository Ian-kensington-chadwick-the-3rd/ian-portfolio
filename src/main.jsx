import  ReactDOM  from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import App from './app'
import Aboutme from './pages/portfolio';
import Contact from './pages/contact';
import Home from './pages/Home';
import Resume from './pages/resume';
import Portfolio from "./pages/portfolio";
import Error from "./pages/error"

const router = createBrowserRouter([
    {
        path: '/',
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                index: true,
                element: <Home/>,
            },
            {
                path: '/Portfolio',
                element: <Portfolio/>,
            },
            {
                path:'/About',
                element:<Aboutme/>,
            },
            {
                path: '/Contact',
                element:<Contact/>,
            },
            {
                path: '/Resume',
                element:<Resume/>,
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);