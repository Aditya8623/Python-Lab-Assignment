// src/components/AddStudentForm.jsx
/*import { useState, useEffect } from "react";
import { addStudent } from "../services/studentService";

const AddStudentForm = ({ onStudentAdded, editingStudent, onUpdateStudent }) => {
  const [name, setName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  
  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name);
      setRegistrationNumber(editingStudent.registrationNumber);
    } else {
      setName("");
      setRegistrationNumber("");
    }
  }, [editingStudent]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentData = { name, registrationNumber };

    try {
      if (editingStudent) {
        await onUpdateStudent(editingStudent._id, studentData);
      } else {
        await addStudent(studentData);
        onStudentAdded(); // refresh list
      }

      setName("");
      setRegistrationNumber("");
    } catch (error) {
      console.error("Failed to submit student:", error);
    }
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <h4>{editingStudent ? "Edit Student" : "Add Student"}</h4>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Registration No.</label>
        <input
          className="form-control"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {editingStudent ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default AddStudentForm;

*/

import { useState, useEffect } from "react";
import { addStudent } from "../services/studentService";

const AddStudentForm = ({ onStudentAdded, editingStudent, onUpdateStudent }) => {
  const [name, setName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name);
      setRegistrationNumber(editingStudent.registrationNumber);
      setAddress(editingStudent.address || "");
      setGender(editingStudent.gender || "");
    } else {
      setName("");
      setRegistrationNumber("");
      setAddress("");
      setGender("");
    }
  }, [editingStudent]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentData = { name, registrationNumber, address, gender };

    try {
      if (editingStudent) {
        await onUpdateStudent(editingStudent._id, studentData);
      } else {
        await addStudent(studentData);
        onStudentAdded(); // refresh list
      }

      setName("");
      setRegistrationNumber("");
      setAddress("");
      setGender("");
    } catch (error) {
      console.error("Failed to submit student:", error);
    }
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <h4>{editingStudent ? "Edit Student" : "Add Student"}</h4>

      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Registration No.</label>
        <input
          className="form-control"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Address</label>
        <input
          className="form-control"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Gender</label>
        <select
          className="form-select"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        {editingStudent ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default AddStudentForm;

