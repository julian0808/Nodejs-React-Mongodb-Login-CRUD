import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);


function TaskFormPage() {
  const {register,handleSubmit,setValue, formState: { errors },  } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect (() => {
  async function loadTask() {
       if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setValue('title', task.title)
        setValue('description', task.description);
        setValue("date", dayjs.utc(task.date).utc().format('YYYY-MM-DD'));
      }
    } 
    loadTask();
  }, [])

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      date: dayjs.utc(data.date || new Date()).format(),
    };

    console.log(dataValid);

    if (params.id) {
      updateTask(params.id, dataValid);
    } else {
      createTask(dataValid);
    }

    navigate("/tasks");
  });


  return (
    <div className="max-w-xl mx-auto mt-10 bg-zinc-800 p-8 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-white mb-6">Create a Task</h1>
      <form onSubmit={onSubmit} className="space-y-5">
        <label htmlFor="title">Title</label>
        <div>
          <label className="text-white block mb-1">Title</label>
          <input
            type="text"
            placeholder="Task title"
            {...register("title", { required: "Title is required" })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          {errors.title && (
            <p className="text-red-400 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="description" className="text-white block mb-1">Description</label>
          <textarea
            rows="4"
            placeholder="Task description"
            {...register("description", { required: "Description is required" })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {errors.description && (
            <p className="text-red-400 text-sm mt-1">{errors.description.message}</p>
          )}
        </div>

        <label htmlFor="date">Date</label>
        <input type="date" {... register('date')} 
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
        >
          Save Task
        </button>
      </form>
    </div>
  );
}

export default TaskFormPage;
