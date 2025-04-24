// src/services/studentService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/students";

export const getStudents = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addStudent = async (studentData) => {
  const res = await axios.post(API_URL, studentData);
  return res.data;
};

export const updateStudent = async (id, updatedData) => {
    const res = await axios.put(`${API_URL}/${id}`, updatedData);
    return res.data;
  };

export const deleteStudent = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};

