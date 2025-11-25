import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import LoginPage from "../component/LoginPage";
import RegisterPage from "../component/RegisterPage";
import HomePage from "../component/HomePage";
import MyProfile from "../component/MyProfile";
import PrivateRoute from "./PrivateRoute";
import ViewMorePage from "../component/ViewMorePage";
import ViewMoreEdu from "../component/ViewMoreEdu";

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
      },
      {
        path: "/viewmore/:id",
        element: <ViewMorePage></ViewMorePage>
      },
      {
        path:"/viewmoreforedu/:id",
        element: <ViewMoreEdu></ViewMoreEdu>
      }

    ],
  }
]);

export default router;