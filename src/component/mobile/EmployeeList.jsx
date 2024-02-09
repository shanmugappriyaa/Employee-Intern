import React, { useEffect, useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { del, selectedEmp } from "../../reducer/EmpReducer";
import { CiEdit } from "react-icons/ci";
import AddEmployeeMobile from "./AddEmployeeMobile";
import { Data } from "../../utils/Data";

function EmployeeList() {
  const [empData, setEmpData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [addReditEmp, setAddReditEmp] = useState(false);

  let dispatch = useDispatch();
  let empState = useSelector((state) => state.employee);

  const addEditEmployee = (ev, i) => {
    ev.preventDefault();
    setSelectedIndex(i);
    dispatch(selectedEmp(i));
    setAddReditEmp(true);
  };
  useEffect(() => {
    setEmpData([...empState.empList]);
  }, [empState]);

  return (
    <div className="container">
      <div className="row">
        {!addReditEmp && (
          <div className="col-12">
            <div className="d-flex justify-content-between my-3">
              <h3 className="fw-bold">Employee List </h3>
              <button
                className="btn btn-primary"
                onClick={(e) => addEditEmployee(e, -1)}
              >
                Add
              </button>
            </div>

            {empData &&
              empData.map((emp, index) => (
                <div key={index}>
                  <div className="card mt-3 shadow border-0">
                    <div className="card-body">
                      <div className="row d-flex flex-column">
                        <div className="col-12 d-flex justify-content-between">
                          <label className="fw-bold">
                            {emp.employee_name} (ID: {emp.id})
                          </label>
                          <span
                            className="hover"
                            onClick={(e) => addEditEmployee(e, index)}
                          >
                            <CiEdit className="edit-icon" />
                          </span>
                        </div>
                        <div className="col-12 d-flex justify-content-between mt-3">
                          <label>Salary: Rs.{emp.employee_salary}</label>
                          <span
                            className="hover"
                            onClick={() => dispatch(del(index))}
                          >
                            {" "}
                            <MdOutlineDeleteForever className="delete-icon" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
        {addReditEmp && (
          <div className="col-12">
            <AddEmployeeMobile hideEdit={() => setAddReditEmp(false)} />
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeeList;
