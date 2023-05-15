import * as React from "react";
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom";
import Login from "../pages/Login/Login";

class Route {
    routesURL: any;

    setRoutes(pathURL: string, elementURL: React.ReactNode) { 
        const URLs = createBrowserRouter([ 
            { 
              path: pathURL,
              element: elementURL
            }
        ])
        return URLs;
    };
    
    getRoutes(URL: any) { 
        return URL;
    }
};

export default Route;