import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/Login/LoginPage";
import SignUp from "../../pages/Login/SignUp";
import Appointment from "../../pages/Appointment/Appointment";
import About from "../../pages/About/About";
import Reviews from "../../pages/Reviews/Reviews";
import Contact from "../../pages/Contact/Contact";

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
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
