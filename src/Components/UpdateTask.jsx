import axios from "axios";
import { Link, useLoaderData, useNavigate } from "react-router-dom";


const UpdateTask = () => {
  const update = useLoaderData()
  const navigate = useNavigate()
  console.log(update)
  const {_id, title, category, description, } = update

  const handelUpdateTask = (e) => {
    e.preventDefault()
    const title = e.target.title.value
    const category = e.target.category.value
    const description = e.target.description.value
    const timestamp = new Date().toLocaleString();

    const task = { title, category, description, timestamp }
    console.log(task)

    axios.put(`https://scic-job-task-server-murex.vercel.app/task/${_id}`, task)
          .then(res => {
            console.log(res.data)
            navigate("/home")
        })
  }
  

  return (
    <div>
      <div className="max-w-md border-2 border-green-500 rounded-lg shadow-lg bg-white p-6 mx-auto">
        <form onSubmit={handelUpdateTask}>
          <div className="space-y-4">
            {/* First step */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="title"
                defaultValue={title}
                required
                placeholder="Title"
                className="input input-bordered input-success w-full p-3 rounded-lg border-2 border-green-400"
              />
              <select name="category" required defaultValue={category} className="select select-bordered select-success w-full p-3 rounded-lg border-2 border-green-400">
                <option disabled selected>Category</option>
                <option>To-Do</option>
                <option>In Progress</option>
                <option>Done</option>
              </select>
            </div>
            {/* Second step */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="description"
                defaultValue={description}
                placeholder="Description"
                className="input input-bordered input-success w-full p-3 rounded-lg border-2 border-green-400"
              />
              <button className="btn btn-success w-full md:w-auto px-6 py-3 text-white font-semibold rounded-lg hover:bg-green-700 transition-all">
                Update Task
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="text-center">
        <Link to={"/home"}>
          <button className="mt-4 btn btn-success">Cancel</button>
        </Link>
      </div>
    </div>
  );
};

export default UpdateTask;