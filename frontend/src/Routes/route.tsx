import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

interface RouteProps { 
    pathURL: string, 
    elementURL: React.ReactNode
}

class Route {

    setRoutes(pathURL: string, elementURL: React.ReactNode) { 
        return createBrowserRouter([ 
            {
              path: pathURL,
              element: elementURL
            }
        ])
    };
    
    getRoutes(URL: any) { 
        return URL;
    }
};

export default Route;