import express from 'express';
import router from './routes/index.js';

const app = express();

app.use(router);

const PORT = 8000;

app.get('/', (req, res) => {
    res.send('Welcome to Our Home Page');
});

app.listen(PORT, console.log(`server running on Port ${PORT}`));
