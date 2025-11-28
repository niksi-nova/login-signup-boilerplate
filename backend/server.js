
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI).then(() =>
  console.log("MongoDB Connected")
);

const User = require('./userModel');

app.post('/signup', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).json({ msg: 'User not found' });
  res.json(user);
});
const PORT=5001;
app.listen(PORT, () => console.log("Server running on 5001"));
