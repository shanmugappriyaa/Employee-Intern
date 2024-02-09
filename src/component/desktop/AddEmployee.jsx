import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, edit } from "../../reducer/EmpReducer";

function AddEmployee() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [age, setAge] = useState("");
  const newemployee = useSelector((state) => state.employee);
  let dispatch = useDispatch();
  useEffect(() => {
    if (newemployee.selectedIndex > -1) {
      setId(newemployee.empList[newemployee.selectedIndex].id);
      setName(newemployee.empList[newemployee.selectedIndex].employee_name);
      setSalary(newemployee.empList[newemployee.selectedIndex].employee_salary);
      setAge(newemployee.empList[newemployee.selectedIndex].employee_age);
    } else {
      setId("");
      setName("");
      setSalary("");
      setAge("");
    }
  }, [newemployee]);

  const addEditEmployee = (ev) => {
    ev.preventDefault();
    if (id) {
      dispatch(
        edit({
          id,
          employee_name: name,
          employee_salary: salary,
          employee_age: age,
        })
      );
    } else {
      const autoId = Math.floor(Math.random() * (999 - 100 + 1) + 100);
      dispatch(
        add({
          id: autoId,
          employee_name: name,
          employee_salary: salary,
          employee_age: age,
        })
      );
    }
  };

  return (
    <div className="p-2 m-2">
      <h3>{id ? "Edit Employee Details" : "Add Employee Detail"}</h3>

      <form>
        {id && (
          <div class="form-group">
            <label>Employee id</label>
            <p>{id}</p>
          </div>
        )}
        <div class="form-group">
          <label>Employee Name</label>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Employee Salary</label>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Employee Age</label>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button
          type="button"
          class="btn btn-primary"
          onClick={(e) => addEditEmployee(e)}
        >
          {id ? "EDIT" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;
