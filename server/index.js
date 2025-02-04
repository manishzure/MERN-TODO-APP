import express from 'express';
import cors from 'cors';
import connectToMongo from './config/db.js';
import todoRoute from './routes/todoRoute.js';

const app = express();

const PORT = 5000;

connectToMongo();

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.send("API is running")
});

app.use("/api/v1", todoRoute);

app.listen(PORT , () => {
    console.log(`App is running on http://localhost:${PORT}`);
});