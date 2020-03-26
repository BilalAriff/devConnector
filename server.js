const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database

connectDB();

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;


//Routes

const userRouter = require('./routes/api/users');
const authRouter = require('./routes/api/auth');
const postRouter = require('./routes/api/posts');
const profileRouter = require('./routes/api/profiles');

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/post', postRouter);
app.use('/api/profile', profileRouter);


app.listen(PORT, () => {
    console.log(`Server started at: ${PORT}`)
});