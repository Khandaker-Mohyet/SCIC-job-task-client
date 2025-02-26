import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Main/Main";
import LogIn from "../Components/LogIn";
import Register from "../Components/Register";
import Home from "../Components/Home";
import UpdateTask from "../Components/UpdateTask";
import TaskForm from "../Components/TaskForm";

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
      {
        path: "/addTask",
        element: <TaskForm></TaskForm>,
      },
      {
        path: "/update/:id",
        element: <UpdateTask></UpdateTask>,
        loader:({params})=>fetch(`https://scic-job-task-server-murex.vercel.app/task/${params.id}`)
      }
    ]
  },
]);

export default router;