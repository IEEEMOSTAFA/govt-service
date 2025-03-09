// import { createBrowserRouter } from "react-router-dom";
// import Root from "../layouts/Root";
// import Home from "../Pages/Home/Home";
// import Login from "../Pages/Login/Login";
// import Register from "../Pages/Register/Register";
// import MyMap from "../Pages/MyMap/MyMap";
// import About from "../Pages/About/About";
// import estates from "../../public/catagory.json"
// import Errorpage from "../Pages/Errorpage/Errorpage";
// import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
// import ProtectedRoute from "./ProtectedRoute";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <Errorpage></Errorpage>,
//     children: [
//       {
//         path: "/",
//         element: <Home estates={estates}></Home>,
//       },
//       {
//         path: "/login",
//         element: <Login></Login>,
//       },
//       {
//         path: "/register",
//         element: <Register></Register>,
//       },
//       {
//         path: "/mymap",
//         element: <MyMap></MyMap>,
//       },
//       {
//         path: "/about",
//         element: <About></About>,
//       },
//       {
//         path: "/property/:id", // Dynamic route for property details
//         element: (
//           <ProtectedRoute>
//             <PropertyDetails />
//           </ProtectedRoute>
//         ),
//       },
//     ],
//   },
// ]);





import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MyMap from "../Pages/MyMap/MyMap";
import About from "../Pages/About/About";
import Errorpage from "../Pages/Errorpage/Errorpage";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import ProtectedRoute from "./ProtectedRoute";
import Animate from "../Pages/Animate/Animate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home />, // Remove estates prop
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
        path: "/animate",
        element: <Animate></Animate>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/property/:id", // Dynamic route for property details
        element: (
          <ProtectedRoute>
            <PropertyDetails />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
















// import { createBrowserRouter } from "react-router-dom";
// import Root from "../layouts/Root";
// import Home from "../Pages/Home/Home";
// import Login from "../Pages/Login/Login";
// import Register from "../Pages/Register/Register";
// import MyMap from "../Pages/MyMap/MyMap";
// import About from "../Pages/About/About";
// import Errorpage from "../Pages/Errorpage/Errorpage";
// import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
// import ProtectedRoute from "./ProtectedRoute";
// import { useEffect, useState } from "react";

// const Router = () => {
//   const [estates, setEstates] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch data from catagory.json
//   useEffect(() => {
//     fetch("/catagory.json") // Fetch from the public directory
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setEstates(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading estates...</div>; // Show a loading message while fetching data
//   }

//   if (error) {
//     return <div>Error: {error}</div>; // Show an error message if fetching fails
//   }

//   // Define the router after fetching the data
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Root />,
//       errorElement: <Errorpage />,
//       children: [
//         {
//           path: "/",
//           element: <Home estates={estates} />, // Pass estates as a prop to Home
//         },
//         {
//           path: "/login",
//           element: <Login />,
//         },
//         {
//           path: "/register",
//           element: <Register />,
//         },
//         {
//           path: "/mymap",
//           element: <MyMap />,
//         },
//         {
//           path: "/about",
//           element: <About />,
//         },
//         {
//           path: "/property/:id", // Dynamic route for property details
//           element: (
//             <ProtectedRoute>
//               <PropertyDetails />
//             </ProtectedRoute>
//           ),
//         },
//       ],
//     },
//   ]);

//   return router;
// };

// export default Router;