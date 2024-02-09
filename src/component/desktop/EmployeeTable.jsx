import React, { useEffect, useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { CiEdit } from "react-icons/ci";
import AddEmployee from "./AddEmployee";
import { del, selectedEmp } from "../../reducer/EmpReducer";

function EmployeeTable() {
  const [empData, setEmpData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  let dispatch = useDispatch();
  let empState = useSelector((state) => state.employee);

  const selectedEmployee = (ev, i) => {
    ev.preventDefault();
    setSelectedIndex(i);
    dispatch(selectedEmp(i));
  };
  useEffect(() => {
    setEmpData([...empState.empList]);
  }, [empState]);

  return (
    <div className="container">
      <div className="row">
        {empData && (
          <div className="col-6">
            <div className="d-flex justify-content-between my-3">
              <h2 className="fw-bold">Employee List </h2>
              <button
                className="btn btn-primary"
                onClick={() => dispatch(selectedEmp(-1))}
              >
                Add
              </button>
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th> Name</th>
                  <th>Salary</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {empData.map((emp, index) => (
                  <tr key={index}>
                    <td>{emp.id}</td>
                    <td>{emp.employee_name}</td>
                    <td>{emp.employee_salary}</td>
                    <td
                      className="hover"
                      onClick={(e) => selectedEmployee(e, index)}
                    >
                      <CiEdit />
                    </td>
                    <td className="hover" onClick={() => dispatch(del(index))}>
                      {" "}
                      <MdOutlineDeleteForever />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="col-6">
          <AddEmployee />
        </div>
      </div>
    </div>
  );
}

export default EmployeeTable;
