import Login from "../pages/Login/Login";
import Route from "./route";

export default function MainRoute( ) { 
    const route = new Route();
    const URLs = route.setRoutes("/", <Login />)
    
    return route.getRoutes(URLs);
}