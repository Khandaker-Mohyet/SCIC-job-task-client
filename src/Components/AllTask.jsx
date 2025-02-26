import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllTask = () => {
  const { data: allTasks = [], isLoading, error, refetch } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const res = await axios.get("https://scic-job-task-server-murex.vercel.app/task");
      return res.data;
    },
  });

  const [selectedTask, setSelectedTask] = useState(null); 
  
  if (isLoading) return <p className="text-center text-xl">Loading tasks...</p>;
  if (error) return <p className="text-red-500">Error fetching tasks: {error.message}</p>;

  // filter on category
  const toDoTasks = allTasks.filter(task => task.category === "To-Do");
  const inProgressTasks = allTasks.filter(task => task.category === "In Progress");
  const doneTasks = allTasks.filter(task => task.category === "Done");

  // single task load
  const fetchTaskDetails = async (id) => {
    const res = await axios.get(`https://scic-job-task-server-murex.vercel.app/task/${id}`);
    setSelectedTask(res.data);
  };
 

  // delete

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(`https://scic-job-task-server-murex.vercel.app/task/${id}`);
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your note has been deleted.", "success");
            refetch();
            setSelectedTask(null)
          }
        } catch (error) {
          console.error(error);
          Swal.fire("Error!", "Failed to delete note.", "error");
        }
      }
    });
  };
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">All Tasks</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* To-Do Section */}
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">To Do</h3>
          {toDoTasks.map(task => (
            <p 
              key={task._id} 
              className="cursor-pointer hover:text-green-400" 
              onClick={() => fetchTaskDetails(task._id)}
            >
              <div className="bg-gray-700 p-2 mb-2 rounded">{task.title}</div>
            </p>
          ))}
        </div>

        {/* In Progress Section */}
        <div className="bg-yellow-800 text-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">In Progress</h3>
          {inProgressTasks.map(task => (
            <p 
              key={task._id} 
              className="cursor-pointer hover:text-green-400" 
              onClick={() => fetchTaskDetails(task._id)}
            >
              <div className="bg-yellow-700 p-2 mb-2 rounded">{task.title}</div>
            </p>
          ))}
        </div>

        {/* Done Section */}
        <div className="bg-green-800 text-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">Done</h3>
          {doneTasks.map(task => (
            <p 
              key={task._id} 
              className="cursor-pointer hover:text-green-400" 
              onClick={() => fetchTaskDetails(task._id)}
            >
              <div className="bg-green-700 p-2 mb-2 rounded">{task.title}</div>
            </p>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedTask && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold">{selectedTask.title}</h3>
            <p className="text-gray-700">{selectedTask.description}</p>
            <p className="text-sm text-gray-500">{selectedTask.timestamp}</p>

            <div className="flex justify-between mt-4">
              <button 
                className="bg-red-500 text-white px-3 py-1 rounded" 
                onClick={() => handleDelete(selectedTask._id)}
              >
                Delete
              </button>
              <Link to={`/update/${selectedTask._id}`}>
                <button 
                className="bg-blue-500 text-white px-3 py-1 rounded" 
              >
                Update
              </button>
              </Link>
              <button 
                className="bg-gray-500 text-white px-3 py-1 rounded" 
                onClick={() => setSelectedTask(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllTask;
