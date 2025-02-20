import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Main/Main";
import LogIn from "../Components/LogIn";
import Register from "../Components/Register";
import Home from "../Components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
    ]
  },
]);

export default router;