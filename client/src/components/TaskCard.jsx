import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <div className="bg-zinc-800 max-w-md w-full p-6 rounded-xl shadow-lg hover:shadow-indigo-500/20 transition-shadow duration-300">
      <header className="flex justify-between items-start mb-4">
        <h1 className="text-2xl font-extrabold text-indigo-400 mb-2 truncate max-w-xs sm:max-w-md">
          {task.title}
        </h1>

        <div className="flex gap-x-2">
          <button
            onClick={() => {
              deleteTask(task._id);
            }}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md text-sm font-medium shadow transition-colors"
          >
            Delete
          </button>
          <Link
            to={`/tasks/${task._id}`}
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1 rounded-md text-sm font-medium shadow transition-colors"
          >
            Edit
          </Link>
        </div>
      </header>

      <h2 className="text-xl font-semibold text-gray-300">{task.title}</h2>
      <p className="text-gray-300 text-sm leading-relaxed max-h-32 overflow-y-auto">
        {task.description}
      </p>
      <p className="text-gray-400 text-xs mt-4">
        {dayjs(task.date).utc().format("DD/MM/YYYY")}
      </p>
    </div>
  );
}

export default TaskCard;
