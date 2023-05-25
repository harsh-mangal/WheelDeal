const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create an Express application
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://devharshmangal:harsh786@cluster0.pwltp9k.mongodb.net/WheelDeal?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Define a user schema and model
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// API endpoint to handle login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Create a new user instance
  const newUser = new User({ email, password });

  // Save the user to the database
  newUser.save()
    .then(() => res.send('User login successful!'))
    .catch((err) => res.status(500).send('Failed to login user'));
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
