import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";

interface RouteProps { 
    pathURL: string, 
    elementURL: React.ReactNode
}

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