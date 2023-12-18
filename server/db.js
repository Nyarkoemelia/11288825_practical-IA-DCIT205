// Define an interface for the patient type
interface Patient {
  id: number;
  username: string;
  password: string;
  gender: string;
}

// Import the database module
import * as db from "./db.js";

// Create a function to validate the password
function validatePassword(password: string): boolean {
  // Use a regular expression to check the password rules
  let regex = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}$/;
  return regex.test(password);
}

// Create a function to create a new patient
function createPatient(id: number, username: string, password: string, gender: string): Patient | null {
  // Check if the password is valid
  if (!validatePassword(password)) {
    // Return null if the password is invalid
    return null;
  }
  // Create a new patient object
  let patient: Patient = {
    id: id,
    username: username,
    password: password,
    gender: gender,
  };
  // Insert the patient into the database
  db.insert(patient);
  // Return the patient object
  return patient;
}
