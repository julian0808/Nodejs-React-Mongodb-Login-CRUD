import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/tasks.routes.js'; 

const app = express();

// Middlewares
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api', authRoutes);
app.use('/api', taskRoutes);

export default app;
