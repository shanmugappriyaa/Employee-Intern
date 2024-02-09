import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function EmpDetail() {
  let employeedetail = useSelector((state) => state.employee);
  console.log("employeedetail", employeedetail);
  const [emp, setEmp] = useState({});

  useEffect(() => {
    setEmp(employeedetail.empList[employeedetail.selectedIndex]);
    console.log(emp);
  }, [employeedetail]);
  return (
    <div>
      <h3>EmpDetail</h3>
      <div className="d-flex flex-column">
        <label className="fw-bold">Employee-ID</label>
        <label>{emp?.id}</label>
      </div>
      <div className="d-flex flex-column">
        <label className="fw-bold">Employee Name: </label>
        <label>{emp?.employee_name}</label>
      </div>
      <div className="d-flex flex-column">
        <label className="fw-bold">Salray</label>
        <label>{emp?.employee_salary}</label>
      </div>
      <div className="d-flex flex-column">
        <label className="fw-bold">Age</label>
        <label>{emp?.employee_age}</label>
      </div>
    </div>
  );
}

export default EmpDetail;
