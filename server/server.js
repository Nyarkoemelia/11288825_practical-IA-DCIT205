
class PatientDatabase:
    def _init_(self):
        self.patients = {
            "001": {
                "name": "Emelia AMPOFO",
                "address": "123 Main Street",
                "contact_info": "+1234567890",
                # Exclude sensitive data like emergency number, logins, password, and gender
            },
            "002": {
                "name": "Emelia Ampofo",
                "address": "456 Elm Street",
                "contact_info": "+9876543210",
                # Exclude sensitive data
            }
        }

    def get_patient(self, patient_id):
        return self.patients.get(patient_id, None)

# Usage example
db = PatientDatabase()
patient = db.get_patient("001")

# Access specific data points, excluding sensitive ones
print(f"Patient Name: {patient['name']}")
print(f"Patient Address: {patient['address']}")
print(f"Patient Contact: {patient['contact_info']}")
