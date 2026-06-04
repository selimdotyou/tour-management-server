import express, { type Request, type Response } from 'express';
import cors from 'cors';
import router from './app/router/index.js';
import { globalErrorHandler } from './app/middleware/globalErrorHandler.js';
import { notFoundHandler } from './app/middleware/notFound.js';
const app = express();
// middleware
app.use(cors());
app.use(express.json());
app.use('/api/v1',router );
app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Welcome to the Tour Management API' });    
});

// global error handler

app.use(globalErrorHandler);

// not found route handler
app.use(notFoundHandler);
export default app;