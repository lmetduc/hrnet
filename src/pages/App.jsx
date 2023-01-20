
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "../pages/CreateEmployee/CreateEmployee";
import EmployeeList from "../pages/EmployeeList/EmployeeList";
import Error from "../pages/Error/Error";
import Footer from "../components/Footer/Footer";

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/employeeList" element={<EmployeeList />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
