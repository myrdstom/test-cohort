import express from 'express';

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Welcome to Our Home Page');
});

app.listen(PORT, console.log(`server running on Port ${PORT}`));
