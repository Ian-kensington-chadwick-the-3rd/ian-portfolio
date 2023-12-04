// importing dependecies
import  ReactDOM  from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// importing all my pages for use in the react-router-dom
import App from './app'
import Aboutme from './pages/portfolio';
import Contact from './pages/contact';
import Home from './pages/Home';
import Resume from './pages/resume';
import Portfolio from "./pages/portfolio";
import Error from "./pages/error"
import './style/app.css'
// creating a router 
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

// rendering router by grabbing my index.html as a template then rendering my pages
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);