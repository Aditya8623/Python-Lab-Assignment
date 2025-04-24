// src/components/StudentList.jsx
import { useEffect, useState } from "react";
import { getStudents, deleteStudent, updateStudent  } from "../services/studentService";
import AddStudentForm from "./AddStudentForm";


const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
      const data = await getStudents();
      setStudents(data);
    };
    
    const handleDelete = async (id) => {
        await deleteStudent(id);
        fetchStudents();
    };
    
    const handleEdit = (student) => {
      setEditingStudent(student); // opens the form for editing
    };

  return (
    <div className="container mt-4">
      <AddStudentForm
        onStudentAdded={fetchStudents}
        editingStudent={editingStudent}
        onUpdateStudent={async (id, data) => {
            await updateStudent(id, data);
            setEditingStudent(null);  // reset the form
            fetchStudents();          // refresh student list
         }}
      />

      <h2>Student List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Registration No.</th>
            <th>Address</th>                
            <th>Gender</th>  
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.registrationNumber}</td>
              <td>{student.address}</td>            
              <td>{student.gender}</td> 
              <td>
                <button
                  className="btn btn-secondary btn-sm me-2"
                  onClick={() => handleEdit(student)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(student._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
