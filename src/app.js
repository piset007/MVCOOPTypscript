import express from 'express';
import userRouter from './Routes/userRoutes.js';

const app = express();
app.use(express.json());

app.use('/api', userRouter);

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});