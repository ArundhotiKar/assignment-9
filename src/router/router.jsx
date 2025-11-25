import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import LoginPage from "../component/LoginPage";
import RegisterPage from "../component/RegisterPage";
import HomePage from "../component/HomePage";
import MyProfile from "../component/MyProfile";
import PrivateRoute from "./PrivateRoute";
import ViewMorePage from "../component/ViewMorePage";
import ViewMoreEdu from "../component/ViewMoreEdu";
import ViewMoreTrend from "../component/ViewMoreTrend";
import ForgetPasswordPage from "../component/ForgetPasswordPage";

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
        path: "/forget-password/:email",
        element: <ForgetPasswordPage></ForgetPasswordPage>
      },
      {
        path: "/viewmore/:id",
        element:<PrivateRoute><ViewMorePage></ViewMorePage></PrivateRoute> 
      },
      {
        path:"/viewmoreforedu/:id",
        element:<PrivateRoute><ViewMoreEdu></ViewMoreEdu></PrivateRoute>
      },
      {
        path:"/viewmoretrend/:id",
        element: <PrivateRoute><ViewMoreTrend></ViewMoreTrend></PrivateRoute>
      }

    ],
  }
]);

export default router;