// Import the express module
import express from "express";
// Create an express app
let app = express();
// Use the body-parser middleware to parse JSON requests
app.use(express.json());
// Define an interface for the patient type
interface Patient {
  id: number;
  username: string;
  password: string;
  gender: string;
}
// Create a middleware function to validate the patient data
function validatePatient(req: express.Request, res: express.Response, next: express.NextFunction): void {
  // Get the patient data from the request body
  let patient: Patient = req.body;
  // Check if the patient data is valid
  if (patient.id && patient.username && patient.password && patient.gender) {
    // Call the next middleware function
    next();
  } else {
    // Send a 400 status code and an error message
    res.status(400).send("Invalid patient data");
  }
}
// Create a route handler for POST requests to /patients
app.post("/patients", validatePatient, (req, res) => {
  // Get the patient data from the request body
  let patient: Patient = req.body;
  // Do something with the patient data, such as inserting it into a database
  // ...
  // Send a 201 status code and a success message
  res.status(201).send("Patient created successfully");
});
// Listen on port 3000
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
