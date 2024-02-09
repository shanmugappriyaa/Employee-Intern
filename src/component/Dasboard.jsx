import React, { useEffect, useState } from "react";
import { Data } from "../utils/Data";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "../chart/PieChart";
import BarChart from "../chart/BarChart";
import { useDispatch } from "react-redux";
import { addAll } from "../reducer/EmpReducer";
import axios from "axios";

Chart.register(CategoryScale);

function Dasboard() {
  const [empData, setEmpData] = useState([]);
  let dispatch = useDispatch();
  const [chartData, setChartData] = useState({});

  const [pieChartData, setPieChartData] = useState({});

  const updateBarChartConfig = (empData) => {
    const barChartConfig = {
      labels: empData.map((data) => data.employee_name?.slice(0, 4)),
      datasets: [
        {
          label: "Employee payroll chart",
          data: empData.map((data) => data.employee_salary),
          backgroundColor: ["#2a71d0"],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    };
    setChartData(barChartConfig);
  };

  const updatePieChartConfig = (empData) => {
    const initialValue = 0;
    const sal = empData.map((emp) => emp.employee_salary);
    const total = sal.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    const empPerArray = empData.map((emp) => {
      return {
        ...emp,
        percent: ((100 * emp?.employee_salary) / total).toFixed(2),
        randomColor: Math.floor(Math.random() * 16777215).toString(16),
      };
    });
    const colors = empPerArray.map((emp) => "#" + emp.randomColor);
    const pieChartConfig = {
      labels: empPerArray.map((data) => data.employee_name),
      datasets: [
        {
          label: "% in total",
          data: empPerArray.map((data) => data.percent),
          backgroundColor: colors,
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    };
    setPieChartData(pieChartConfig);
  };

  const apidata = async () => {
    try {
      const res = await axios.get(
        "http://dummy.restapiexample.com/api/v1/employees"
      );
      console.log("res=======> ", res);
      if (res?.data?.data) {
        const empData = res?.data?.data;
        setEmpData(empData);
        dispatch(addAll(empData));
        updateBarChartConfig(empData);
        updatePieChartConfig(empData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apidata();
  }, []);

  return (
    <div className="d-flex flex-column  align-items-center p-5">
      <div className="card">
        <div className="card-body">
          {chartData?.datasets && <BarChart chartData={chartData} />}
        </div>
      </div>

      <div className="m-t-48">
        <div className="card">
          <div className="card-body">
            {pieChartData?.datasets && <PieChart chartData={pieChartData} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dasboard;
