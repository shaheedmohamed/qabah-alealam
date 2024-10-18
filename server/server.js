const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables
const app = express();
const port = process.env.PORT || 3000; // Use the PORT from .env or default to 3000

// Middleware for static files
app.use('/homepage', express.static('../client/HTML/'));
app.use('/addcourse', express.static('../client/HTML/dashboard.html'));
app.use('/showcourse', express.static('../client/HTML/'));
app.use('/anotherdash', express.static('../client/HTML/Admin'));

// Middleware to handle JSON and URL-encoded form data
app.use(express.json()); // For parsing JSON data
app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded data

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { // Use the MongoDB URI from .env
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Schema and Model
const courseSchema = new mongoose.Schema({
  coursename: { type: String, required: true },
  description: { type: String, required: true },
  tags: { type: [String], default: [] },
  videourl: { type: String, required: true },
  price: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

const Course = mongoose.model('courses', courseSchema); // Use the correct collection name

// POST route to save the course data
app.post('/api/SendCourse', async (req, res) => {
  try {
    const courseData = req.body;
    console.log('Received course data:', courseData); // Log the received data

    // Create a new course document
    const newCourse = new Course({
      coursename: courseData.coursename,
      description: courseData.description,
      tags: courseData.tags,
      videourl: courseData.videourl,
      price: courseData.price // Include price
    });

    // Save to MongoDB
    const savedCourse = await newCourse.save();
    res.status(201).json({ message: 'Course created successfully', savedCourse });
  } catch (error) {
    console.error('Error saving course:', error); // Log the error
    res.status(500).json({ message: 'Error saving course', error });
  }
});

// GET route to retrieve all courses
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find(); // Retrieve all courses
    res.status(200).json(courses); // Send courses as response
  } catch (error) {
    console.error('Error retrieving courses:', error);
    res.status(500).json({ message: 'Error retrieving courses', error });
  }
});

// DELETE route to delete a course by ID
app.delete('/api/courses/:id', async (req, res) => {
  const { id } = req.params; // Get the course ID from the URL parameters

  try {
      // Find the course by ID and remove it
      const deletedCourse = await Course.findByIdAndDelete(id);

      if (!deletedCourse) {
          return res.status(404).json({ message: 'Course not found' });
      }

      res.status(200).json({ message: 'Course deleted successfully', deletedCourse });
  } catch (error) {
      console.error('Error deleting course:', error);
      res.status(500).json({ message: 'Error deleting course', error });
  }
});

// GET route to retrieve a specific course by ID
app.get('/api/courses/:id', async (req, res) => {
  try {
      const course = await Course.findById(req.params.id); // Find course by ID
      if (!course) return res.status(404).json({ message: 'Course not found' });
      res.status(200).json(course); // Send course details as response
  } catch (error) {
      console.error('Error retrieving course:', error);
      res.status(500).json({ message: 'Error retrieving course', error });
  }
});

// PUT route to update a course by ID
app.put('/api/courses/:id', async (req, res) => {
  const { id } = req.params;
  const courseData = req.body;

  try {
      const updatedCourse = await Course.findByIdAndUpdate(id, courseData, { new: true }); // Update course and return the updated document
      if (!updatedCourse) return res.status(404).json({ message: 'Course not found' });
      res.status(200).json({ message: 'Course updated successfully', updatedCourse });
  } catch (error) {
      console.error('Error updating course:', error);
      res.status(500).json({ message: 'Error updating course', error });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
