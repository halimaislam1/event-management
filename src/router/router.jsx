import { createBrowserRouter } from "react-router-dom";
import Root from "../layOut/Root";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

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
          element: <ServiceDetails></ServiceDetails>,
          loader:() => fetch('/Category.json')
        }
      ]
    },
  ]);

  export default router;