import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());


//user routes
import userRouter from './routes/user.routes.js';
import employeeRouter from './routes/employee.routes.js';
app.use('/api/v1/users', userRouter);

app.use('/api/v1/employees', employeeRouter);

export default app;