import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import LoginPage from "../component/LoginPage";
import RegisterPage from "../component/RegisterPage";
import HomePage from "../component/HomePage";
import MyProfile from "../component/MyProfile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/myprofile',
        element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>
      }

    ],
  }
]);

export default router;