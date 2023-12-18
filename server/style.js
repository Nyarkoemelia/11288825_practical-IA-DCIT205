// Import modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create app
const app = express();

// Use body-parser middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/restapi', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define a schema for books
const patientSchema = new mongoose.Schema({
  id: String,
  username: String,
  password: String,
  user login: Number
});

// Create a model for books
const Book = mongoose.model("patient", patientSchema);

// Define routes for books
app.get('/books', (req, res) => {
  // Get all books
  Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.get('/books/:id', (req, res) => {
  // Get a book by id
  Book.findById(req.params.id)
    .then(book => {
      if (book) {
        res.json(book);
      } else {
        res.status(404).json({ error: 'Book not found' });
      }
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/books', (req, res) => {
  // Create a new book
  const patient = new patient(req.body);
  patient.save()
    .then(patient => res.status(201).json(book))
    .catch(err => res.status(400).json({ error: err.message }));
});

app.put('/books/:id', (req, res) => {
  // Update a patient by id
  patient.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(patient) => {
      if (patient) {
        res.json(book);
      } else {
        res.status(404).json({ error: 'Book not found' });
      }
    })
    .catch(err => res.status(400).json({ error: err.message }));
});

app.delete('/patient/:id', (req, res) => {
  // Delete a patient by id
  patient.findByIdAndDelete(req.params.id)
    .then(patient => {
      if (patient) {
        res.json({ message: 'Book deleted' });
      } else {
        res.status(404).json({ error: 'Book not found' });
      }
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(Server running on port ${port}));