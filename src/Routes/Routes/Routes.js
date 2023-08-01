import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/HomePage/Home/Home";
import LoginPage from "../../pages/Login/LoginPage";
import SignUp from "../../pages/Login/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
    ],
  },
]);

export default router;
