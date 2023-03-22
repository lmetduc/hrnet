import { Routes, Route } from "react-router-dom";
import React from "react";
import CreateEmployee from "../CreateEmployee/CreateEmployee";
import EmployeeList from "../EmployeeList/EmployeeList";
import Error from "../Error/Error";

 function Router() {

  

  return (
    <div>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employeeList" element={<EmployeeList />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
export default Router;
