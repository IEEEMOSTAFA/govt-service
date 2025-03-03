import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MyMap from "../Pages/MyMap/MyMap";
import About from "../Pages/About/About";
import estates from "../../public/catagory.json"
import Errorpage from "../Pages/Errorpage/Errorpage";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home estates={estates}></Home>
       
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/mymap",
        element: <MyMap></MyMap>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/property/:id", // Dynamic route for property details
        element: <PropertyDetails></PropertyDetails>
    },
      // Uncomment and define these routes if needed
      // {
      //   path: "/news/:id",
      //   element: (
      //     <PrivateRoute>
      //       <News />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/about",
      //   element: <About />,
      // },
    ],
  },
]);

export default router;