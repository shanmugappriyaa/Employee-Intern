import React from "react";
import EmployeeTable from "./desktop/EmployeeTable";

function Employee() {
  return (
    <>
      <div className="desktop">
        <EmployeeTable />
      </div>
      <div className="mobile">
        <EmployeeTable />
      </div>
    </>
  );
}

export default Employee;
