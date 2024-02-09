import React, { useEffect, useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { add, addAll, del, selectedEmp } from "../../reducer/EmpReducer";
import { CiEdit } from "react-icons/ci";
import AddEmployeeMobile from "./AddEmployeeMobile";

function EmployeeList() {
  const [empData, setEmpData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let empState = useSelector((state) => state.employee);
  const apidata = async () => {
    try {
      const apires = await fetch(
        "http://dummy.restapiexample.com/api/v1/employees"
      );
      const res = await apires.json();
      console.log(res.data);
      setEmpData(res.data);
      dispatch(addAll(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  const selectedEmployee = (ev, i) => {
    ev.preventDefault();
    setSelectedIndex(i);
    dispatch(selectedEmp(i));
  };
  useEffect(() => {
    setEmpData([...empState.empList]);
  }, [empState]);
  useEffect(() => {
    apidata();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="d-flex justify-content-between my-3">
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
        <div className="col-6">
          <AddEmployeeMobile />
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;
