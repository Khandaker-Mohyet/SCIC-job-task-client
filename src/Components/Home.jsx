import { Link } from "react-router-dom";
import AllTask from "./AllTask";
import Navbar from "./Navbar";


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="text-center">
        <Link to={"/addTask"}>
          <button className="btn btn-success">Add Task</button>
        </Link>
      </div>
      <AllTask></AllTask>
    </div>
  );
};

export default Home;