import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Main/Main";
import LogIn from "../Components/LogIn";
import Register from "../Components/Register";

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
      }
    ]
  },
]);

export default router;