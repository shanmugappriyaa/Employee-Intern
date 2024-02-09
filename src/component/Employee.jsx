import React, { useEffect, useState } from "react";
import EmployeeTable from "./desktop/EmployeeTable";
import EmployeeList from "./mobile/EmployeeList";
import { useDispatch, useSelector } from "react-redux";

function Employee() {
  let dispatch = useDispatch();
  const [empData, setEmpData] = useState([]);
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
  useEffect(() => {
    console.log("empState----------. ", empState?.empList);
    if (empState?.empList?.length > 0) {
      setEmpData([...empState.empList]);
    } else {
      apidata();
    }
  }, []);
  return (
    <>
      <div className="desktop">{empData && <EmployeeTable />}</div>
      <div className="mobile">{empData && <EmployeeList />}</div>
    </>
  );
}

export default Employee;
