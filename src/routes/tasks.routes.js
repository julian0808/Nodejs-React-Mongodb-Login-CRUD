import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskZodSchema } from "../schemas/task.schema.js"; // ✅ Fix import

const router = Router();

router.get("/tasks", authRequired, getTasks);

router.get("/tasks/:id", authRequired, getTask);

router.post(
  "/tasks",
  authRequired,
  validateSchema(createTaskZodSchema), // ✅ Match the corrected schema name
  createTask
);

router.delete("/tasks/:id", authRequired, deleteTask);

router.put("/tasks/:id", authRequired, updateTask);

export default router;
