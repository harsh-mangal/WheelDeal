const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");

// Create an Express application
// update this file
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
const users = [];

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://devharshmangal:harsh786@cluster0.pwltp9k.mongodb.net/practice?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.post("/register", async (req, res) => {
  // Extract user details from the request body
  const { username, email, password } = req.body;

  // Basic input validation
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ error: "Please provide username, email, and password" });
  }

  try {
    // Check if the username is already taken
    const existingUser = await User.findOne({ username: username });

    if (existingUser) {
      return res.status(409).json({ error: "Username is already taken" });
    }

    // Create a new user instance
    const newUser = new User({ username, email, password });

    // Save the user to the database
    await newUser.save();

    return res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    return res.status(500).json({ error: "Failed to register user" });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username and password
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Generate token upon successful login
    const token = jwt.sign({ username: user.username }, "secret-key", {
      expiresIn: "1h",
    });

    return res.status(200).json({ message: "User login successful", token });
  } catch (err) {
    return res.status(500).json({ error: "Failed to login user" });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
