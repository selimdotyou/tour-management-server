import express, { type Request, type Response } from 'express';
import cors from 'cors';
const app = express();
// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Welcome to the Tour Management API' });    
});

export default app;