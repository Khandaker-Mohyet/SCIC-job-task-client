import AllTask from "./AllTask";
import Navbar from "./Navbar";
import TaskForm from "./TaskForm";


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <TaskForm></TaskForm>
      <AllTask></AllTask>
    </div>
  );
};

export default Home;