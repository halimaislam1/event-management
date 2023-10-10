import { createBrowserRouter } from "react-router-dom";
import Root from "../layOut/Root";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Team from "../Pages/Team/Team";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
           path: '/',
           element: <Home></Home>,
           loader:() => fetch('/Category.json')
        },
        {
          path:'/serviceDetails/:id',
          element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          loader:() => fetch('/Category.json')
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/about',
          element:<PrivateRoute><AboutUs></AboutUs></PrivateRoute>
        },
        {
          path:'/Team',
          element:<PrivateRoute><Team></Team></PrivateRoute>
        },
      ]
    },
  ]);

  export default router;