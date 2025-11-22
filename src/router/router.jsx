import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import LoginPage from "../component/LoginPage";
import RegisterPage from "../component/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        
      },
      
    ],
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>
  }
//   {
//     path: "/auth",
//     element: <AuthLayout></AuthLayout>,
//     children: [
//       {
//         path: "/auth/login",
//         element: <Login></Login>,
//       },
//       {
//         path: "/auth/register",
//         element: <Register></Register>,
//       },
//     ],
//   },
//   {
//     path: "/news-details/:id",
//     element: (
//       <PrivateRoute>
//         <NewsDetails></NewsDetails>
//       </PrivateRoute>
//     ),
//     loader: () => fetch("/news.json"),
//   },
//   {
//     path: "/*",
//     element: <h2>Error404</h2>,
//   },
]);

export default router;