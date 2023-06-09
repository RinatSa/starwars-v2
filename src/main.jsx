import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PeoplePage from "./components/pages/people-page.jsx";
import StarshipsPage from "./components/pages/starships-page.jsx";
import PlanetsPage from "./components/pages/planets-page.jsx";

const router = createBrowserRouter([{
    path: "/",
    element: <App/>,
    children: [{
        path: "/people",
        element: <PeoplePage/>
    }, {
        path: "/starships",
        element: <StarshipsPage/>
    }, {
        path: "/planets",
        element: <PlanetsPage/>
    }]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
