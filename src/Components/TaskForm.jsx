import axios from "axios";



const TaskForm = () => {

  const handelTask = (e) => {
    e.preventDefault()
    const title = e.target.title.value
    const category = e.target.category.value
    const description = e.target.description.value
    const timestamp = new Date().toLocaleString();

    const task = { title, category, description, timestamp }
    console.log(task)

    axios.post('http://localhost:4000/task', task)
          .then(res => {
            console.log(res.data)
        })
  }


  return (
    <div>
      <div className="max-w-md border-2 border-green-500 rounded-lg shadow-lg bg-white p-6 mx-auto">
        <form onSubmit={handelTask}>
          <div className="space-y-4">
            {/* First step */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="title"
                required
                placeholder="Title"
                className="input input-bordered input-success w-full p-3 rounded-lg border-2 border-green-400"
              />
              <select name="category" required className="select select-bordered select-success w-full p-3 rounded-lg border-2 border-green-400">
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
                placeholder="Description"
                className="input input-bordered input-success w-full p-3 rounded-lg border-2 border-green-400"
              />
              <button className="btn btn-success w-full md:w-auto px-6 py-3 text-white font-semibold rounded-lg hover:bg-green-700 transition-all">
                Add Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;